import FalconStorage from "./storage";
import FalconInterfaceInjector from "../ui/ui-injector";

class FalconCourseNameEditor {

    STORAGE_KEY = 'customCourseNames';
    customCourseNames = [];

    constructor() {
        FalconInterfaceInjector.courseEditElements();
        this.addEventListeners();
        this.getCourseNames()
    }



    addEventListeners() {

        let self = this;

        $('.edit-course-name-button').on('click', function () {
            $('#custom-course-name-text').val('');
            let link = $(this).siblings('div.fav-title').find('a');
            $('#old-course-name').html(link.attr('title'));
            self.autoPopulateCourseNameInModal()
        })


        // once they save their custom course name
        $('#save-custom-course-title-button').on('click', function () {
            let customName = $('#custom-course-name-text').val();
            let oldCourseName = $('#old-course-name').html();

            self.saveCourseName(oldCourseName, customName).then(() => {
                $('#custom-course-name-text').val('');
                $('#edit-course-title-modal').modal('hide');
            });
        })

        $('#custom-course-name-text').on('keypress', function (e) {
            if (e.which === 13) { // enter pressed
                // Disable textbox to prevent multiple submit
                $(this).attr("disabled", "disabled");
                $('#save-custom-course-title-button').click();
                $(this).removeAttr("disabled");
            }
        });

    }

    // auto populate course name that's being edited in the text box
    autoPopulateCourseNameInModal() {

        let oldName = $('#old-course-name').html();

        let exists = FalconStorage.existsInStorage(this.customCourseNames, 'oldName', oldName);
        // exists already!
        if (exists) {
            let course = this.customCourseNames.filter(item => {
                return item.oldName === oldName;
            })[0];

            $('#custom-course-name-text').val(oldName === course.newName ? '' : course.newName);
        }

    }


    async saveCourseName(oldName, newName) {

        let customCourseNames = this.customCourseNames;

        if (!customCourseNames) {
            customCourseNames = [];
        }

        // no name exists... set the new name to old name
        if (!newName.trim()) {
            newName = oldName;
        }

        let exists = FalconStorage.existsInStorage(customCourseNames, 'oldName', oldName);

        if (exists) {
            customCourseNames.map(item => {
                if (item.oldName === oldName) {
                    return item.newName = newName;
                }
                return item;
            })
        } else {
            customCourseNames.push({oldName: oldName, newName: newName})
        }

        await FalconStorage.set({customCourseNames});
        this.replaceDomCourseNamesWithNewNames();
    }

    replaceDomCourseNamesWithNewNames() {

        let self = this;
        $('.link-container span').each(reflectCourseNameChanges);
        $('.fullTitle').each(reflectCourseNameChanges);

        function reflectCourseNameChanges() {
            let oldName = $(this).parent().attr('title');

            let exists = FalconStorage.existsInStorage(self.customCourseNames, 'oldName', oldName);
            if (exists) {
                let course = self.customCourseNames.filter(item => {
                    return item.oldName === oldName;
                })[0];
                $(this).html(course.newName);
            }
        }
    }

    getCourseNames() {
        FalconStorage.sync().get(this.STORAGE_KEY).then((data) => {
            let {customCourseNames} = data;
            if (customCourseNames && customCourseNames !== 'undefined') {
                this.customCourseNames = customCourseNames;
                this.replaceDomCourseNamesWithNewNames()
            }
        });
    }

}

export default FalconCourseNameEditor;
