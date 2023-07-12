function lockedProfile() {
    const buttons = Array.from(document.getElementsByTagName('button'));
    buttons.forEach((button) => {
        button.addEventListener('click', toggleInformation);
    });

    function toggleInformation(event){
        const btn = event.currentTarget;//това е текущия бутон
        const currentProfile = btn.parentElement;//от бутона като вземем неговия родител получаваме достъп до всички негови елементи
        const children = Array.from(currentProfile.children);//чрез парента взимаме във array всички негови деца,
        // като ги логнем на конзолата виждаме че под индекс 9 е информацията която трябва да скриваме и показваме

        const unlock = children[4];
        const extraInfo = children[9]; //вземаме информацията която ще показваме

        if(unlock.checked) {
            if (btn.textContent === 'Show more') {
                extraInfo.style.display = "block";
                btn.textContent = 'Hide it';
            } else {
                extraInfo.style.display = "none";
                btn.textContent = 'Show more';
            }
        }
    }
}