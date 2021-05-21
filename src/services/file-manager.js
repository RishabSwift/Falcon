import FalconStorage from "./storage";
import FalconInterfaceInjector from "../ui/ui-injector";

class FalconFileManager {

    API_URL = 'https://owl.uwo.ca/direct/content/site/';
    CACHE_TTL = 10 * 60 * 1000; // 10 minutes
    STORAGE_KEY = 'falconResources';

    forceRecache = false;
    falconResources = [];
    currentCourse; // current course ID in format 39cbafa5-fa7b-4a18-8ca8-d7ae032c8de8


    constructor(courseId, courseName) {
        this.currentCourse = courseName;
        this.courseId = courseId;
        FalconInterfaceInjector.falconResources();
        this.addEventListeners();
    }

    addEventListeners() {
        let showOriginal = false;

        $('#toggle-original-resource').on('click', function () {
            if (showOriginal) {
                $('#showForm').slideUp();
                showOriginal = false;
                $(this).html('Show Original Resources');
            } else {
                $('#showForm').slideDown();
                showOriginal = true;
                $(this).html('Hide Original Resources');
            }
        })


        $('#refresh-resources-button').on('click', function () {
            $(this).hide();
            $('#last-fetched-time').html('Re-fetching...');
            // startFileManager(true).then(() => {
            //     $(this).show();
            // })
        })

        this.setupResources();
    }

    forceRefresh() {
        this.forceRecache = true;
        return this;
    }

    async setupResources() {

        let result = await this.getResourcesForCourse();

        $("#file-manager").dxFileManager({
            name: "fileManager",
            fileSystemProvider: result,
            rootFolderName: "Falcon",
            selectionMode: "single",
            currentPath: this.currentCourse,
            height: function () {
                return window.innerHeight / 1.5;
            },
            permissions: {
                download: false,
            },
            onSelectedFileOpened: function (e) {
                if (isImage(e.file.dataItem.mimeType)) {
                    var popup = $("#photo-popup").dxPopup("instance");
                    console.log(e);
                    popup.option({
                        "title": e.file.name,
                        "contentTemplate": `<img src="${e.file.dataItem.url}" class="photo-popup-image"/>`,
                    });
                    popup.show();
                } else {
                    openFileInNewTab(e.file.dataItem.url);
                }
            },
            onContextMenuItemClick: onItemClick,
            toolbar: {
                items: [
                    {
                        name: "showNavPane",
                        visible: true
                    },
                    'refresh', 'separator',
                    'switchView',
                ],


            },
            itemView: {
                details: {
                    columns: [
                        "thumbnail",
                        "name",
                        "size",
                        {
                            dataField: "modified_at",
                            caption: "Last Modified",
                            width: 'auto',
                            dataType: 'date',
                        },
                        {
                            dataField: "created_by",
                            caption: "Created By",
                            width: 'auto'
                        },


                    ]
                }
            },
        });

        // Whenever an item is (double) clicked, download it
        function onItemClick(args) {
            let url = args.fileSystemItem.dataItem.url;
            // they wanna download
            if (args.itemData === 'download') {
                if (url) {
                    download(url);
                }
            }
        }

        function openFileInNewTab(url) {
            window.open(url, '_blank');
        }

        function isImage(mimeType) {
            return mimeType.split('/')[0] === 'image'; //returns true or false
        }

        function download(url) {
            let a = document.createElement("a");
            a.href = url;
            a.click();
        }
    }

    // Get resources
    async getResourcesForCourse() {

        let {falconResources} = await this.getResources();

        let data;

        // if we don't have any resources saved... or we want to RE-CACHE it
        if (!falconResources || this.forceRecache) {
            this.forceRecache = false;
            data = await this.fetchResourcesForCourse();
            return await this.saveResources(data); // returning it as a promise so that we can do .then
            // return this.falconResources; // falconResources is already saved, so we're returning it to keep it
        }

        let exists = FalconStorage.existsInStorage(falconResources, 'courseId', this.courseId);

        if (!exists) {
            data = await this.fetchResourcesForCourse();
            await this.saveResources(data);
            return data;
        }

        // if exists
        let falconResource = falconResources.filter(item => {
            return item.courseId === this.courseId;
        })[0];

        // make sure it's not older than TTL... otherwise re-fetch
        if (this.isExpired(falconResource)) {
            data = await this.fetchResourcesForCourse();
            await this.saveResources(data);
            return data;
        }

        return falconResource.courses;

    }

    async getResources() {
        let {falconResources} = await FalconStorage.local().get(this.STORAGE_KEY)
        this.falconResources = falconResources;
        return falconResources;
    }

    async saveResources(data) {

        // let {falconResources} = await this.getResources();
        //
        // if (!falconResources) {
        //     falconResources = [];
        // }

        let currentTimeInMillis = (new Date()).getTime();
        let exists = FalconStorage.existsInStorage(this.falconResources, 'courseId', this.courseId);

        // if it exists... update it..
        if (exists) {
            this.falconResources.map(item => {
                if (item.courseId === this.courseId) {
                    item.courses = data;
                    item.lastFetched = currentTimeInMillis;
                    return item;
                }
                return item;
            })
        } else {
            // otherwise, add a new record
            this.falconResources.push({
                courseName: this.currentCourse,
                courseId: this.courseId,
                courses: data,
                lastFetched: currentTimeInMillis
            })
        }

        // and save it in storage
         return FalconStorage.set({falconResources: this.falconResources});
    }

    isExpired(falconResource) {
        return new Date() - new Date(falconResource.lastFetched) > this.CACHE_TTL
    }

    async fetchResourcesForCourse() {
        let file;
        await fetch(this.API_URL + this.courseId + '.json')
            .then(response => response.json())
            .then(json => {
                file = json;
            });

        if (file) {
            return file.content_collection;
        }
    }

    // save the cache of the file manager...
    saveCache() {

    }

    parseRawFileDataIntoTree(rawFileStructure) {

        // final file structure result
        let result = [];

        let level = {result};

        rawFileStructure.forEach(file => {
            let rawFilePath;
            if (file.type === 'collection') {
                rawFilePath = decodeURIComponent(file.url.slice(0, -1)).split('/');
            } else {
                rawFilePath = decodeURIComponent(file.url).split('/');
            }
            rawFilePath = rawFilePath.splice(6);
            rawFilePath[0] = this.courseId;
            rawFilePath = rawFilePath.join('/');

            let dateString = file.modifiedDate.substr(0, 8);
            let year = dateString.substring(0, 4);
            let month = dateString.substring(4, 6);
            let day = dateString.substring(6, 8);
            let date = new Date(year, month - 1, day).toLocaleString('en-us', {month: 'long', year: 'numeric', day: 'numeric'});

            let path = rawFilePath;

            let sharedDataToShow = { //TODO Fix
                modified_at: date,
                created_by: file.author,
            }

            path.split('/').reduce((r, name, i, a) => {
                if (!r[name]) {
                    r[name] = {result: []};
                    if (file.type === 'collection') {
                        r.result.push({name, isDirectory: true, modified_at: date, created_by: file.author, items: r[name].result})
                    } else {
                        r.result.push({name, url: file.url, mimeType: file.type, modified_at: date, created_by: file.author, size: file.size, items: r[name].result})

                    }
                }
                return r[name];
            }, level)
        })

        return result;
    }

}
export default FalconFileManager;
