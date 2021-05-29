import FalconStorage from "./storage";
import FalconInterfaceInjector from "../ui/ui-injector";
import config from "devextreme/core/config";
import Diagram from "devextreme/ui/diagram";

class FalconEditor {

    STORAGE_KEY = 'falconEditor';
    uiEditor;
    falconEditor = []; // array of all diagrams from all courses
    currentCourse;

    constructor(currentCourse) {
        this.currentCourse = currentCourse;
        FalconInterfaceInjector.falconEditorButton();
        this.addEventListeners();
    }

    addEventListeners() {
        let isOpen = false;
        let self = this;

        if (!isOpen) {
            cleanupEditor();
        }

        $('#falcon-editor-button').on('click', function () {
            $('#falcon-editor-icon').addClass('fa-spin fe-loader').removeClass('fe-edit-2 fe-x');
            if (isOpen) {
                $('#falcon-editor-title').html('Saving...');
                self.saveFalconEdits(self.uiEditor.export()).then(item => {
                    $('#falcon-editor-title').html('Saved!');
                })
            }

            // Async to prevent from the slight freeze up
            setTimeout(function () {
                isOpen = !isOpen;
                if (isOpen) {
                    $('.Mrphs-pagebody').hide();
                    $('a.Mrphs-toolsNav__menuitem--link').not('#falcon-editor-button').parent().hide();
                    $('#falcon-editor-title').html('Close Editor');
                    $('#falcon-editor-icon').removeClass('fa-spin fe-loader fe-edit-2').addClass('fe-x')
                    $('#pageBody').append(`<div id="falcon-editor-diagram"></div>`)
                    self.setupEditor();
                    self.getEditorDataFromStorage();
                } else {
                 cleanupEditor();
                }
            }, 0)
        })

        function cleanupEditor() {
            $('#falcon-editor-title').html('Falcon Editor');
            $('a.Mrphs-toolsNav__menuitem--link').not('#falcon-editor-button').parent().show();
            $('#falcon-editor-icon').removeClass('fa-spin fe-loader fe-x').addClass('fe-edit-2')
            $('#falcon-editor-diagram').remove();
            $('.Mrphs-pagebody').show();
        }
    }

    setupEditor() {
        let autoSaveIntervalMs = 2000;
        let autoSaveTimeout = -1;

        let self = this;

        this.uiEditor = new Diagram(document.getElementById("falcon-editor-diagram"), {

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
                        let data = e.component.export();
                        autoSaveTimeout = -1;
                        self.saveFalconEdits(data).then(function () {
                            e.component.option("hasChanges", false);
                        });

                    }, autoSaveIntervalMs);
                }
            },

            "width": '100%'
        });
    }


    saveFalconEdits(data) {
        let exists = FalconStorage.existsInStorage(this.falconEditor, 'courseName', this.currentCourse);
        if (exists) {
            this.falconEditor.map((item => {
                if (item.courseName === this.currentCourse) {
                    return item.diagramData = data;
                }
                return item;
            }));
        } else {
            this.falconEditor.push({
                courseName: this.currentCourse,
                diagramData: data
            })
        }

        return FalconStorage.set({falconEditor: this.falconEditor})
    }

    async getEditorDataFromStorage() {
        let {falconEditor} = await FalconStorage.local().get(this.STORAGE_KEY);
        this.falconEditor = falconEditor;

        // if there's no data... it means that it's a new user visiting the falcon editor
        // populate it with default data and show them the welcome page
        // It's NOT saved in storage (because it's dummy data)
        if (!falconEditor) {
            this.falconEditor = [];
            this.importDataToEditor(this.defaultData());
            return;
        }

        let exists = FalconStorage.existsInStorage(falconEditor, 'courseName', this.currentCourse);
        if (exists) {
            let falconEdit = falconEditor.filter(item => {
                return item.courseName === this.currentCourse;
            })[0];
            this.importDataToEditor(falconEdit.diagramData);
        }
    }

    importDataToEditor(data) {
        this.uiEditor.import(data);
    }

    // Default falcon editor data
    defaultData() {
        return `{"page":{"width":16782,"height":23812,"pageColor":-1,"pageWidth":8391,"pageHeight":11906,"pageLandscape":false},"connectors":[{"key":"9","dataKey":"f42178f6-a498-49e7-943d-27b0b741f653","locked":false,"zIndex":0,"points":[{"x":11562,"y":9386},{"x":10842,"y":11006}],"styleText":{"font-size":"14pt"},"beginItemKey":"4","beginConnectionPointIndex":-1,"endItemKey":"6","endConnectionPointIndex":-1},{"key":"10","dataKey":"5535914e-b95a-4d63-8438-cc70c440356a","locked":false,"zIndex":0,"points":[{"x":11562,"y":9386},{"x":12282,"y":11006}],"styleText":{"font-size":"14pt"},"beginItemKey":"4","beginConnectionPointIndex":-1,"endItemKey":"5","endConnectionPointIndex":-1}],"shapes":[{"key":"1","dataKey":"8ffd4013-cc19-4567-b241-5183167b8c85","locked":false,"zIndex":0,"type":"rectangle","text":"Each course has its own editor","x":8502,"y":16406,"width":6120,"height":540},{"key":"2","dataKey":"bfffcc2c-ab59-4ff1-8582-a2a8952848b1","locked":false,"zIndex":0,"type":"rectangle","text":"To get started, select all these elements and hit delete!","x":8322,"y":16946,"width":6480,"height":720},{"key":"3","dataKey":"d054a3b3-9b51-45a9-96cb-5b31e958c513","locked":false,"zIndex":0,"type":"heart","text":"Good luck!","x":10302,"y":14066,"width":2520,"height":2160,"style":{"fill":"#ffcccc","stroke":"#ffffff"},"styleText":{"fill":"#8a0000","font-size":"14pt"}},{"key":"4","dataKey":"c33421dc-650b-4ace-89de-b0c9048d4e02","locked":false,"zIndex":0,"type":"rectangle","text":"Welcome to this new Falcon Editor!","x":7062,"y":8486,"width":9000,"height":900,"style":{"fill":"#6400ff","stroke":"#ffffff"},"styleText":{"fill":"#ffffff","font-family":"Helvetica","font-size":"24pt"}},{"key":"5","dataKey":"d97730d1-3f1a-45b5-9b75-651fa3c90327","locked":false,"zIndex":0,"type":"ellipse","text":"Draw diagrams","x":12282,"y":10286,"width":1800,"height":1440,"styleText":{"font-size":"14pt"}},{"key":"6","dataKey":"0463af6f-c987-4f2d-8069-9318cec6efd5","locked":false,"zIndex":0,"type":"ellipse","text":"Draw flow-charts","x":9042,"y":10286,"width":1800,"height":1440,"styleText":{"font-size":"14pt"}},{"key":"7","dataKey":"bbb957b3-7141-4a99-9eb7-5b19b8f7aa49","locked":false,"zIndex":0,"type":"octagon","text":"And so much more!","x":10842,"y":11546,"width":1440,"height":1440,"styleText":{"font-size":"14pt"}},{"key":"8","dataKey":"aa13a0e0-3350-48aa-a6c5-7e78234ec723","locked":false,"zIndex":0,"type":"text","text":"You can export your diagrams as PNG, JPG and SVG \\nfrom the bottom left","x":9042,"y":13166,"width":5400,"height":720,"style":{"fill":"#969696"},"styleText":{"fill":"#919191"}}]}`;
    }

}

export default FalconEditor;
