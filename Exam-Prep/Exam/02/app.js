window.addEventListener("load", solve);

function solve() {
    const scholarships = {};
    const inputDOMSelectors = {
        name: document.getElementById('student'),
        university: document.getElementById('university'),
        score: document.getElementById('score'),
    };

    const otherDOMSelectors = {
        nextBtn: document.getElementById('next-btn'),
        previewList: document.getElementById('preview-list'),
        candidateList: document.getElementById('candidates-list'),
    };

    otherDOMSelectors.nextBtn.addEventListener('click', next);

    function next() {
        if (Object.values(inputDOMSelectors).some((selector) => selector.value === '')) {
            clearAllInput();
            console.log('EMPTY FIELD')
            return;
        }

        const student = {
            id: '_' + Math.random().toString(36).substr(2, 9),
            name: inputDOMSelectors.name.value,
            university: inputDOMSelectors.university.value,
            score: inputDOMSelectors.score.value,
        }
        scholarships[student.id] = student;

        const li = createElement('li', otherDOMSelectors.previewList, null, student.id, ['application']);
        const article = createElement('article', li);
        createElement('h4', article, student.name);
        createElement('p', article, `University: ${student.university}`);
        createElement('p', article, `Score: ${student.score}`);
        const editBtn = createElement('button', li, 'edit', student.id, ['action-btn','edit']);
        const applyBtn = createElement('button', li, 'apply', student.id, ['action-btn','apply']);

        editBtn.addEventListener('click', edit);
        applyBtn.addEventListener('click', apply);

        otherDOMSelectors.nextBtn.disabled = true;
        clearAllInput();
    }

    function edit(){
        const taskId = this.id;

        Object.keys(inputDOMSelectors).forEach(key => {
            const selector = inputDOMSelectors[key];
            selector.value = scholarships[taskId][key];
        })
        const taskElement = document.querySelector(`#${taskId}`);
        taskElement.remove();
        delete scholarships[taskId];

        otherDOMSelectors.nextBtn.disabled = false;
    }

    function apply(){
        const taskRef = this.parentNode;
        const editBtn = taskRef.querySelector('.edit');
        const applyBtn = taskRef.querySelector('.apply');
        otherDOMSelectors.candidateList.appendChild(taskRef);

        editBtn.remove();
        applyBtn.remove();
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
  