function extractText() {
    //направо го превръщаме в array докато го вземаме
    const listItems = Array.from(document.querySelectorAll('li'));

    //имам всичките обекти, минавам през тях и вземам техния текст,
    //после го join-вам по нов ред
    const text = listItems.map(item => item.textContent).join("\n");

    //върни ги към текстовото поле
    document.querySelector('textarea').value = text;
}