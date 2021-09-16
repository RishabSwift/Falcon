import FalconInterfaceInjector from "../ui/ui-injector";
import Core from "./core";
import Falcon from "./falcon";
import FalconDarkMode from "./dark-mode";

class FalconAnnouncement {

    API_URL = 'https://owl.uwo.ca/direct/announcement/site/';
    courseId;

    constructor(courseId) {
        this.courseId = courseId;


        // if currently on announcements page... and not on the user home page...
        if (FalconInterfaceInjector.pageContainsElement('form[name=announcementListForm]') && !FalconInterfaceInjector.urlContainsText('~')) {

            FalconInterfaceInjector.falconAnnouncementsSetup();
            this.addEventListeners();

            this.fetch();
        }
    }

    // because we have set the announcement form to be hidden by default... fix it so it's not hidden in dark mode..
    // and also fix the colors
    static fixDarkModeAnnouncement() {
        $('#falcon-announcements [style*="color"]').css('color', '');
        $('#falcon-announcements [style*="background-color"]').css('background-color', '');
        $('#falcon-announcements [style*="background"]').css('background-color', '');
        $('#falcon-announcements [style*="border-bottom"]').css('border-color', '#393d3d');
        $('#falcon-announcements [style*="border"]').css('border-color', '#393d3d');
    }

    // both light and dark mode...
    static fixAnnouncement() {
        $('#falcon-announcements [style*="font-size"]').css('font-size', '');
        $('#falcon-announcements [style*="font-family"]').css('font-family', '');
    }

    addEventListeners() {

        let showOriginal = false;

        let ogAnnouncementsElem = $('form[name="announcementListForm"]');

        $('#toggle-announcements-viewer').on('click', function () {
            if (showOriginal) {
                $('#falcon-announcements').fadeIn();
                ogAnnouncementsElem.hide();
                showOriginal = false;
                $(this).html('Classic Viewer');

            } else {
                $('#falcon-announcements').hide();
                ogAnnouncementsElem.fadeIn();
                showOriginal = true;
                $(this).html('Falcon Viewer');
            }
        })
    }

    fetch() {
        let url = `${this.API_URL}/${this.courseId}.json?n=120`;

        fetch(url)
            .then(response => response.json())
            .then(response => {
                this.setupAnnouncements(response.announcement_collection);
            }).then(() => {
            if (FalconDarkMode.isDarkModeEnabled()) {
                FalconAnnouncement.fixDarkModeAnnouncement();
            }
            FalconAnnouncement.fixAnnouncement();
        })
    }

    setupAnnouncements(announcements) {
        let announcementElem = $('#falcon-announcements');
        announcementElem.html('');

        if (!announcements.length) {
            return;
        }
        for (let announcement of announcements) {
            this.insertAnnouncement(announcement);
        }


        // Fix the dark mode...
    }

    insertAnnouncement(announcement) {

        let time = new Date(announcement.createdOn);
        let announcementElem = $('#falcon-announcements');
        $(`

<div class="card shadow">
    <div class="card-header">
        <div>
            <h2 class="">${announcement.entityTitle}</h2>
            <small class="card-subtitle mb-2 text-muted">${Core.timeAgo(time)} - ${Core.formatDateTime(time)} · Posted by <strong>${announcement.createdByDisplayName}</strong></small>
        </div>
    </div>
    <div class="card-body">
             ${announcement.body} 
    </div>
</div>

        `).appendTo(announcementElem)
    }

}

export default FalconAnnouncement;
