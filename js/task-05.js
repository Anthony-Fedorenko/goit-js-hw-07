// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const textInputRef = document.querySelector('#name-input');
const textOutputRef = document.querySelector('#name-output');

const nameStatus = (e) => {
    let textResult = e.currentTarget.value;
    if (textResult) {
        textOutputRef.textContent = textResult;
    } else {
        textOutputRef.textContent = 'незнакомец';
    }
};

textInputRef.addEventListener('input', nameStatus);