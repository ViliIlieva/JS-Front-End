function solve() {

    document.querySelector('#exercise > button:nth-child(3)')
        .addEventListener('click', generate);


    function generate(){
        const input = Array.from(document.getElementsByTagName('textarea'))[0];
        for (const inputElement of input) {
            console.log(JSON.parse(inputElement));
        }




    }

}