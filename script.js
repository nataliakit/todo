
document.getElementById('form').addEventListener('submit', addItem);
document.querySelector('.todo__submit-button').addEventListener('click', addItem);
const listElement = document.querySelector('.todo__items');

listElement.addEventListener('click', deleteItem);

function addItem(e) {
  e.preventDefault();
  let inputText = document.querySelector('.todo__text-input');
  let inputTextValue = inputText.value;

  let items = listElement;
  let itemElement = document.createElement('div');
  itemElement.innerHTML = `<div class="todo__item">${inputTextValue}<span class="delete">x</span></div>`;
  const firstExistItem = listElement.firstElementChild;
  items.insertBefore(itemElement,firstExistItem);

  inputText.value = '';

  // setTimeout(() => {
  //   document.querySelector('.todo__item--new').classList.remove('todo__item--new');
  // }, 100);

  localStorage.setItem('todo-list-html',items.innerHTML);


}

function deleteItem(e) {
  let target = e.target;
  if(target.classList.contains('delete')){
    let element = target.parentNode
    element.parentNode.removeChild(element)
  }
}