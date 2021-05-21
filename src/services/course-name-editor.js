import FalconStorage from "./storage";
class CourseNameEditor {

    STORAGE_KEY = 'customCourseNames';
    customCourseNames;

    async constructor() {
        // setup the UI elements
        // set up the UI event listeners
        let {customCourseNames} = await this.getCourseNames();
        this.customCourseNames = customCourseNames;
    }

    // auto populate course name that's being edited in the text box
    autoPopulateCourseName() {

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
        this.customCourseNames = customCourseNames; // TODO check .. do we even need this here b/c passed by reference?
        // TODO await updateLinksWithCustomNames();\
    }

    async replaceDomCourseNamesWithNewNames() {

    }

    async getCourseNames() {
        return await FalconStorage.sync().get(this.STORAGE_KEY);
    }

}
