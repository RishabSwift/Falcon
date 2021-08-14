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
                        console.log(data);
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
        return `{"page":{"width":16782,"height":23812,"pageColor":-1,"pageWidth":8391,"pageHeight":11906,"pageLandscape":false},"connectors":[{"key":"20","locked":false,"zIndex":0,"points":[{"x":9540,"y":10620},{"x":10980,"y":10620}],"style":{"stroke":"#e86048"},"beginItemKey":"6","beginConnectionPointIndex":1,"endItemKey":"5","endConnectionPointIndex":3},{"key":"21","locked":false,"zIndex":0,"points":[{"x":12960,"y":10620},{"x":14040,"y":10620}],"style":{"stroke":"#2d47b8"},"beginItemKey":"5","beginConnectionPointIndex":1,"endItemKey":"14","endConnectionPointIndex":3},{"key":"23","locked":false,"zIndex":0,"points":[{"x":11610,"y":16200},{"x":11610,"y":17100}],"style":{"stroke":"#fd513a"},"beginItemKey":"13","beginConnectionPointIndex":-1,"endItemKey":"3","endConnectionPointIndex":-1}],"shapes":[{"key":"3","dataKey":"d054a3b3-9b51-45a9-96cb-5b31e958c513","locked":false,"zIndex":0,"type":"heart","text":"Good\\nLuck ;)","x":9540,"y":16560,"width":4140,"height":3600,"style":{"fill":"#ce8898","stroke":"#ffffff"},"styleText":{"fill":"#a6414b","font-family":"Helvetica","font-size":"22pt","font-weight":"bold"}},{"key":"4","dataKey":"c33421dc-650b-4ace-89de-b0c9048d4e02","locked":false,"zIndex":0,"type":"rectangle","text":"Falcon Editor","x":7062,"y":8486,"width":9000,"height":900,"style":{"fill":"#6400ff","stroke":"#ffffff"},"styleText":{"fill":"#ffffff","font-family":"Helvetica","font-size":"28pt","font-weight":"bold"}},{"key":"5","dataKey":"d97730d1-3f1a-45b5-9b75-651fa3c90327","locked":false,"zIndex":0,"type":"ellipse","text":"Draw diagrams","x":10980,"y":9720,"width":1980.0000000000002,"height":1800,"style":{"fill":"#2d47b8","stroke":"#ffffff"},"styleText":{"fill":"#9ceee0","font-family":"Helvetica","font-size":"14pt","font-weight":"bold"}},{"key":"6","dataKey":"0463af6f-c987-4f2d-8069-9318cec6efd5","locked":false,"zIndex":0,"type":"ellipse","text":"Draw flow-charts","x":7560,"y":9720,"width":1980,"height":1800,"style":{"fill":"#e86048","stroke":"#ffffff"},"styleText":{"fill":"#d2efcf","font-family":"Helvetica","font-size":"14pt","font-weight":"bold"}},{"key":"13","locked":false,"zIndex":0,"type":"rectangle","text":"","x":7560,"y":11880,"width":8100,"height":4320,"style":{"fill":"#fd513a","stroke":"#ffffff"}},{"key":"14","locked":false,"zIndex":0,"type":"ellipse","text":"Brainstorm ideas","x":14040,"y":9720,"width":1980.0000000000002,"height":1800,"style":{"fill":"#34db6a","stroke":"#ffffff"},"styleText":{"fill":"#126551","font-family":"Helvetica","font-size":"14pt","font-weight":"bold"}},{"key":"16","locked":false,"zIndex":0,"type":"rectangle","text":"Each course has its own editor","x":8100,"y":12240,"width":7020,"height":1080,"style":{"fill":"#c9f1cd","stroke":"#c9f1cd"},"styleText":{"fill":"#fd513a","font-family":"Helvetica","font-size":"18pt","font-weight":"bold"}},{"key":"17","locked":false,"zIndex":0,"type":"rectangle","text":"You can export your diagrams as PNG, JPG and SVG","x":8100,"y":13500,"width":7020,"height":1080,"style":{"fill":"#cef563","stroke":"#cef563"},"styleText":{"fill":"#4202f5","font-family":"Helvetica","font-size":"18pt","font-weight":"bold"}},{"key":"18","locked":false,"zIndex":0,"type":"rectangle","text":"To get started, select all these elements and hit delete!","x":8100,"y":14760,"width":7020,"height":1080,"style":{"fill":"#c6e3c5","stroke":"#c6e3c5"},"styleText":{"fill":"#126551","font-family":"Helvetica","font-size":"18pt","font-weight":"bold"}}]}`;
    }

}

export default FalconEditor;
