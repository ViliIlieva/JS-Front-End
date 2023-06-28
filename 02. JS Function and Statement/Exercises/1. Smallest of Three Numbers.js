// function smallestOfThreeNum(...nums) {
//     let smallestNum = Math.min(...nums);
//     console.log(smallestNum);
// }

const smallestOfThreeNum =
    (firstNum, secondNum, thirdNum) => Math.min(firstNum, secondNum, thirdNum);

console.log(smallestOfThreeNum(2, 5, 3));
console.log(smallestOfThreeNum(600, 342, 123));
console.log(smallestOfThreeNum(25, 21, 4));
console.log(smallestOfThreeNum(2, 2, 2));