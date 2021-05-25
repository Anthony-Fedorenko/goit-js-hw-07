// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const newElem = (title) => {
    const elem = document.createElement('li');
    elem.textContent = title;
    return elem;
};

document.querySelector('#ingredients').append(...ingredients.map(newElem));