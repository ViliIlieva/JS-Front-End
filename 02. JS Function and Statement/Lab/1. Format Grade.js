function formatGrade(grade) {
    if (grade >= 5.50) {
        console.log(`Excellent (${formatToSecondDecimal(grade)})`);
    } else if (4.50 <= grade && grade < 5.50) {
        console.log(`Very good (${formatToSecondDecimal(grade)})`);
    } else if (3.50 <= grade && grade < 4.50) {
        console.log(`Good (${formatToSecondDecimal(grade)})`);
    } else if (3 <= grade && grade < 3.50) {
        console.log(`Poor (${formatToSecondDecimal(grade)})`);
    } else {
        console.log(`Fail (2)`);
    }

    function formatToSecondDecimal(num) {
        return num.toFixed(2);
    }
}

formatGrade(3.33);
formatGrade(4.50);
formatGrade(2.99);

