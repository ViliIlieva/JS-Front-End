window.addEventListener('load', solve);

function solve() {
    const parts = {};
    const inputDOMSelectors = {
        model: document.getElementById('car-model'),
        year: document.getElementById('car-year'),
        partName: document.getElementById('part-name'),
        partNumber: document.getElementById('part-number'),
        condition: document.getElementById('condition'),
    };

    const otherDOMSelectors = {
        nextBtn: document.getElementById('next-btn'),
        infoList: document.querySelector('.info-list'),
        confirmList: document.querySelector('.confirm-list'),
        img: document.getElementById('complete-img'),
        completeText: document.getElementById('complete-text'),
    };

    otherDOMSelectors.nextBtn.addEventListener('click', next);

    function next(event) {
        event.preventDefault();
        if (Object.values(inputDOMSelectors).some((input) => input.value === '')) {
            console.log('Empty input');
            return;
        }
        if (!isTypeValid(Number(inputDOMSelectors.year.value))) {
            console.log('Invalid Type');
            return;
        }

        const part = {
            id: '_' + Math.random().toString(36).substr(2, 9),
            model: inputDOMSelectors.model.value,
            year: inputDOMSelectors.year.value,
            partName: inputDOMSelectors.partName.value,
            partNumber: inputDOMSelectors.partNumber.value,
            condition: inputDOMSelectors.condition.value,
        }
        parts[part.id] = part;

        const li = createElement('li', otherDOMSelectors.infoList, null, part.id, ['part-content']);
        const article = createElement('article', li);
        createElement('p', article, `Car Model: ${part.model}`);
        createElement('p', article, `Car Year: ${part.year}`);
        createElement('p', article, `Part Name: ${part.partName}`);
        createElement('p', article, `Part Number: ${part.partNumber}`);
        createElement('p', article, `Condition: ${part.condition}`);
        const editBtn = createElement('button', li, `Edit`, part.id, ['edit-btn']);
        const continueBtn = createElement('button', li, `Continue`, part.id, ['continue-btn']);

        editBtn.addEventListener('click', edit);
        continueBtn.addEventListener('click', continueFunction);

        otherDOMSelectors.img.style.visibility = "hidden";
        otherDOMSelectors.completeText.textContent = '';
        otherDOMSelectors.nextBtn.disabled = true;
        clearAllInput();
    }

    function edit(){
        const partId = this.id;
        Object.keys(inputDOMSelectors).forEach(key => {
            const selector = inputDOMSelectors[key];
            selector.value = parts[partId][key];
        })
        otherDOMSelectors.nextBtn.disabled = false;

        const partElement = document.querySelector(`#${partId}`);
        partElement.remove();
        delete parts[partId];
    }

    function continueFunction(){
        const partRef = this.parentNode;
        const editBtn = partRef.querySelector('.edit-btn');
        const continueBtn = partRef.querySelector('.continue-btn');
        const confirmBtn = createElement('button', null, `Confirm`, partRef.id, ['confirm-btn']);
        const cancelBtn = createElement('button', null, `Cancel`, partRef.id, ['cancel-btn']);

        confirmBtn.addEventListener('click', confirm);
        cancelBtn.addEventListener('click', cancel);

        partRef.appendChild(confirmBtn);
        partRef.appendChild(cancelBtn);
        otherDOMSelectors.confirmList.appendChild(partRef);
        editBtn.remove();
        continueBtn.remove();
    }

    function confirm(){
        const partId = this.id;
        otherDOMSelectors.nextBtn.disabled = false;
        otherDOMSelectors.img.style.visibility = "visible";
        otherDOMSelectors.completeText.textContent = `Part is Ordered!`;

        const partElement = document.querySelector(`#${partId}`);
        partElement.remove();
        delete parts[partId];
    }

    function cancel(){
        const partId = this.id;
        otherDOMSelectors.nextBtn.disabled = false;
        const partElement = document.querySelector(`#${partId}`);
        partElement.remove();
        delete parts[partId];
    }

    function isTypeValid(year) {
        return year >= 1980 && year <= 2023
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


    
    
