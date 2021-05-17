setupFalconEditorButton();
var currentCourse;
setupResources();


// NOTE: dark mode css is directly added to the darkmode.css file...

async function setupResources() {

    let showOriginal = false;

    if ($('.page-header h1').html() === 'Site Resources') {
        $(`<div id="file-manager"></div><div id="photo-popup"></div><button id="toggle-original-resource" class="mt-5">Show Original Resources</button>`).insertAfter($('.page-header'));
        $('#showForm').hide();
        $(`<h1 id="loading-resources">Loading resources...</h1>`).insertAfter('.page-header');
        await startFileManager();
        $('#loading-resources').remove();
    }

    $('#toggle-original-resource').on('click', function () {
        if (showOriginal) {
            $('#showForm').hide();
            showOriginal = false;
            $(this).html('Show Original Resources');
        } else {
            $('#showForm').show();
            showOriginal = true;
            $(this).html('Hide Original Resources');
        }
    })


}

function setupFalconEditorButton() {

    $('.Mrphs-toolsNav__menu ul').append(`<li><a href="javascript:;" class="Mrphs-toolsNav__menuitem--link" id="falcon-editor" title="Double Click to open. A powerful diagram editor included with Falcon"><span id="falcon-editor-icon" class="Mrphs-toolsNav__menuitem--icon fa fa-pencil "></span><span id="falcon-editor-title" class="Mrphs-toolsNav__menuitem--title">Falcon Editor</span></a></li>`)

    currentCourse = getCurrentCourseName();

    $('#falcon-editor').on('click', function () {
        handleFalconEditorButtonToggle();
        falconEditorOpen = !falconEditorOpen;
    })


}

function handleFalconEditorButtonToggle() {
    let pageBody = $('.Mrphs-pagebody');
    if (!falconEditorOpen) {
        pageBody.hide();
        $('a.Mrphs-toolsNav__menuitem--link').not('#falcon-editor').parent().hide();
        $('#falcon-editor-title').html('Close Editor');
        $('#falcon-editor-icon').removeClass('fa-pencil').addClass('fa-close')
        $('#pageBody').append(`<div id="falcon-editor-diagram"></div>`)
        setupFalconEditor();
    } else {
        $('#falcon-editor-title').html('Falcon Editor');
        $('a.Mrphs-toolsNav__menuitem--link').not('#falcon-editor').parent().show();
        $('#falcon-editor-icon').removeClass('fa-close').addClass('fa-pencil')
        $('#falcon-editor-diagram').remove();
        pageBody.show();
    }

}


function getCurrentCourseName() {
    return $('.Mrphs-sitesNav__menuitem.is-selected a.link-container').attr('title');
}


let falconEditorOpen = false;


async function getFileSystem() {

    let file;
    let currentSiteId = $('.Mrphs-sitesNav__menuitem.is-selected a').first().attr('data-site-id');
    await fetch('https://owl.uwo.ca/direct/content/site/' + currentSiteId + '.json')
        .then(response => response.json())
        .then(json => {
            file = json;
        });
    //
    if (file) {
        return file.content_collection;
    }
}


