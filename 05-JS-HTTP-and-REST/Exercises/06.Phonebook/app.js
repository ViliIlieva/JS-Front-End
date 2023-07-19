function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/phonebook';
    const phoneContainer = document.getElementById('phonebook');
    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');

    document.getElementById('btnLoad').addEventListener('click', load);
    document.getElementById('btnCreate').addEventListener('click', create);


    function load(){
        fetch(BASE_URL)
            .then(res => res.json())
            .then(phonebook => {
                phonebook = Object.values(phonebook);

                phoneContainer.innerHTML = "";

                for (const {person, phone, _id} of phonebook) {
                    const li = document.createElement('li');
                    const deleteBtn = document.createElement('button');
                    deleteBtn.textContent = 'Delete';
                    deleteBtn.id = _id;
                    deleteBtn.addEventListener('click', deletePhone);

                    li.innerHTML = `${person}: ${phone}`;
                    li.appendChild(deleteBtn);
                    phoneContainer.appendChild(li);
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    function create(){
        let person = personInput.value;
        let phone = phoneInput.value;

        fetch(BASE_URL, {
            method: 'POST',
            body: JSON.stringify({person, phone})
        }).then(res => res.json())
            .then(() => {
                load();
                personInput.value = '';
                phoneInput.value = '';
            })
            .catch(err => {
                console.log(err)
            });
    }

    function deletePhone(){
        const  id = this.id;//казваме This защото в load button.id = _id;
        fetch(`${BASE_URL}/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(load)
            .catch(err => {
                console.log(err)
            })
    }
}
attachEvents();