function solve() {
    //вземаме двете текстови полета
    const [generateTextArea, byuTextArea] = Array.from(document.getElementsByTagName('textarea'));
    //вземаме двата бутона
    const [generateBtn, byuBtn] = Array.from(document.getElementsByTagName('button'));
    const tbody = document.querySelector('.table > tbody');

    generateBtn.addEventListener('click', generate);
    byuBtn.addEventListener('click', byu);


    function generate() {
        const input = JSON.parse(generateTextArea.value);
        for (const {img, name, price, decFactor} of input) {
            const tableRow = createElement('tr', '', tbody);//всички останали аргументи от функцията остават празни защото реда не ги съдържа
            //създава първата клетка от реда и после прикача снимката към нея
            const firstColumn = createElement('td', '',tableRow);
            createElement('img', '', firstColumn, '', '', {src: img});
            const secColumn = createElement('td', '',tableRow);
            createElement('p', name, secColumn);
            const thirdColumn = createElement('td', '',tableRow);
            createElement('p', price, thirdColumn);
            const fourthColumn = createElement('td', '',tableRow);
            createElement('p', decFactor, fourthColumn);
            const fifthColumn = createElement('td', '',tableRow);
            createElement('input', '', fifthColumn, '', '', {type: 'checkbox'});
        }
    }

    function byu(){
        const selectedRows = Array.from(document.querySelectorAll('tbody tr input:checked'));
        let boughtItems = [];
        let totalPrice = 0;
        let decFactor = 0;

        for (const column of selectedRows) {
            const tableRow = column.parentElement.parentElement;
            const [column1, column2, column3, column4] = Array.from(tableRow.children);
            const name = column2.children[0].textContent;
            boughtItems.push(name);
            totalPrice += Number(column3.children[0].textContent);
            decFactor += Number(column4.children[0].textContent);
        }

        byuTextArea.value += `Bought furniture: ${boughtItems.join(', ')}\n`;
        byuTextArea.value += `Total price: ${totalPrice.toFixed(2)}\n`;
        byuTextArea.value += `Average decoration factor: ${decFactor / selectedRows.length}`;
    }


    //type - string
    //content - string, textContent or Value to element
    //id - string
    //classes - array
    //attributes - object
    function createElement(type, content, parentNode, id, classes, attributes) {
        const htmlElement = document.createElement(type);

        if (content && type !== 'input') {//да се направи допълнителна проверка за textarea
            htmlElement.textContent = content;
        }

        if (content && type === 'input') {
            htmlElement.value = content;
        }

        if (parentNode) {
            parentNode.appendChild(htmlElement);
        }

        if (id) {
            htmlElement.id = id;
        }

        //['item1', 'item2', ...]
        if (classes) {
            htmlElement.classList.add(...classes);//може да са няколко класа
        }

        //{src: 'link to img', href: 'link to site', 'type: 'checkbox''}
        if (attributes) {
            for (const key in attributes) {
                htmlElement.setAttribute(key, attributes[key]);
            }
        }
        return htmlElement;
    }
}