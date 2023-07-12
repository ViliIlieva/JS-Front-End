function create(words) {
    const contentDiv = document.getElementById('content');

    for (const word of words) {
        const newDive = document.createElement('div');
        const newP = document.createElement('p');
        newP.textContent = word;
        newP.style.display = 'none';

        newDive.addEventListener('click',() => {
            newP.style.display = 'block';
        });

        newDive.appendChild(newP);
        contentDiv.appendChild(newDive);

    }
}