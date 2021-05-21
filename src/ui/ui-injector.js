import FalconStorage from "../services/storage";

const FalconInterfaceInjector = {

    darkModeButton: () => {
        let $dark_mode_button = `<div class="Mrphs-sitesNav__menuitem"><a href="javascript:;" id="dark-mode-toggle" class="dark-mode-toggle"><i id="dark-mode-toggle-icon" class="fa fa-toggle-off mr-3"></i><span>Dark Mode</span></a></div>`;
        $(".Mrphs-loginNav").prepend($dark_mode_button);
    },

    falconEditorButton: () => {
        $('.Mrphs-toolsNav__menu ul').append(`<li><a href="javascript:;" class="Mrphs-toolsNav__menuitem--link" id="falcon-editor-button" title="Double Click to open. A powerful diagram editor included with Falcon"><span id="falcon-editor-icon" class="Mrphs-toolsNav__menuitem--icon fa fa-pencil "></span><span id="falcon-editor-title" class="Mrphs-toolsNav__menuitem--title">Falcon Editor</span></a></li>`)
    },

    courseEditButton: () => {
        $('<a class="mr-4 edit-course-name-button" href="javascript:;"> <i class="fa fa-pencil"></i> Edit</a>').insertBefore('.toolMenus');
    },

    courseEditModal: () => {
        let $courseNameEditModal = `<div class="modal fade" style="z-index: 10000" id="edit-course-title-modal" tabindex="-1" role="dialog" aria-labelledby="edit-course-title-modal-label" aria-hidden="true">
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
</div>`
        if (!$('#edit-course-title-modal').length) {
            $('.Mrphs-pagebody').prepend($courseNameEditModal);
        }

    },

    falconResources: () => {
        if ($('.page-header h1').html() === 'Site Resources') {
            $(`<div id="file-manager"></div><div id="photo-popup"></div><button id="toggle-original-resource" class="mt-5">Show Original Resources</button>`).insertAfter($('.page-header'));
            $('#showForm').hide();
            $(`<h1 id="loading-resources">Loading resources...</h1>`).insertAfter('.page-header');
        }
    },


    initAnimations: () => {
        $('.Mrphs-pagebody').addClass('animate__animated animate__fadeIn');
    }

}

export default FalconInterfaceInjector;
