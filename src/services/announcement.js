import FalconInterfaceInjector from "../ui/ui-injector";
import Core from "./core";

class FalconAnnouncement {

    API_URL = 'https://owl.uwo.ca/direct/announcement/site/';
    courseId;

    constructor(courseId) {
        this.courseId = courseId;


        // if currently on announcements page...
        if (FalconInterfaceInjector.pageContainsElement('form[name=announcementListForm]')) {

            FalconInterfaceInjector.falconAnnouncementsSetup();
            this.addEventListeners();

            this.fetch();

        }
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
        let url = `${this.API_URL}/${this.courseId}.json`;

        fetch(url)
            .then(response => response.json())
            .then(response => {
                this.setupAnnouncements(response.announcement_collection);
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
