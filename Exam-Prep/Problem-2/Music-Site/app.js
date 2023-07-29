window.addEventListener('load', solve);

function solve() {

    const inputDOMSelectors = {
        genre: document.getElementById('genre'),
        name: document.getElementById('name'),
        author: document.getElementById('author'),
        date: document.getElementById('date'),
    };

    const otherDOMSelectors = {
        addBtn: document.getElementById('add-btn'),
        previewList: document.querySelector('.all-hits-container'),
        totalLikes: document.querySelector('.likes > p'),
        savedList: document.querySelector('.saved-container'),
    };

    otherDOMSelectors.addBtn.addEventListener('click', addSong);

    function addSong(event) {
        event.preventDefault();
        const allFieldsAreValue = Object.values(inputDOMSelectors)
            .every((data) => data.value !== "");
        if (!allFieldsAreValue) {
            clearAllInput();
            console.log('EMPTY FIELD')
            return;
        }

        const {genre, name, author, date} = inputDOMSelectors;

        const songContainer = createElement('div', otherDOMSelectors.previewList, null, null, ['hits-info']);
        createElement('img', songContainer, null, null, null, {src: './static/img/img.png'});
        createElement('h2', songContainer, `Genre: ${genre.value}`);
        createElement('h2', songContainer, `Name: ${name.value}`);
        createElement('h2', songContainer, `Author: ${author.value}`);
        createElement('h3', songContainer, `Date: ${date.value}`);
        const saveBtn = createElement('button', songContainer, `Save song`, null, ['save-btn']);
        const likeBtn = createElement('button', songContainer, `Like song`, null, ['like-btn']);
        const deleteBtn = createElement('button', songContainer, `Delete`, null, ['delete-btn']);

        saveBtn.addEventListener('click', saveSong);
        likeBtn.addEventListener('click', likeSong);
        deleteBtn.addEventListener('click', deleteSong);

        clearAllInput();
    }

    //node сам прехвърля от едното място на другото, без да е необходимо да правим нищо повече
    function saveSong() {
        const songRef = this.parentNode;//родителя на бутона Save, той е родител и на целия див който трябва да прехвърлим
        const saveBtn = songRef.querySelector('.save-btn');
        const likeBtn = songRef.querySelector('.like-btn');
        otherDOMSelectors.savedList.appendChild(songRef);

        saveBtn.remove();
        likeBtn.remove();
    }

    function likeSong() {
        this.setAttribute('disabled', true);
        let oldLikes = otherDOMSelectors.totalLikes.textContent.split(': ')[1];
        let increaseLikes = Number(oldLikes) + 1;
        otherDOMSelectors.totalLikes.textContent = `Total Likes: ${increaseLikes}`;
    }

    function deleteSong() {
        let parent = this.parentNode;//взема родителя
        parent.remove(this);//премахва го, с this дава обекта към който е прикачен този бутон
    }

    function clearAllInput() {
        Object.values(inputDOMSelectors).forEach(input => {
            input.value = '';
        })
    }

    function createElement(type, parentNode, content, id, classes, attributes, useInnerHtml) {
        const htmlElement = document.createElement(type);
        if (content && useInnerHtml) {
            htmlElement.innerHTML = content;
        } else {
            if (content && type !== 'input') {
                htmlElement.textContent = content;
            }
            if (content && type === 'input') {
                htmlElement.value = content;
            }
        }
        if (id) {
            htmlElement.id = id;
        }
        //['item1', 'item2', ...]
        if (classes && classes.length > 0) {
            htmlElement.classList.add(...classes);//може да са няколко класа
        }
        //{src: 'link to img', href: 'link to site', 'type: 'checkbox''}
        if (attributes) {
            for (const key in attributes) {
                htmlElement.setAttribute(key, attributes[key]);
            }
        }
        if (parentNode) {
            parentNode.appendChild(htmlElement);
        }
        return htmlElement;
    }

}



















