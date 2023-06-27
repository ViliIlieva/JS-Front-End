function smallestOfThreeNum(...nums) {
    let smallestNum = Math.min(...nums);
    console.log(smallestNum);
}

smallestOfThreeNum(2, 5, 3);
smallestOfThreeNum(600, 342, 123);
smallestOfThreeNum(25, 21, 4);
smallestOfThreeNum(2, 2, 2);