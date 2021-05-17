var pjax;

function startPjax() {
    setupTopbar()
    setup();
    fixAnnouncementPagination();
    fixNavigationDropdownButtons();
    makeTableResponsive();
    updateLinksWithCustomNames();
}

function setup() {
    // favourites bar...
    setTimeout(function () {
        let reloadFavsElement = $('a[href="javascript:location.reload()"]');
        if (reloadFavsElement.length > 1) {
            reloadFavsElement.attr('href', window.location.href);
        }
    }, 10);


    pjax = new Pjax({
        elements: "a[href]:not(.Mrphs-sitesNav__dropdown), form[action]:not(#Mrphs-xlogin):not(#dfCompose)",
        cacheBust: true,
        debug: false,
        selectors: [
            "title",
            // "head",
            "meta[name=description]",
            ".Mrphs-pagebody",
            ".Mrphs-container--nav-tools",
            "#topnav_container",
        ],
    })

    document.addEventListener("pjax:success", onPjaxSuccess)
    // document.addEventListener("pjax:success", makeTablesResponsive)
    document.addEventListener('pjax:send', topbar.show)
    document.addEventListener('pjax:complete', onPjaxComplete)
}

async function onPjaxSuccess() {
    makeTableResponsive();
    forceRefreshPage(); // refresh if the page is gradebook...
    addCourseNameEditModal();
    $('#selectSiteModal').addClass('outscreen');
    fixNavigationDropdownButtons();
    addFavouritesClickEventListeners();
    autoDetectDarkMode();
    setupFalconEditorButton();
    falconEditorOpen = true;
    handleFalconEditorButtonToggle();
    await setupResources();

    // hide falcon editor..

    // also hide the falcon editor...

}

function onPjaxComplete() {
    topbar.hide();
    fixAnnouncementPagination();
    fixNavigationDropdownButtons();
    updateLinksWithCustomNames();


}


// make the table responsive and sortable...
function makeTableResponsive() {
    // forceRefreshPage();
    // fixAnnouncementPagination();


    let allSortableTableNames = ['form[name="listAssignmentsForm"]', 'form[name="announcementListForm"]'];

    let tableExists = false;
    allSortableTableNames.forEach(item => {
        if ($(item).length > 0) {
            tableExists = true;
        }
    });


    // check if we're in the announcement page
    if (tableExists) {
        // we are.. so first, convert the header to thead...
        let theadElement = $('table tbody tr')[0];

        $('table').prepend('<thead>' + theadElement + '</thead>');
        $('table thead').html(theadElement);


        setTimeout(function () {
            $('.tablesorter-header-inner a').contents().unwrap().wrap('<span/>');
        }, 10);


        $("table").tablesorter({
            theme: "bootstrap",
            widthFixed: true,
            widgets: ["filter", "columns", "zebra"],

            widgetOptions: {
                // using the default zebra striping class name, so it actually isn't included in the theme variable above
                // this is ONLY needed for bootstrap theming if you are using the filter widget, because rows are hidden
                zebra: ["even", "odd"],

                // class names added to columns when sorted
                columns: ["okboomerlol"],

                // reset filters button
                filter_reset: ".reset",

                // extra css class name (string or array) added to the filter element (input or select)
                filter_cssFilter: [
                    'form-control',
                    'form-control',
                    'form-control', // select needs custom class names :(
                    'form-control',
                    'form-control',
                    'form-control',
                    'form-control'
                ]

            }
        });
    }

}

function setupTopbar() {
    topbar.config({
        autoRun: true,
        barThickness: 3,
        barColors: {
            '0': '#d900ff',
            '.3': '#7000ff',
            '1.0': '#d900ff'
        },
        shadowBlur: 5,
        shadowColor: 'rgba(0, 0, 0, .5)',
        className: 'topbar',
    });
}


// These are fixes that need to be done after each pjax request
function forceRefreshPage() {
    if (window.location.href.includes('/gradebook')) {
        console.log('doing a force refresh...');
        pjax.reload();
    }
}

function fixAnnouncementPagination() {
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
}

function fixNavigationDropdownButtons() {

    let viewAllSitesElement = $('.view-all-sites-btn a');
    viewAllSitesElement.removeAttr('href');

    viewAllSitesElement.on('click', function () {
        $('#selectSiteModal').toggleClass('outscreen');
    })

    $('#loginUser').on('click', function () {
        $('ul .Mrphs-userNav__subnav').toggleClass('is-hidden');
    })

    $('.otherSitesMenuClose').on('click', function () {
        $('#selectSiteModal').toggleClass('outscreen');
    })
}

$(document).mouseup(function (e) {
    var container = $("#loginUser");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('.Mrphs-userNav__subnav').addClass('is-hidden');
    }

});
