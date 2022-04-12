const items = document.querySelector('.items');
const input = document.querySelector('.item__input');
const addBtn = document.querySelector('.input__icon');
const form = document.querySelector('.item__submit');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    onAdd();
})

function onAdd() {
    const text = input.value;
    if(text === ''){
        input.focus();
        return;
    }

    const item = createItem(text);
    items.appendChild(item);
    input.value = '';
    input.focus();
}

let id=0;
function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');
    itemRow.setAttribute('data-id', id);
    itemRow.innerHTML = `
    <div class="item">
        <span class="item__name">${text}</span>
        <button class="item__delete">
            <i class="fa-solid fa-eraser" data-id=${id}></i>
        </button>
    </div>
    <div class="item__divider"></div>
    `

    id++;

    return itemRow;
}

items.addEventListener('click', event => {
    const id = event.target.dataset.id;
    if (id) {
      const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
      toBeDeleted.remove();
    }
  });