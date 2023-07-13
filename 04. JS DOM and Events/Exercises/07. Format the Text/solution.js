function solve() {
    const output = document.getElementById('output');
    const textArea = document.getElementById('input');
    let sentence = textArea.value.split('.');
    sentence.pop();

    while (sentence.length > 0) {
        let paragraph = sentence.splice(0, 3)
            .map((p) => p.trimStart());//взема първите три елемента и ги връща в нов масив, трие ги от стария

        const newP = document.createElement('p');
        newP.textContent = paragraph.join('.') + '.';
        output.appendChild(newP);
    }
}

    // const input = document.getElementById('input').value.trim();
    // const outputDiv = document.getElementById('output');
    //
    // let formatText = Array.from(input.split('.'))
    //     .filter(el => el.length > 0);
    //
    //
    //     if(formatText.length <= 3){
    //         const newParagraph = document.createElement('p');
    //         for (const element of formatText) {
    //             newParagraph.textContent += element + '.';
    //         }
    //         outputDiv.appendChild(newParagraph);
    //
    //     }else {
    //         for (let i = 0; i < formatText.length; i+=3){
    //             const newParagraph = document.createElement('p');
    //             newParagraph.textContent =
    //                 formatText[i] + '.' +
    //                 formatText[i + 1] + '.' +
    //                 formatText[i + 2] + '.';
    //             outputDiv.appendChild(newParagraph);
    //         }
    //     }
    // input.value = outputDiv.value;
