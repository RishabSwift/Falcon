import Pjax from "pjax";
import topbar from "topbar";

import TableSorter from "./table-sorter";
import $ from "jquery";
import FalconEditor from "./falcon-editor";
import FalconFileManager from "./file-manager";
import FalconInterfaceInjector from "../ui/ui-injector";


let currentCourseId; // in format 39cbafa5-fa7b-4a18-8ca8-d7ae032c8de8
let currentCourseName;
let pjax;

const Falcon = {

    start: () => {

        // loaded only once on page load (regular page load, no pjax)
        Falcon.onSuccess();

        pjax = new Pjax({
            elements: "a[href]:not(.Mrphs-sitesNav__dropdown), form[action]:not(#Mrphs-xlogin):not(#dfCompose):not(#takeAssessmentForm):not(#compose)",
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
        });

        document.addEventListener("pjax:success", Falcon.onSuccess)
        // document.addEventListener("pjax:success", makeTablesResponsive)
        document.addEventListener('pjax:send', Falcon.onSend)
        document.addEventListener('pjax:complete', Falcon.onComplete)


        Falcon.setupTopbar();

    },

    setupTopbar: () => {
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
    },

    onSend: () => {
        topbar.show();
    },

    onSuccess: () => {
        FalconInterfaceInjector.replaceIcons();
        FalconInterfaceInjector.initAnimations();
        Falcon.saveCourseId();
        new TableSorter();
        new FalconEditor(currentCourseId);
        // new FalconFileManager(currentCourseId, currentCourseName);
    },

    onComplete: () => {
        topbar.hide();
    },

    saveCourseId() {
        let linkElement = $('.Mrphs-sitesNav__menuitem.is-selected a.link-container');
        currentCourseId = linkElement.attr('href').split('/').pop();
        currentCourseName = linkElement.attr('title');
    }

}

export default Falcon;
