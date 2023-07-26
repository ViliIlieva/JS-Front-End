window.addEventListener("load", solve);

function solve() {
    //обект в който да си запазим нашата история, която да добавяме към инпут полетата
    //за да я редактираме, да не я викаме от ДОМ полетата
    const storyState = {
        firstName: null,
        lastName: null,
        age: null,
        title: null,
        genre: null,
        story: null,
    }
    const inputDOMSelectors = {
        firstName: document.getElementById('first-name'),
        lastName: document.getElementById('last-name'),
        age: document.getElementById('age'),
        title: document.getElementById('story-title'),
        genre: document.getElementById('genre'),
        story: document.getElementById('story'),
    };

    const otherDOMSelectors = {
        publishBtn: document.getElementById('form-btn'),
        previewList: document.getElementById('preview-list'),
        main: document.getElementById('main'),
    };

    otherDOMSelectors.publishBtn.addEventListener('click', publishStoryHandler);

    function publishStoryHandler() {
        //проверява дали всички полета value-то им да е различно от празен стринг, връща истина или лъжа
        const allFieldsAreValue = Object.values(inputDOMSelectors)
            .every((data) => data.value !== "");
        if (!allFieldsAreValue) {
            console.log('EMPTY FIELD')
            return;
        }

        const {firstName, lastName, age, title, genre, story} = inputDOMSelectors;

        const li = createElement('li', otherDOMSelectors.previewList, null, ['story-info']);
        const article = createElement('article', li);
        createElement('h4', article, `Name: ${firstName.value} ${lastName.value}`);
        createElement('p', article, `Age: ${age.value}`);
        createElement('p', article, `Title: ${title.value}`);
        createElement('p', article, `Genre: ${genre.value}`);
        createElement('p', article, `${story.value}`);
        const saveBtn = createElement('button', li, `Save Story`, null, ['save-btn']);
        const editBtn = createElement('button', li, `Edit Story`, null, ['edit-btn']);
        const deleteBtn = createElement('button', li, `Delete Story`, null, ['delete-btn']);

        //така си пълним нашия инмомемори обект, за да го имаме за edit
        for (const key in inputDOMSelectors) {
            storyState[key] = inputDOMSelectors[key].value;
        }

        clearAllInput();//функция за изчистване на полетата
        otherDOMSelectors.publishBtn.disabled = 'true';//да се деактивира бутона

        saveBtn.addEventListener('click', save);
        editBtn.addEventListener('click', edit);
        deleteBtn.addEventListener('click', deleteStory);
    }

    function save() {
        otherDOMSelectors.main.innerHTML = `<h1>Your scary story is saved!</h1>`;
    }

    function edit() {
        //понеже са със еднакви ключове го използваме
        //защото ние сме изчистили само стойностите не ключовете
        for (const key in inputDOMSelectors) {
            inputDOMSelectors[key].value = storyState[key];
        }
        //премахваме атрибута за да стане отново активен бутона
        otherDOMSelectors.publishBtn.removeAttribute('disabled');
        otherDOMSelectors.previewList.innerHTML =
            `<h3>Preview</h3>`;
    }

    function deleteStory(event) {
        const liItem = event.currentTarget.parentNode; //взема парента на ли-то
        liItem.remove();
        otherDOMSelectors.publishBtn.removeAttribute('disabled');
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
