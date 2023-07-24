function attachEvents() {
    const authorInput = document.querySelector('[name="author"]');
    const contentInput = document.querySelector('[name="content"]');
    const BASE_URL = 'http://localhost:3030/jsonstore/messenger';
    const textarea = document.getElementById('messages');

    document.getElementById('submit').addEventListener('click', sendMessage);
    document.getElementById('refresh').addEventListener('click', refreshMessage);

    function refreshMessage() {
        textarea.disable = false;
        fetch(BASE_URL)
            .then(res => res.json())
            .then((messages) => {
                textarea.innerHTML = '';
                for (const key in messages) {
                    let{author, content} = messages[key];
                    textarea.append(`${author}: ${content}\n`)
                }
            })
    }

    function sendMessage() {
        let author = authorInput.value;
        let content = contentInput.value;
        fetch(BASE_URL, {
            method: 'POST',
            body: JSON.stringify({author, content})
        })
            .then(res => res.json())
            .then(() => {
                refreshMessage();
                authorInput.value = '';
                contentInput.value = '';
            })
    }
}

attachEvents();