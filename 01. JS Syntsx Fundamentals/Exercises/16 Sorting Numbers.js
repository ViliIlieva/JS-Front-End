function solve(arr){
    let arrLength = arr.length;
    arr.sort(function (a, b) {
        return a - b;});
    let newArr = [];
    let smallestNum = [];
    let biggestNum = [];

    for (let i = 0; i < arrLength/2; i++) {
       smallestNum.push(arr.shift());
       biggestNum.push(arr.pop())
    }

    for (let i = 0; i < arrLength/2; i++) {
        newArr.push(smallestNum[i]);
        newArr.push(biggestNum[i]);
    }

    return newArr;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);