async function startFileManager() {
    let fileTree = await getFileSystem();

    let parsedFile = [];

    let folders = fileTree.filter(item => {
        return item.type === 'collection';
    });

    folders.forEach(folder => {
        parsedFile.push({
            name: folder.title,
            isDirectory: true,
            items: []
        })
    })

    let result = [];

    let level = {result};

    currentCourse = getCurrentCourseName();

    fileTree.forEach(file => {


        let s;
        if (file.type === 'collection') {
            s = decodeURIComponent(file.url.slice(0, -1)).split('/');
        } else {
            s = decodeURIComponent(file.url).split('/');
        }
        s = s.splice(6);
        s[0] = currentCourse;
        s = s.join('/');

        let dateString = file.modifiedDate.substr(0, 8);
        let year = dateString.substring(0, 4);
        let month = dateString.substring(4, 6);
        let day = dateString.substring(6, 8);
        let date = new Date(year, month - 1, day).toLocaleString('en-us', {month: 'long', year: 'numeric', day: 'numeric'});

        let path = s;
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


    $("#file-manager").dxFileManager({
        name: "fileManager",
        fileSystemProvider: result,
        rootFolderName: "Falcon",
        selectionMode: "single",
        currentPath: currentCourse,
        height: function () {
            return window.innerHeight / 1.3;
        },

        permissions: {
            download: false,
        },
        onSelectedFileOpened: function (e) {

            console.log(e.file.dataItem.url);
            if (isImage(e.file.dataItem.mimeType)) {
                var popup = $("#photo-popup").dxPopup("instance");
                console.log(e);
                popup.option({
                    "title": e.file.name,
                    "contentTemplate": "<img src=\"" + e.file.dataItem.url + "\" class=\"photo-popup-image\" />"
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


    function onItemClick(args) {
        let url = args.fileSystemItem.dataItem.url;
        // they wanna download
        if (args.itemData === 'download') {
            if (url) {
                download(url);
                return;
            }
        }
    }

}


function getStorageData(key) {
    return new Promise((resolve, reject) =>
        chrome.storage.sync.get(key, result =>
            chrome.runtime.lastError
                ? reject(Error(chrome.runtime.lastError.message))
                : resolve(result)
        )
    );
}


function setStorageData(data) {
    return new Promise((resolve, reject) =>
        chrome.storage.sync.set(data, () =>
            chrome.runtime.lastError
                ? reject(Error(chrome.runtime.lastError.message))
                : resolve()
        )
    );
}

function download(dataurl) {
    var a = document.createElement("a");
    a.href = dataurl;
    a.click();
}

function openFileInNewTab(url) {
    window.open(url, '_blank');
}

$("#photo-popup").dxPopup({
    maxHeight: 600,
    closeOnOutsideClick: true,
    onContentReady: function (e) {
        var $contentElement = e.component.content();
        $contentElement.addClass("photo-popup-content");
    }
});

function isImage(mimeType) {
    return mimeType.split('/')[0] === 'image'; //returns true or false
}

var ss;

function setupFalconEditor() {
    var autoSaveIntervalMs = 2000;
    var autoSaveTimeout = -1;
    ss = new DevExpress.ui.dxDiagram(document.getElementById("falcon-editor-diagram"), {

        "height": function () {
            return window.innerHeight / 1.1;
        },
        "nodes": {
            "autoLayout": {
                "orientation": "horizontal"
            }
        },
        propertiesPanel: {
            visibility: 'disabled',
        },
        "simpleView": true,
        "toolbox": {
            "visible": true
        },
        historyToolbar: {
            visible: false
        },
        mainToolbar: {
            visible: true,
        },

        onOptionChanged: function (e) {
            if (e.name === "hasChanges" && e.value && autoSaveTimeout === -1) {

                autoSaveTimeout = setTimeout(function () {
                    var data = e.component.export();
                    console.log('updatinggg...');
                    autoSaveTimeout = -1;
                    saveFalconEdits(data).then(function () {
                        e.component.option("hasChanges", false);
                    });

                }, autoSaveIntervalMs);
            }
        },

        "width": '100%'
    });

    getFalconEditorData();

}

async function saveFalconEdits(data) {
    let {falconEditor} = await getStorageData('falconEditor');

    if (!falconEditor) {
        falconEditor = [];
    }

    let index = falconEditor.findIndex(item => item.courseName === currentCourse);
    // if it exists... update it..
    if (index !== -1) {
        falconEditor.map(item => {
            if (item.courseName === currentCourse) {
                return item.diagramData = data;
            }
            return item;
        })
    } else {
        falconEditor.push({courseName: currentCourse, diagramData: data})
    }

    await setStorageData({falconEditor: falconEditor});

}

async function getFalconEditorData() {
    let {falconEditor} = await getStorageData('falconEditor');

    if (!falconEditor) {
        ss.import(`{"page":{"width":16782,"height":23812,"pageColor":-1,"pageWidth":8391,"pageHeight":11906,"pageLandscape":false},"connectors":[{"key":"9","dataKey":"f42178f6-a498-49e7-943d-27b0b741f653","locked":false,"zIndex":0,"points":[{"x":11562,"y":9386},{"x":10842,"y":11006}],"styleText":{"font-size":"14pt"},"beginItemKey":"4","beginConnectionPointIndex":-1,"endItemKey":"6","endConnectionPointIndex":-1},{"key":"10","dataKey":"5535914e-b95a-4d63-8438-cc70c440356a","locked":false,"zIndex":0,"points":[{"x":11562,"y":9386},{"x":12282,"y":11006}],"styleText":{"font-size":"14pt"},"beginItemKey":"4","beginConnectionPointIndex":-1,"endItemKey":"5","endConnectionPointIndex":-1}],"shapes":[{"key":"1","dataKey":"8ffd4013-cc19-4567-b241-5183167b8c85","locked":false,"zIndex":0,"type":"rectangle","text":"Each course has its own editor","x":8502,"y":16406,"width":6120,"height":540},{"key":"2","dataKey":"bfffcc2c-ab59-4ff1-8582-a2a8952848b1","locked":false,"zIndex":0,"type":"rectangle","text":"To get started, select all these elements and hit delete!","x":8322,"y":16946,"width":6480,"height":720},{"key":"3","dataKey":"d054a3b3-9b51-45a9-96cb-5b31e958c513","locked":false,"zIndex":0,"type":"heart","text":"Good luck!","x":10302,"y":14066,"width":2520,"height":2160,"style":{"fill":"#ffcccc","stroke":"#ffffff"},"styleText":{"fill":"#8a0000","font-size":"14pt"}},{"key":"4","dataKey":"c33421dc-650b-4ace-89de-b0c9048d4e02","locked":false,"zIndex":0,"type":"rectangle","text":"Welcome to this new Falcon Editor!","x":7062,"y":8486,"width":9000,"height":900,"style":{"fill":"#6400ff","stroke":"#ffffff"},"styleText":{"fill":"#ffffff","font-family":"Helvetica","font-size":"24pt"}},{"key":"5","dataKey":"d97730d1-3f1a-45b5-9b75-651fa3c90327","locked":false,"zIndex":0,"type":"ellipse","text":"Draw diagrams","x":12282,"y":10286,"width":1800,"height":1440,"styleText":{"font-size":"14pt"}},{"key":"6","dataKey":"0463af6f-c987-4f2d-8069-9318cec6efd5","locked":false,"zIndex":0,"type":"ellipse","text":"Draw flow-charts","x":9042,"y":10286,"width":1800,"height":1440,"styleText":{"font-size":"14pt"}},{"key":"7","dataKey":"bbb957b3-7141-4a99-9eb7-5b19b8f7aa49","locked":false,"zIndex":0,"type":"octagon","text":"And so much more!","x":10842,"y":11546,"width":1440,"height":1440,"styleText":{"font-size":"14pt"}},{"key":"8","dataKey":"aa13a0e0-3350-48aa-a6c5-7e78234ec723","locked":false,"zIndex":0,"type":"text","text":"You can export your diagrams as PNG, JPG and SVG \\nfrom the bottom left","x":9042,"y":13166,"width":5400,"height":720,"style":{"fill":"#969696"},"styleText":{"fill":"#919191"}}]}`);
        return;
    }

    let index = falconEditor.findIndex(item => item.courseName === currentCourse);
    // exists already!
    if (index !== -1) {
        let falconEdit = falconEditor.filter(item => {
            return item.courseName === currentCourse;
        })[0];

        ss.import(falconEdit.diagramData);
    }

}
