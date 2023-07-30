window.addEventListener('load', solve);

function solve() {
    const tasks = {};
    const inputDOMSelectors = {
        title: document.getElementById('title'),
        description: document.getElementById('description'),
        label: document.getElementById('label'),
        points: document.getElementById('points'),
        assignee: document.getElementById('assignee'),
    };

    const otherDOMSelectors = {
        createBtn: document.getElementById('create-task-btn'),
        deleteBtn: document.getElementById('delete-task-btn'),
        previewList: document.getElementById('tasks-section'),
        totalPoints: document.getElementById('total-sprint-points'),
        hiddenTaskId: document.getElementById('task-id'),
    };

    const icons = {
        Feature: '&#8865;',
        'Low Priority Bug': '&#9737;',
        'High Priority Bug': '&#9888;',
    }

    const labelClasses = {
        Feature: 'feature',
        'Low Priority Bug': 'low-priority',
        'High Priority Bug': 'high-priority',
    }

    otherDOMSelectors.createBtn.addEventListener('click', createTask);
    otherDOMSelectors.deleteBtn.addEventListener('click', remove);

    function createTask() {
        if (Object.values(inputDOMSelectors).some((selector) => selector.value === '')) {
            clearAllInput();
            console.log('EMPTY FIELD')
            return;
        }
        //правим си обект, като му подаваме данни от инпутите
        const task = {
            id: `task-${Object.values(tasks).length + 1}`,
            title: inputDOMSelectors.title.value,
            description: inputDOMSelectors.description.value,
            label: inputDOMSelectors.label.value,
            points: Number(inputDOMSelectors.points.value),
            assignee: inputDOMSelectors.assignee.value,
        }
        //имаме един клас в който ще добавяме всички обекти
        tasks[task.id] = task;

        const article = createElement('article', otherDOMSelectors.previewList, null, task.id, ['task-card']);
        createElement('div', article, `${task.label} ${icons[task.label]}`,null, ['task-card-label', labelClasses[task.label]], null, true);
        createElement('h3', article, task.title, null, ['task-card-title']);
        createElement('p', article, task.description, null, ['task-card-description']);
        createElement('div', article, `Estimated at ${task.points} pts`, null, ['task-card-points']);
        createElement('div', article, `Assigned to: ${task.assignee}`, null, ['task-card-assignee']);
        const btnDiv = createElement('div', article, null, null, ['task-card-actions']);
        const deleteBtn = createElement('button', btnDiv, 'Delete');

        deleteBtn.addEventListener('click', loadDeleteConfirm);

        const totalPoints = Object.values(tasks).reduce((acc, curr) => acc + curr.points, 0);
        otherDOMSelectors.totalPoints.textContent = `Total Points ${totalPoints}pts`;
        clearAllInput();
    }


    function loadDeleteConfirm(event){
        const taskId = event.currentTarget.parentElement.parentElement.getAttribute('id');

        Object.keys(inputDOMSelectors).forEach(key => {
            const selector = inputDOMSelectors[key];
            selector.value = tasks[taskId][key];
            selector.disabled = true;
        })
        //горното решение замества това и disabled всяко едно поле
        // inputDOMSelectors.title.value = tasks[taskId].title;
        // inputDOMSelectors.description.value = tasks[taskId].description;
        // inputDOMSelectors.label.value = tasks[taskId].label;
        // inputDOMSelectors.points.value = tasks[taskId].points;
        // inputDOMSelectors.assignee.value = tasks[taskId].assignee;

        otherDOMSelectors.createBtn.disabled = true;
        otherDOMSelectors.deleteBtn.removeAttribute('disabled');

        //сетване на стойност на хидън поле
        otherDOMSelectors.hiddenTaskId.value = taskId;
    }

    function remove(){
        const taskId = otherDOMSelectors.hiddenTaskId.value;
        const taskElement = document.querySelector(`#${taskId}`);
        taskElement.remove();
        delete tasks[taskId];

        Object.values(inputDOMSelectors).forEach(selector => {
            selector.value = '';
            selector.disabled = false;
        })
        const totalPoints = Object.values(tasks).reduce((acc, curr) => acc + curr.points, 0);
        otherDOMSelectors.totalPoints.textContent = `Total Points ${totalPoints}pts`;

        otherDOMSelectors.createBtn.removeAttribute('disabled');
        otherDOMSelectors.deleteBtn.disabled = true;
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