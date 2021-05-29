const FalconInterfaceInjector = {

    darkModeButton: () => {
        let $dark_mode_button = `<div class="Mrphs-sitesNav__menuitem"><a href="javascript:;" id="dark-mode-toggle" class="dark-mode-toggle"><i id="dark-mode-toggle-icon" class="fa fa-toggle-off mr-3"></i><span>Night OWL</span></a></div>`;
        if ($('#dark-mode-toggle').length === 0) {
            $(".Mrphs-loginNav").prepend($dark_mode_button);
        }
    },

    falconEditorButton: () => {
        $('.Mrphs-toolsNav__menu ul').append(`<li><a href="javascript:;" class="Mrphs-toolsNav__menuitem--link" id="falcon-editor-button" title="Double Click to open. A powerful diagram editor included with Falcon"><span id="falcon-editor-icon" class="Mrphs-toolsNav__menuitem--icon fe fe-edit-2 "></span><span id="falcon-editor-title" class="Mrphs-toolsNav__menuitem--title">Falcon Editor</span></a></li>`)
    },

    courseEditElements: () => {
        // only add this if user is logged in...
        // if it's not logged in, this element doesn't exist.
        if ($('#loginUser').length !== 1) {
            return;
        }
        let $courseNameEditModal = `<div class="modal fade" style="z-index: 12000" id="edit-course-title-modal" tabindex="-1" role="dialog" aria-labelledby="edit-course-title-modal-label" aria-hidden="true">
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
                <button type="button" id="save-custom-course-title-button" data-dismiss="modal" class="btn btn-primary">Save Title</button>
            </div>
        </div>
    </div>
</div>`
        if (!$('#edit-course-title-modal').length) {
            $(`<a class="mr-4 edit-course-name-button" href="javascript:;" onclick="$('#edit-course-title-modal').modal('show')"> <i class="fe fe-edit-2"></i> Edit</a>`).insertBefore('.toolMenus')
            $('body').append($courseNameEditModal);
        }
    },


    falconResources: () => {
        if ($('.page-header h1').html() === 'Site Resources') {
            $(`<div id="file-manager"></div><div id="photo-popup"></div><button id="toggle-original-resource" class="mt-5">Show Original Resources</button>`).insertAfter($('.page-header'));
            $('#showForm').hide();
            $(`<h1 id="loading-resources"><i class="fe fa-spin fe-loader"></i> Loading resources...</h1>`).insertAfter('.page-header');
        }
    },


    initAnimations: () => {
        $('.Mrphs-pagebody').addClass('animate__animated animate__fadeIn');
        $('#selectSiteModal').addClass('animate__animated animate__fadeIn');
        $('.Mrphs-userNav__subnav').addClass('animate__animated animate__fadeIn');
    },

    // replace all font-awesome icons with feather-icons
    replaceIcons() {
        let icons = {
            'icon-sakai--sakai-iframe-site': 'fe fe-list',
            'icon-sakai--sakai-syllabus': 'fe fe-map',
            'icon-sakai--sakai-lessonbuildertool': 'fe fe-book',
            'icon-sakai--sakai-samigo': 'fe fe-check-circle',
            'fa fa-video-camera': 'fe fe-video',
            'fa fa-play': 'fe fe-play',
            'icon-sakai--sakai-siteinfo': 'fe fe-info',
            'icon-sakai--sakai-gradebookng': 'fe fe-grid',
            'icon-sakai--sakai-schedule': 'fe fe-calendar',
            'icon-sakai--sakai-resources': 'fe fe-folder-plus',
            'icon-sakai--sakai-web-168': 'fe fe-globe',
            'icon-sakai--sakai-researchguideslti': 'fe fe-globe',
            'icon-sakai--sakai-basiclti': 'fe fe-globe',
            'icon-sakai--sakai-poll': 'fe fe-bar-chart-2',
            'icon-sakai--sakai-messages': 'fe fe-inbox',
            'icon-sakai--help': 'fe fe-help-circle',
            'icon-sakai--sakai-assignment-grades': 'fe fe-file-text',
            'icon-sakai--sakai-forums': 'fe fe-message-circle',
            'fa fa-eye': 'fe fe-eye',
            'fa fa-home': 'fe fe-home',
            'icon-sakai--sakai-iframe': 'fe fe-globe',
            'icon-sakai--sakai-signup': 'fe fe-user-plus',
            'icon-sakai--sakai-dropbox': 'fe fe-upload-cloud',
            'icon-sakai--sakai-singleuser': 'fe fe-user',
            'icon-sakai--sakai-preferences': 'fe fe-settings',
            'icon-sakai--sakai-sitesetup': 'fe fe-sliders',
            'icon-sakai--sakai-membership': 'fe fe-users',
            'icon-sakai--sakai-motd': 'fe fe-list',
            'fa fa-print': 'fe fe-printer',
            'fa fa-list-ul': 'fe fe-list',
            'Mrphs-toolTitleNav__link--directurl': 'fe fe-link',
            'Mrphs-toolTitleNav__link--help-popup': 'fe fe-help-circle',
            'icon-sakai--sakai-resetpass': 'fe fe-more-horizontal',
            'icon-sakai--sakai-sitebrowser': 'fe fe-globe'
        }

        // elements to check for and replace icons in
        let elements = [
            '.Mrphs-toolsNav__menuitem--icon',
            '.Mrphs-breadcrumb--icon',
            '.toolMenuIcon',
        ]

        elements.forEach(element => {
            let all = $(element);
            if (all.length > 0) {
                all.each(function () {

                    Object.keys(icons).forEach(oldIcon => {
                        if ($(this).hasClass(oldIcon)) {
                            $(this).removeClass(oldIcon);
                            $(this).addClass(icons[oldIcon]);
                        }
                    })
                })

            }
        })

        // share button
        $('.Mrphs-breadcrumb--reset-icon').removeClass('fa fa-share').addClass('fe fe-arrow-left');
    },

    announcementPaginationButtonsFix() {
        let order = [0, 1, 2];
        // ANNOUNCEMENTS click on next, previous, or return to list button.
        $('input[name="eventSubmit_doPrev_message"]').on('click', function () {
            order = [0, 1, 2];
            switchUp();
        })

        $('input[name="eventSubmit_doLinkcancel"]').on('click', function () {
            order = [1, 0, 2];
            switchUp();
        })

        $('input[name="eventSubmit_doNext_message"]').on('click', function () {
            order = [2, 0, 1];
            switchUp();
        })

        function switchUp() {
            var wrapper = $('.itemNav'),
                items = wrapper.children('input');
            wrapper.append($.map(order, function (v) {
                return items[v]
            }));
            wrapper.hide();
        }
    },

    // if favourites bar is open and user clicks on anything which navigates away from a page, it should close
    hideFavouritesBar() {
        if (!$('#selectSiteModal').hasClass('outscreen')) {
            $('.view-all-sites-btn').click();
        }
    },


}

export default FalconInterfaceInjector;
