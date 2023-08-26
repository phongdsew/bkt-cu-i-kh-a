// Get references to the input field, add button, and todo list
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

// Add event listener to the add button
addButton.addEventListener('click', function() {
    // Get the value from the input field
    const todoText = todoInput.value;

    // Create a new list item element
    const listItem = document.createElement('li');
    listItem.textContent = todoText;

    // Append the new list item to the todo list
    todoList.appendChild(listItem);

    // Clear the input field
    todoInput.value = '';
});
