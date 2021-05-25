import $ from "jquery";
window.$ = window.jQuery = $;
import '../assets/js/dist/jquery.tablesorter.min';
import '../assets/js/dist/jquery.tablesorter.widgets.min.js';

class TableSorter {

    // all the tables that should be sorted/searched
    sortableTables =[
        'form[name="listAssignmentsForm"]',
        'form[name="announcementListForm"]'
    ];

    constructor() {
        this.makeSortable();
    }


    makeSortable() {
        // Ensure that the page includes tables to be sortable
        if (!this.tablesExist()) {
            return;
        }

        // These tables do not have <thead>... so convert the header to thead...
        let theadElement = $('table tbody tr')[0];

        $('table').prepend(`<thead>${theadElement}</thead>`);
        $('table thead').html(theadElement);

        setTimeout(function () {
            $('.tablesorter-header-inner a').contents().unwrap().wrap('<span/>');
        }, 10);

        $('td[headers="author"]').addClass('text-nowrap');

        $("table").tablesorter({
            theme: "bootstrap",
            widthFixed: true,
            widgets: [ "columns"],

            widgetOptions: {


                // class names added to columns when sorted
                columns: ["falcon-table-column"],

                // reset filters button TODO: add it
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

    tablesExist() {
        let exists = false;
        this.sortableTables.forEach(table => {
            console.log($(table));
            if ($(table).length > 0) {
               exists = true;
            }
        })
        return exists;
    }
}

export default TableSorter;
