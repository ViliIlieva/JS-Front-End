function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/collections/students';
    const tBody = document.querySelector('tbody');
    const firstNameInput = document.querySelector('[name="firstName"]')
    const lastNameInput = document.querySelector('[name="lastName"]')
    const facultyNumberInput = document.querySelector('[name="facultyNumber"]')
    const gradeInput = document.querySelector('[name="grade"]')
    let students = [];

    fetch(BASE_URL)
        .then(res => res.json())
        .then((data) => {
            tBody.innerHTML = '';
            students = Array.from(Object.values(data));
            students.forEach(st => {
                tBody.innerHTML +=
                    `
                    <tr>
                        <th>${st.firstName}</th>
                        <th>${st.lastName}</th>
                        <th>${st.facultyNumber}</th>
                        <th>${st.grade}</th>
                    </tr>
                    `
            })
        })


    document.getElementById('submit').addEventListener('click', createStudent, refreshPage);

    function createStudent() {
        let firstName = firstNameInput.value;
        let lastName = lastNameInput.value;
        let facultyNumber = facultyNumberInput.value;
        let grade = gradeInput.value;

        fetch(BASE_URL, {
            method: 'POST',
            body: JSON.stringify({firstName, lastName, facultyNumber, grade})
        })
            .then(res => res.json())
            .then(() => {
                if (firstName !== '' && lastName !== '' && facultyNumber !== '' && grade !== '') {
                    window.location.reload();
                } else {
                    throw new Error(`Empty field`);
                }
                firstNameInput.value = '';
                lastNameInput.value = '';
                facultyNumberInput.value = '';
                gradeInput.value = '';
            })
            .catch(err => console.log(err.message))
    }

    function refreshPage(){
        window.location.reload();
    }
}

attachEvents();