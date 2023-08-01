function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';
    const courses = {};
    let editId = null;

    const inputDOMSelectors = {
        title: document.getElementById('course-name'),
        type: document.getElementById('course-type'),
        description: document.getElementById('description'),
        teacher: document.getElementById('teacher-name'),
    };

    const otherDOMSelectors = {
        loadBtn: document.getElementById('load-course'),
        addBtn: document.getElementById('add-course'),
        editBtn: document.getElementById('edit-course'),
        list: document.getElementById('list'),
    }
    otherDOMSelectors.loadBtn.addEventListener('click', loadAll);
    otherDOMSelectors.addBtn.addEventListener('click', addCourse);
    otherDOMSelectors.editBtn.addEventListener('click', editTask);

    function loadAll() {
        otherDOMSelectors.list.innerHTML = '';
        fetch(BASE_URL)
            .then(res => res.json())
            .then((data) => {
                data = Object.values(data);
                for (const {title, type, description, teacher, _id} of data) {
                    courses[_id] = {title, type, description, teacher};
                    const div = createElement('div', otherDOMSelectors.list, null, _id, ['container']);
                    createElement('h2', div, title);
                    createElement('h3', div, teacher);
                    createElement('h3', div, type);
                    createElement('h4', div, description);
                    const editBtn = createElement('button', div, 'Edit Course', _id, ['edit-btn']);
                    const finishBtn = createElement('button', div, 'Finish Course', _id, ['finish-btn']);

                    editBtn.addEventListener('click', loadToEditTask);
                    finishBtn.addEventListener('click', finishCourse);
                }
            })
            .catch(err => console.log(err));
    }

    function addCourse() {
        let {title, type, description, teacher} = inputDOMSelectors;
        if (Object.values(inputDOMSelectors).some((input) => input.value === '')) {
            console.log('Empty input');
            return;
        }
        if (!isTypeValid(type.value)) {
            console.log('Invalid Type');
            return;
        }

        fetch(BASE_URL, {
            method: 'POST',
            body: JSON.stringify({
                title: title.value,
                type: type.value,
                description: description.value,
                teacher: teacher.value,
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

    function loadToEditTask(event) {
        editId = this.id;
        const parent = event.currentTarget.parentNode;
        const course = parent.children;

        Object.keys(inputDOMSelectors).forEach(
            key => {
                const selector = inputDOMSelectors[key];
                selector.value = courses[editId][key];
            }
        )
        otherDOMSelectors.editBtn.disabled = false;
        otherDOMSelectors.addBtn.disabled = true;
//Премахва елемента от HTML-а
        const courseElement = document.getElementById(`${editId}`);
        courseElement.remove();
    }

    function editTask() {
        let {title, type, description, teacher} = inputDOMSelectors;
        event.preventDefault();
        fetch(`${BASE_URL}${editId}`, {
            method: 'PUT',
            body: JSON.stringify({
                title: title.value,
                type: type.value,
                description: description.value,
                teacher: teacher.value,
            })
        })
            .then(res => res.json())
            .then(() => {
                loadAll();
                clearAllInput();
                otherDOMSelectors.editBtn.disabled = true;
                otherDOMSelectors.addBtn.disabled = false;
            })
    }

    function finishCourse(event) {
        let id = event.currentTarget.parentNode.id;
        fetch(`${BASE_URL}${id}`, {
            method: 'DELETE'
        })
            .then(() => {
                loadAll();
            })
            .catch(err => console.log(err))
    }

    function isTypeValid(type) {
        return type === 'Long' || type === 'Medium' || type === 'Short';
    }

    function clearAllInput() {
        Object.values(inputDOMSelectors).forEach((input) => {
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