function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/grocery/';
    document.getElementById('load-product').addEventListener('click', load);
    const addBtn = document.getElementById('add-product');
    addBtn.addEventListener('click', add);

    const updateBtn = document.getElementById('update-product');
    updateBtn.addEventListener('click', update);

    const tbody = document.getElementById('tbody');
    let editProductId = null;

    let productInput = document.getElementById('product');
    let countInput = document.getElementById('count');
    let priceInput = document.getElementById('price');

    function load() {
        if (event) {
            event.preventDefault();
        }
        tbody.innerHTML = '';
        fetch(BASE_URL)
            .then(res => res.json())
            .then((data) => {
                data = Object.values(data);
                for (const {product, count, price, _id} of data) {
                    const tr = createElement('tr', tbody, null, null, _id);
                    createElement('td', tr, ['name'], product);
                    createElement('td', tr, ['count-product'], count);
                    createElement('td', tr, ['product-price'], price);
                    const btn = createElement('td', tr, ['btn'], null, _id);
                    const updateBtnSec = createElement('button', btn, ['update'], 'Update');
                    const deleteBtn = createElement('button', btn, ['delete'], 'Delete');

                    deleteBtn.addEventListener('click', remove);

                    //EDIT
                    updateBtnSec.addEventListener('click', () => {
                        updateBtn.removeAttribute('disabled');
                        addBtn.disabled = true;
                        editProductId = _id;
                        productInput.value = product;
                        countInput.value = count;
                        priceInput.value = price;
                    });
                }
            })
            .catch(err => console.log(err));
    }

    function add() {
        event.preventDefault();
        let product = productInput.value;
        let count = countInput.value;
        let price = priceInput.value;
        console.log(product, count, price)

        fetch(BASE_URL, {
            method: 'POST',
            body: JSON.stringify({product, count, price})
        })
            .then(res => res.json())
            .then(() => {
                load();
                clearFields();
            })
            .catch(err => {
                console.log(err)
            })
    }

    function remove(event) {
        const id = event.currentTarget.parentNode.id;
        fetch(`${BASE_URL}${id}`, {
            method: 'DELETE'
        })
            .then(() => load())
            .catch(err => {
                console.log(err)
            })
    }

    function update(event) {
        fetch(`${BASE_URL}${editProductId}`, {
            method: 'PATCH',
            body: JSON.stringify({
                product: productInput.value,
                count: countInput.value,
                price: priceInput.value
            })
        })
            .then(res => res.json())
            .then(() => {
                load();
                clearFields();
            })
            .catch(err => {
                console.log(err)
            })
    }

    function clearFields(){
        productInput.value = '';
        countInput.value = '';
        priceInput.value = '';
    }
    function createElement(type, parentNode, classes, content, id, attributes, useInnerHtml) {
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