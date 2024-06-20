// Inpute related constants
const input = document.querySelector('#favchap');

// List related constants
const list = document.querySelector('list');
const li = document.createElement('li');

// Button related constants
const button = document.querySelector('button');
const deleteButton = document.createElement('button');

// Setting up the list
li.textContent = input.value;

// Setting up button content
deleteButton.textContent = '❌';

// Adding delete button to li element
li.append(deleteButton);
list.append(li);

// Add Chapter button listener
button.addEventListener('click', function() {
    // This code will execute when the button is clicked
    if(input.value.trim() !== '') {
        li.append(input);
        list.append(li);
    }
});

// Delete button event listner
deleteButton.addEventListener('click', function() {
    list.removeChild(li);
    input.focus();
});

// Cleanup input
input.value = '';
input.focus();