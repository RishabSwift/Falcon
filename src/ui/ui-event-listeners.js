let pageBody = $('.Mrphs-pagebody');
const FalconInterfaceEventListeners = {
    // listen for all sorts of events here...
    // constructor() {
    //
    //     // when course name edit modal shows up... auto-focus the text box
    //     $('#edit-course-title-modal').on('shown.bs.modal', function() {
    //         $('#custom-course-name-text').focus();
    //     })
    //
    //     // when the edit course button is pressed
    //     $('.edit-course-name-button').on('click', function () {
    //         $('#custom-course-name-text').val('');
    //         let link = $(this).siblings('div.fav-title').find('a');
    //         $('#old-course-name').html(link.attr('title'));
    //
    //         $('#edit-course-title-modal').modal('show');
    //         // populate it with the new name...
    //         //TODO: autoPopulateCourseName();
    //     })
    //
    //     // when dark mode is clicked...
    //
    //
    //
    //
    //
    // }

    handleFalconEditorButtonToggle: (isOpen) => {
        isOpen = !isOpen;
        $('#falcon-editor-button').on('click', function () {
                if (isOpen) {
                    pageBody.hide();
                    $('a.Mrphs-toolsNav__menuitem--link').not('#falcon-editor').parent().hide();
                    $('#falcon-editor-title').html('Close Editor');
                    $('#falcon-editor-icon').removeClass('fa-pencil').addClass('fa-close')
                    $('#pageBody').append(`<div id="falcon-editor-diagram"></div>`)
                } else {
                    $('#falcon-editor-title').html('Falcon Editor');
                    $('a.Mrphs-toolsNav__menuitem--link').not('#falcon-editor').parent().show();
                    $('#falcon-editor-icon').removeClass('fa-close').addClass('fa-pencil')
                $('#falcon-editor-diagram').remove();
                pageBody.show();
            }
        })
    }

}
export default FalconInterfaceEventListeners;
