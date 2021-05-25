import Pjax from "pjax";
import topbar from "topbar";

import TableSorter from "./table-sorter";
import $ from "jquery";
import FalconEditor from "./falcon-editor";
import 'bootstrap';
import FalconFileManager from "./file-manager";
import FalconInterfaceInjector from "../ui/ui-injector";
import FalconCourseNameEditor from "./course-name-editor";
import FalconDarkMode from "./dark-mode";
import AssetInjector from "../ui/asset-injector";


let currentCourseId; // in format 39cbafa5-fa7b-4a18-8ca8-d7ae032c8de8
let currentCourseName;
let pjax;

const Falcon = {

    start: () => {

        // loaded only once on page load (regular page load, no pjax)
        Falcon.onSuccess(false);

        pjax = new Pjax({
            elements: "a[href]:not(.Mrphs-sitesNav__dropdown), form[action]:not(#Mrphs-xlogin):not(#dfCompose):not(#takeAssessmentForm):not(#compose):not(#msgForum):not(#prefs_pvt_form)",
            cacheBust: false,
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

    // @runOnInit = do not run it on init (i.e on a regular page load and NOT from pjax success page load)
    onSuccess: (runOnInit = true) => {

        if (runOnInit) {
            FalconInterfaceInjector.initAnimations();
        }

        FalconInterfaceInjector.replaceIcons();
        FalconInterfaceInjector.announcementPaginationButtonsFix();
        Falcon.saveCourseId();
        new TableSorter();
        new FalconDarkMode();
        new FalconCourseNameEditor();
        new FalconEditor(currentCourseId);

        new FalconFileManager(currentCourseId, currentCourseName);
        Falcon.injectResources();
        // Needed to initiate the matchParser


    },

    onComplete: () => {
        topbar.hide();
    },

    saveCourseId() {
        let linkElement = $('.Mrphs-sitesNav__menuitem.is-selected a.link-container');
        if (linkElement.length) {
            currentCourseId = linkElement.attr('href').split('/').pop();
            currentCourseName = linkElement.attr('title');
        }
    },

    injectResources() {

        // AssetInjector.once()
        //     .falconAssets()
        //     .endOfBody()
        //     .injectScript('/assets/dx-diagram.min.js', 'dx-diagram')
        //     .injectScript('/assets/dx.all.js', 'dx-all')

        AssetInjector.once().owlAssets()
            .endOfHead()
            .injectScript('/library/js/spinner.js?version=20_2-owl1', 'owl-spinner-src')
            .injectScript('/sakai-assignment-tool/js/studentViewSubmission.js?version=20_2-owl1', 'owl-stdviewsubmission-src')
            .injectScript('/sakai-assignment-tool/js/assignments.js?version=20_2-owl1', 'owl-assignments-src')
            // .injectScript('/library/skin/morpheus-default/js/morpheus.scripts.min.js?version=20_2-owl1', 'owl-morpheus-src')
            .injectScript('/library/js/mathjax/MathJax.js?config=default,Safe', 'falcon-mathjax')
            .injectScript('/gradebookng-tool/scripts/gradebook-grade-summary.js?version=20_2-owl1', 'falcon-gradebook-js')
            .injectStyle('/gradebookng-tool/styles/gradebook-grades.css?version=20_2-owl1', 'falcon-gradebook-css')
            .injectStyle('/gradebookng-tool/styles/gradebook-gbgrade-table.css?version=20_2-owl1', 'falcon-gradebook-table-css')
            .injectStyle('/messageforums-tool/css/msgcntr.css', 'falcon-forum-css')
            .injectRawHtml(`<script class="falcon-math-jax-parser">function parseMath() { try {MathJax.Hub.Typeset()} catch (e) {/*empty atm*/} }</script>`, 'falcon-math-jax-parser')
            .injectRawHtml(`<script type="text/x-mathjax-config"> MathJax.Hub.Config({ messageStyle: "none", tex2jax:  { inlineMath: [['\\\\(','\\\\)']] } });</script>`, 'falcon-math-jax-config');
        // MathJax Parser
        $(document).ready(function () {
            location.href = "javascript:parseMath(); void 0"
        });
    }
}

export default Falcon;
