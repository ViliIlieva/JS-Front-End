function focused() {
    const inputs = Array.from(document.querySelectorAll('input'));

    inputs.forEach(input => {
        input.addEventListener("focus", (e) => {
            e.currentTarget.parentElement.className = 'focused'; //има го създаден в style.css
        });
        input.addEventListener('blur', (e) => {//разфокусирваме елемента върху който сме били
            e.currentTarget.parentElement.className = '';
        })
    })
}