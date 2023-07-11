function deleteByEmail() {
    //първо вземаме стойността на инпута
    const email = document.querySelector('input[name = "email"]').value;

    //обхождаме всички имейли и проверяваме с кой съвпадаме, но първо взимаме всички клетки със имейли
    const allEmail = Array.from(
        document.querySelectorAll('td:nth-child(even)'));

    //търсим дали имаме такъв имейл
    const userEmail = allEmail.find(box => box.textContent === email);

    //вземаме полето в което трябва да изпишем резултата
    const result = document.querySelector('#result');

    if(userEmail){
        userEmail.parentElement.remove();//намираме неговия родител и го премахваме
        result.textContent = 'Deleted.';
    }else {
        result.textContent = 'Not found.';
    }
}