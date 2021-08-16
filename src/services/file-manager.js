import FalconStorage from "./storage";
import FalconInterfaceInjector from "../ui/ui-injector";
import FileManager from "devextreme/ui/file_manager";
import TextBox from "devextreme/ui/text_box";
import PopUp from "devextreme/ui/popup";

class FalconFileManager {

    API_URL = 'https://owl.uwo.ca/direct/content/site/';
    CACHE_TTL = 10 * 60 * 1000; // 10 minutes
    STORAGE_KEY = 'falconResources';

    forceRecache = false;
    falconResources = []; // all resources from all courses

    searchString = '';

    falconFileManager;

    constructor(courseId, courseName) {
        this.currentCourse = courseName; // The original Course Name
        this.courseId = courseId; // current course ID in format 39cbafa5-fa7b-4a18-8ca8-d7ae032c8de8

        FalconInterfaceInjector.falconResources();
        this.addEventListeners();
    }

    addEventListeners() {
        let showOriginal = false;
        let self = this;

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

        setTimeout(function() {
        self.setupResources().then(() => {
            $('#loading-resources').remove();
        });
        }, 0)

        // $('#refresh-resources-button').on('click', function () {
        //     $(this).hide();
        //     $('#last-fetched-time').html('Re-

        //     // startFileManager(true).then(() => {
        //     //     $(this).show();
        //     // })
        // })

    }

    forceRefresh() {
        this.forceRecache = true;
        return this;
    }


    async setupResources() {

        let result = await this.getResourcesForCourse();

        // $('#file-manager-search').dxTextBox({
        //    value: 'lol',
        //     showClearButton: true,
        // });


        function searchResources(searchText) {
            const localData = [...result];

            function getValueLogic(result, searchText) {
                searchText = searchText.toLowerCase();
                const arr = [];
                if (result && Array.isArray(result)) {
                    for (let i = 0; i < result.length; i++) {
                        const ele = result[i];
                        ele && ele.name.toLowerCase().includes(searchText)
                            ? arr.push(ele)
                            : arr.push(...getValueLogic(ele.items, searchText));
                    }
                }
                return arr;
            }

            return getValueLogic(localData, searchText);
        }


        // console.log(result);

        // make sure we have the element
        if ($('#file-manager').length === 0) {
            return;
        }

        var popup = new PopUp('#photo-popup');

        let self = this;

        let falconFileManager = new FileManager(document.getElementById('file-manager'), {
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
                   popup.option({
                        "title": e.file.name,
                        "contentTemplate": `<img src="${e.file.dataItem.url}" class="photo-popup-image"/><div  style="margin-top: 1.5rem"><a target="_blank"href="${e.file.dataItem.url}"><i class="fe fe-external-link"></i> Open in New Tab</a></div>`,
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
                        {
                            dataField: "size",
                            caption: "Size",
                            width: 'auto',
                        },
                        {
                            dataField: "modified_at",
                            caption: "Last Modified",
                            width: 'auto',
                            dataType: 'date',

                        },
                        {
                            dataField: "created_by",
                            caption: "Created By",
                            width: 'auto',
                        },


                    ]
                }
            },
        });

        new TextBox('#file-manager-search', {
            placeholder: 'Search...',
            width: '300px',
            showClearButton: true,
            valueChangeEvent: "keyup",
            onValueChanged: function (event) {



            let searchResult;
            if (event.value === '' || !event.value) {
                searchResult = result;
            } else {
                self.searchString = event.value;
                searchResult = searchResources(self.searchString);
            }
            setTimeout(function() {
            falconFileManager.option('fileSystemProvider', searchResult);
            }, 500);


                // event.value = 232;
                // console.log(event);
                // $('input[name=file-manager-search]').option
            },
        })

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

