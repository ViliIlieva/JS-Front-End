window.addEventListener("load", solve);

function solve() {
    const tasks = {};
    const inputDOMSelectors = {
        title: document.getElementById('task-title'),
        category: document.getElementById('task-category'),
        content: document.getElementById('task-content'),
    };

    const otherDOMSelectors = {
        publishBtn: document.getElementById('publish-btn'),
        reviewList: document.getElementById('review-list'),
        publishedList: document.getElementById('published-list'),
    };
    otherDOMSelectors.publishBtn.addEventListener('click', publish);

    function publish() {
        if (Object.values(inputDOMSelectors).some((selector) => selector.value === '')) {
            clearAllInput();
            console.log('EMPTY FIELD')
            return;
        }

        const task ={
            id: '_' + Math.random().toString(36).substr(2, 9),
            title: inputDOMSelectors.title.value,
            category: inputDOMSelectors.category.value,
            content: inputDOMSelectors.content.value,
        }
        tasks[task.id] = task;
        const li = createElement('li', otherDOMSelectors.reviewList, null, task.id, ['rpost']);
        const article = createElement('article', li);
        createElement('h4', article, task.title);
        createElement('p', article, `Category: ${task.category}`);
        createElement('p', article, `Content: ${task.content}`);
        const editBtn = createElement('button', li, 'Edit', task.id, ['action-btn','edit']);
        const postBtn = createElement('button', li, 'Post', task.id, ['action-btn','post']);

        editBtn.addEventListener('click', editTask);
        postBtn.addEventListener('click', post);
        clearAllInput();
    }

    function post(){
        const taskRef = this.parentNode;
        const editBtn = taskRef.querySelector('.edit');
        const postBtn = taskRef.querySelector('.post');
        otherDOMSelectors.publishedList.appendChild(taskRef);

        editBtn.remove();
        postBtn.remove();
    }

    function editTask(){
        const taskId = this.id;

        Object.keys(inputDOMSelectors).forEach(key => {
            const selector = inputDOMSelectors[key];
            selector.value = tasks[taskId][key];
        })
        const taskElement = document.querySelector(`#${taskId}`);
        taskElement.remove();
        delete tasks[taskId];
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