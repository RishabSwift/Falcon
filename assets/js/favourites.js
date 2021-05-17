let courseNameEditModal = `<div class="modal fade" style="z-index: 10000" id="edit-course-title-modal" tabindex="-1" role="dialog" aria-labelledby="edit-course-title-modal-label" aria-hidden="true">
    <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="edit-course-title-modal-label">Edit title for this course</h5>
            </div>
            <div class="modal-body">
                Falcon allows you to give this course <span class="badge" id="old-course-name">ENGSCI 4498F 001 SP21</span> a custom name.

                <div class="row mt-4">
                    <div class="col-md-12">
                        <input autofocus type="text" id="custom-course-name-text" class="form-control" placeholder="E.g. Physics">
                        <small class="help-block">Leave empty to reset to normal.</small>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                <button type="button" id="save-custom-course-title-button" class="btn btn-primary">Save Title</button>
            </div>
        </div>
    </div>
</div>
`;

/**
 * Add edit buttons beside the course
 */
function addEditButtons() {
    $('<a class="mr-4 edit-course-name-button" href="javascript:;"> <i class="fa fa-pencil"></i> Edit</a>').insertBefore('.toolMenus');
}

function startFavourites() {
    addEditButtons();
    addCourseNameEditModal();
}

function addCourseNameEditModal() {
    if (!$('#edit-course-title-modal').length) {
        $('.Mrphs-pagebody').prepend(courseNameEditModal);
    }
}


/**
 * When the user clicks the edit button, automatically fill the course name if one exists
 * @returns {Promise<void>}
 */
async function autoPopulateCourseName() {

    let {customCourseNames} = await getStorageData('customCourseNames');

    let oldName = $('#old-course-name').html();

    let index = customCourseNames.findIndex(item => item.oldName === oldName);
    // exists already!
    if (index !== -1) {
        let course = customCourseNames.filter(item => {
            return item.oldName === oldName;
        })[0];

        $('#custom-course-name-text').val(oldName === course.newName ? '' : course.newName);
    }

}


/**
 * Save the course name
 * @param oldName
 * @param newName
 * @returns {Promise<void>}
 */
async function saveCourseName(oldName, newName) {

    let {customCourseNames} = await getStorageData('customCourseNames');

    if (!customCourseNames) {
        customCourseNames = [];
    }

    // no name exists...
    if (!newName.trim()) {
        newName = oldName;
    }

    let index = customCourseNames.findIndex(item => item.oldName === oldName);
    if (index !== -1) {
        customCourseNames.map(item => {
            if (item.oldName === oldName) {
                return item.newName = newName;
            }
            return item;
        })
    } else {
        customCourseNames.push({oldName: oldName, newName: newName})
    }

    await setStorageData({customCourseNames: customCourseNames});
    await updateLinksWithCustomNames();

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


/**
 * Update all references of the old course name to reflect any edits to custom course names
 * @returns {Promise<void>}
 */
async function updateLinksWithCustomNames() {

    // get the list of all the courses first...
    let {customCourseNames} = await getStorageData('customCourseNames');

    if (!customCourseNames) {
        await setStorageData({customCourseNames: []})
        return;
    }

    // loop through the links
    //fullTitle & a.link-container>span
    $('.link-container span').each(reflectCourseNameChanges);
    $('.fullTitle').each(reflectCourseNameChanges);

    function reflectCourseNameChanges() {
        let oldName = $(this).parent().attr('title');
        let index = customCourseNames.findIndex(item => item.oldName === oldName);
        if (index !== -1) {
            let course = customCourseNames.filter(item => {
                return item.oldName === oldName;
            })[0];
            $(this).html(course.newName);
        }
    }

}


$(document).ready(function () {
// If they click the edit button...
    addFavouritesClickEventListeners();

    // make sure input is auto-focused
    $('#edit-course-title-modal').on('shown.bs.modal', function() {
        $('#custom-course-name-text').focus();
    })
});

function addFavouritesClickEventListeners() {
    $('.edit-course-name-button').on('click', function () {
        $('#custom-course-name-text').val('');
        let link = $(this).siblings('div.fav-title').find('a');
        $('#old-course-name').html(link.attr('title'));

        $('#edit-course-title-modal').modal('show');
        // populate it with the new name...
        autoPopulateCourseName();
    })


    // once they save their custom course name
    $('#save-custom-course-title-button').on('click', function () {
        let customName = $('#custom-course-name-text').val();
        let oldCourseName = $('#old-course-name').html();

        saveCourseName(oldCourseName, customName).then(() => {
            $('#custom-course-name-text').val('');
            $('#edit-course-title-modal').modal('hide');
        });
    })

    $('#custom-course-name-text').on('keypress', function (e) {
        if(e.which === 13){

            // Disable textbox to prevent multiple submit
            $(this).attr("disabled", "disabled");

            // simulate click
            $('#save-custom-course-title-button').click();

            //Enable the textbox again if needed.
            $(this).removeAttr("disabled");
        }
    });

}