        // https://stackoverflow.com/questions/1909441/how-to-delay-the-keyup-handler-until-the-user-stops-typing
        function delay(callback, ms) {
            var timer = 0;
            return function() {
                var context = this, args = arguments;
                clearTimeout(timer);
                timer = setTimeout(function () {
                    callback.apply(context, args);
                }, ms || 0);
            };
        }

    }

    // Get resources
    async getResourcesForCourse() {

        let falconResources = await this.getResources();

        let data;

        // if we don't have any resources saved... or we want to RE-CACHE it
        if (!falconResources || this.forceRecache) {
            this.forceRecache = false;
            data = await this.fetchResourcesForCourse();
            return data;
        }

        let exists = FalconStorage.existsInStorage(falconResources, 'courseId', this.courseId);

        if (!exists) {
            data = await this.fetchResourcesForCourse();
            return data;
        }

        // if exists
        let falconResource = falconResources.filter(item => {
            return item.courseId === this.courseId;
        })[0];

        // make sure it's not older than TTL... otherwise re-fetch
        if (this.isExpired(falconResource)) {
            data = await this.fetchResourcesForCourse();
            return data;
        }

        return falconResource.courses;

    }

    async getResources() {
        // first check the local storage...
        let {falconResources} = await FalconStorage.local().get(this.STORAGE_KEY)

        // if it doesn't exist at all... then we haven't set anything in the local storage
        if (!falconResources) {
            return false;
        }

        return falconResources;
    }

    async saveResources(data) {

        // let {falconResources} = await this.getResources();
        //

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
        return FalconStorage.local().set({falconResources: this.falconResources});
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
            let data = this.parseRawFileDataIntoTree(file.content_collection);
            await this.saveResources(data);
            return data;
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
            rawFilePath[0] = this.currentCourse;
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
                        r.result.push({name, isDirectory: true, modified_at: date, size: file.size, created_by: file.author, items: r[name].result})
                    } else {
                        r.result.push({name, url: file.url, mimeType: file.type, modified_at: date, created_by: file.author, size: file.size, items: r[name].result})

                    }
                }
                return r[name];
            }, level)
        })

        return result;
    }

    // https://stackoverflow.com/questions/3177836/how-to-format-time-since-xxx-e-g-4-minutes-ago-similar-to-stack-exchange-site
    timeAgo(time) {

        switch (typeof time) {
            case 'number':
                break;
            case 'string':
                time = +new Date(time);
                break;
            case 'object':
                if (time.constructor === Date) time = time.getTime();
                break;
            default:
                time = +new Date();
        }
        var time_formats = [
            [60, 'seconds', 1], // 60
            [120, '1 minute ago', '1 minute from now'], // 60*2
            [3600, 'minutes', 60], // 60*60, 60
            [7200, '1 hour ago', '1 hour from now'], // 60*60*2
            [86400, 'hours', 3600], // 60*60*24, 60*60
            [172800, 'Yesterday', 'Tomorrow'], // 60*60*24*2
            [604800, 'days', 86400], // 60*60*24*7, 60*60*24
            [1209600, 'Last week', 'Next week'], // 60*60*24*7*4*2
            [2419200, 'weeks', 604800], // 60*60*24*7*4, 60*60*24*7
            [4838400, 'Last month', 'Next month'], // 60*60*24*7*4*2
            [29030400, 'months', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
            [58060800, 'Last year', 'Next year'], // 60*60*24*7*4*12*2
            [2903040000, 'years', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
            [5806080000, 'Last century', 'Next century'], // 60*60*24*7*4*12*100*2
            [58060800000, 'centuries', 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
        ];
        var seconds = (+new Date() - time) / 1000,
            token = 'ago',
            list_choice = 1;


        if (seconds === 0 || seconds < 0.05) {
            return 'just now'
        }
        if (seconds < 0) {
            seconds = Math.abs(seconds);
            token = 'from now';
            list_choice = 2;
        }
        var i = 0,
            format;
        while (format = time_formats[i++])
            if (seconds < format[0]) {
                if (typeof format[2] == 'string')
                    return format[list_choice];
                else
                    return Math.floor(seconds / format[2]) + ' ' + format[1] + ' ' + token;
            }
        return time;
    }

}

export default FalconFileManager;
