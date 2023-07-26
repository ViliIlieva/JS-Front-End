function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';
    const titleInput = document.getElementById('title');

    const addBtn = document.getElementById('add-button');
    addBtn.addEventListener('click', add);

    const loadBtn = document.getElementById('load-button');
    loadBtn.addEventListener('click', loadAll);

    const todoList = document.getElementById('todo-list');


    function loadAll() {
        if (event) {
            event.preventDefault();
        }
        todoList.innerHTML = '';
        fetch(BASE_URL)
            .then(res => res.json())
            .then((tasks) => {
                tasks = Object.values(tasks);
                for (const {_id, name} of tasks) {
                    const li = document.createElement('li');
                    const span = document.createElement('span');
                    const removeBtn = document.createElement('button');
                    const editBtn = document.createElement('button');

                    li.id = _id;
                    span.textContent = name;
                    removeBtn.textContent = 'Remove';
                    removeBtn.addEventListener('click', remove);

                    editBtn.textContent = 'Edit';
                    editBtn.addEventListener('click', edit);

                    li.append(span, removeBtn, editBtn);
                    todoList.appendChild(li);
                }
            })
            .catch(err =>
                console.log(err))
    }

    function add() {
        event.preventDefault();
        const name = titleInput.value;
        fetch(BASE_URL, {
            method: 'POST',
            body: JSON.stringify({name})
        })
            .then(res => res.json())
            .then(() => {
                loadAll();
                titleInput.value = 'Title';
            })
            .catch(err => {
                console.log(err)
            })
    }

    function edit(event) {//вземаме евента защото знаем че на този бутон парента е li
        const liParent = event.currentTarget.parentNode;//взема самото li
        const [span, removeBtn, editBtn] = Array.from(liParent.children);//взема всички деца на li-то

        const editInput = document.createElement('input');
        editInput.value = span.textContent;//съдържанието на спана да стане value на инпут поле
        //закача елемент към лито но като начална позиция
        liParent.prepend(editInput);
        const submitBtn = document.createElement('button');
        submitBtn.textContent = 'Submit'
        submitBtn.addEventListener('click', submit)
        liParent.appendChild(submitBtn);
        span.remove();
        editBtn.remove();
    }

    function submit(event) {
        const liParent = event.currentTarget.parentNode;
        const id = event.currentTarget.parentNode.id;
        const [input] = Array.from(liParent.children);//първия елемент е инпут поле

        fetch(`${BASE_URL}${id}`, {
            method: 'PATCH',
            body: JSON.stringify({name: input.value})
        })
            .then(res => res.json())
            .then(() => loadAll())
            .catch(err => {
                console.log(err)
            })
    }

    function remove(event) {
        const id = event.currentTarget.parentNode.id;
        fetch(`${BASE_URL}${id}`, {
            method: 'DELETE'
        })
            .then(() => loadAll())
            .catch(err => {
                console.log(err)
            })
    }
}

attachEvents();
