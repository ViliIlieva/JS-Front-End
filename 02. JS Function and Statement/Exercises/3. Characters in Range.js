function solve(firstChar, secondChar) {
    let firstCode = asciiCod(firstChar);
    let secondCode = asciiCod(secondChar);

    if(firstCode < secondCode){
        console.log(charsArr(firstCode, secondCode).join(' '));
    }else {
        console.log(charsArr(secondCode, firstCode).join(' '));
    }

    function asciiCod(char){
        return char.charCodeAt(0);
    }

    function charsArr(n, m){
        let arr = [];
        for (let i = n+1; i < m; i++) {
            arr.push(String.fromCharCode(i));
        }
        return arr;
    }
}

solve('a','d');
solve('#',':');
solve('C','#');