// Write your code here:

// Selects the DOM elements needed
const itemInput = document.querySelector('#shopping-form input'); 
const addButton = document.querySelector('#shopping-form button');
const shoppingList = document.querySelector('#shopping-list');
const itemTemplate = document.querySelector('#item-template');

// Removes a shopping list item
function removeShoppingListItem(event) {
  const listItem = event.target.closest('li');
  if (listItem) {
    listItem.remove();
  }
}
// Creates a new shopping list item and adds it to the list
function createItem() {
  const itemText = itemInput.value.trim();

  if (itemText === '') {
    return;
  }

// Clones the template and populates it with the item text
  const itemDupe = itemTemplate.content.cloneNode(true);
  const textSpan = itemDupe.querySelector('.item-text');
  const removeButton = itemDupe.querySelector('.remove-btn');

  // Sets the text content and uses an event listener to handle item removal on new entries
  textSpan.textContent = itemText;
  removeButton.addEventListener('click', removeShoppingListItem);

  // Adds the new item and resets the input field
  shoppingList.appendChild(itemDupe);
  itemInput.value = '';
  itemInput.focus();
}

// Uses event listener to create a new item when the button is clicked
addButton.addEventListener('click', createItem);