document.getElementById('form').addEventListener('submit', addItem);
document.querySelector('.todo__submit-button').addEventListener('click', addItem);
const listElement = document.querySelector('.todo__items');

listElement.addEventListener('click', deleteItem);

function addItem(e) {
  e.preventDefault();
  console.log(1)
  let inputText = document.querySelector('.todo__text-input');
  let inputTextValue = inputText.value;

  let items = listElement;
  let itemElement = document.createElement('div');
  itemElement.innerHTML = `<div class="todo__item">${inputTextValue}<span class="delete">x</span></div>`;
  const firstExistItem = listElement.firstElementChild;
  // console.log(firstExistItem)
  items.insertBefore(itemElement,firstExistItem);

  // console.log(listElement.firstElementChild)
  inputText.value = '';
  setTimeout(() => {listElement.firstElementChild.querySelector('.delete').click()}, 10000);

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