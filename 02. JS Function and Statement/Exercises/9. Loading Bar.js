function loadingBar(num) {
    let text = '%';
    let arr = [];

    for (let i = 0; i < num/10; i++) {
        arr.push(text);
    }
    for (let i = 0; i < 10 - num/10; i++) {
        arr.push('.');
    }
    if (num !== 100) {
        console.log(`${num}% [` + arr.join('') + ']');
        console.log('Still loading...')
    }else {
        console.log('100% Complete!')
    }
}

loadingBar(30);
loadingBar(50);
loadingBar(100);