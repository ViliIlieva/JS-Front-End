function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';
    document.getElementById('load-board-btn').addEventListener('click', loadBord);
    document.getElementById('create-task-btn').addEventListener('click', createTask);

    const taskSections = {
        ToDo: document.querySelector('#todo-section .task-list'),
        'In Progress': document.querySelector('#in-progress-section .task-list'),
        'Code Review': document.querySelector('#code-review-section .task-list'),
        Done: document.querySelector('#done-section .task-list'),
    }

    const statusToNextStatusMap = {
        ToDo: 'Move to In Progress',
        'In Progress': 'Move to Code Review',
        'Code Review': 'Move to Done',
        Done: 'Close',
    }

    const inputDOMSelectors = {
        title: document.getElementById('title'),
        description: document.getElementById('description'),
    };

    function loadBord() {
        for (let key in taskSections) {
            taskSections[key].innerHTML = '';
        }
        fetch(BASE_URL)
            .then(res => res.json())
            .then((task) => {
                task = Object.values(task);
                for (const {title, description, status, _id} of task) {
                    const section = taskSections[status];
                    const li = createElement('li', section, null, _id, ['task']);
                    createElement('h3', li, title);
                    createElement('p', li, description);
                    const moveBtn = createElement('button', li, statusToNextStatusMap[status], _id);
                    moveBtn.addEventListener('click', moveTask);
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    function createTask() {
        const { title, description } = inputDOMSelectors;
        if (Object.values(inputDOMSelectors).some((input) => input.value === '')) {
            console.log('Empty input');
            return;
        }

        fetch(BASE_URL, {
            method: 'POST',
            body: JSON.stringify({
                title: title.value,
                description: description.value,
                status: 'ToDo',
            })
        })
            .then((res) => res.json())
            .then(() => {
                loadBord();
            })
            .catch(err => {
                console.log(err)
            });
        clearAllInput();
    }

    function moveTask(event) {
        const id = this.id;
        const textOnBtn = this.textContent;
        if (textOnBtn === 'Close') {
            fetch(`${BASE_URL}${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(() => {
                    loadBord();
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            let newStatus = textOnBtn.split('Move to ')[1];
            fetch(`${BASE_URL}${id}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    status: newStatus
                })
            })
                .then(res => res.json())
                .then(() => {
                    loadBord();
                })
                .catch(err => {
                    console.log(err)
                })
        }
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