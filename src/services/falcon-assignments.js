import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start()

class FalconAssignments {

    assignments = []; // all assignments.
    courseId;

    constructor(courseId) {
        this.courseId = courseId;
        this.setupAssignments();
    }

    addEventListeners() {

    }


    async setupAssignments() {

//         fetch(`/direct/assignment/site/${this.courseId}.json`)
//             .then(response => response.json())
//             .then(response => {
//                 if (response.assignment_collection) {
//                     this.assignments = response.assignment_collection;
//                 }
//             }).then(() => {
//                 $('#falcon-assignments').html(`
// <div x-data="{courseId: this.courseId}"><p x-text="courseId"></p></div>
// ok.
// <div x-data="fetchCourses()">
//      <ul x-for="assignment in assignments">
//         <li x-text="assignment.title"></li>
//     </ul>
// </div>
// `);
//         });

    }


}

export default FalconAssignments;
