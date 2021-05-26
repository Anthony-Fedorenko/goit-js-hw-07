// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size.В результате при перетаскивании ползунка будет меняться размер текста.

const inputChangeRange = document.querySelector('#font-size-control');
const textResult = document.querySelector('#text');

inputChangeRange.addEventListener('input', e => (textResult.style.fontSize = `${e.currentTarget.value}px`));