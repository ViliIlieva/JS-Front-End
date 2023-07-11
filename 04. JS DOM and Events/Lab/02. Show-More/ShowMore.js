function showText() {
    document.getElementById('text').style.display = 'inline';//елемента да се появи
    setTimeout(() =>{
        document.getElementById('more').style.display = 'none';
    }, 1000);//елемента да изчезне след 1 секунда

}