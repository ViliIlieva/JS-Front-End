function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';
    const vacations ={};
    let editId = null;

    const inputDOMSelectors = {
        name: document.getElementById('name'),
        days: document.getElementById('num-days'),
        date: document.getElementById('from-date'),
    };

    const otherDOMSelectors = {
        addVacationBtn: document.getElementById('add-vacation'),
        editVacationBtn: document.getElementById('edit-vacation'),
        loadVacationBtn: document.getElementById('load-vacations'),
        list: document.getElementById('list'),
    }

    otherDOMSelectors.loadVacationBtn.addEventListener('click', loadAll);
    otherDOMSelectors.addVacationBtn.addEventListener('click', addVacation);
    otherDOMSelectors.editVacationBtn.addEventListener('click', changeVacation);

    function loadAll() {
        otherDOMSelectors.list.innerHTML = '';
        fetch(BASE_URL)
            .then(res => res.json())
            .then((data) => {
                data = Object.values(data);
                for (const {name, days, date, _id} of data) {
                    vacations[_id] = {name, days, date};
                    const div = createElement('div', otherDOMSelectors.list, null, _id, ['container']);
                    createElement('h2', div, name);
                    createElement('h3', div, date);
                    createElement('h3', div, days);

                    const changeBtn = createElement('button', div, 'Change', _id, ['change-btn']);
                    const doneBtn = createElement('button', div, 'Done', _id, ['done-btn']);

                    changeBtn.addEventListener('click', loadToChange);
                    doneBtn.addEventListener('click', markAsDone);
                }
            })
            .catch(err => console.log(err));
    }

    function addVacation(event){
        // event.preventDefault();
       let {name, days, date} = inputDOMSelectors;
        if (Object.values(inputDOMSelectors).some((input) => input.value === '')) {
            console.log('Empty input');
            return;
        }

        fetch(BASE_URL, {
            method: 'POST',
            body: JSON.stringify({
                name: name.value,
                days: days.value,
                date: date.value,
            })
        })
            .then(res => res.json())
            .then(() => {
                loadAll();
                clearAllInput();
            })
            .catch(err => {
                console.log(err)
            });
    }

    function loadToChange(event){
        editId = this.id;
        const parent = event.currentTarget.parentNode;
        const vacation = parent.children;

        Object.keys(inputDOMSelectors).forEach(
            key => {
                const selector = inputDOMSelectors[key];
                selector.value = vacations[editId][key];
            }
        )
        otherDOMSelectors.editVacationBtn.disabled = false;
        otherDOMSelectors.addVacationBtn.disabled = true;

        const courseElement = document.getElementById(`${editId}`);
        courseElement.remove();
    }

    function changeVacation(){
        let {name, days, date} = inputDOMSelectors;
        event.preventDefault();
        fetch(`${BASE_URL}${editId}`, {
            method: 'PUT',
            body: JSON.stringify({
                name: name.value,
                days: days.value,
                date: date.value,
            })
        })
            .then(res => res.json())
            .then(() => {
                loadAll();
                clearAllInput();
                otherDOMSelectors.editVacationBtn.disabled = true;
                otherDOMSelectors.addVacationBtn.disabled = false;
            })
    }

    function markAsDone(event){
        let id = event.currentTarget.parentNode.id;
        console.log(id)
        fetch(`${BASE_URL}${id}`, {
            method: 'DELETE'
        })
            .then(() => {
                loadAll();
            })
            .catch(err => console.log(err))
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

attachEvents();