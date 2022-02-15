class FalconGradebook {
    constructor() {
        // parse the grades
        this.parseGrades();
    }

    parseGrades() {
        let _grades = $('.gb-summary-grade-score');
        for (let grades of _grades) {
            // $(grades).closest('.')
            let grade = $(grades).children('.gb-summary-grade-score-raw').text();
            let outOf = $(grades).children('.gb-summary-grade-score-outof').text()
            outOf = outOf.replaceAll('/', '').replaceAll(',', '');
            grade = grade.replaceAll(',', '');

            let emoji = this.getEmojiForGrade(parseFloat(grade), parseFloat(outOf));
            $(grades).children('.gb-summary-grade-score-outof').append(' ' + emoji);
        }
    }

    getEmojiForGrade(grade, outOf) {
        if (grade === outOf) {
            return '💯'
        }

        if (grade === 0){
            return '😭';
        }

        if (grade > outOf) {
            return '👀';
        }

        if (grade === '69') {
            return '😉'
        }

        if (grade / outOf < 0.5) {
            return '😢';
        }

        if (grade / outOf === 0.5) {
            return '😅';
        }

        return '';

    }

}

export default FalconGradebook;
