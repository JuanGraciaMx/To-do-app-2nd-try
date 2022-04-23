//Reach elements from the DOM
let button = document.getElementById('form-button');
let input = document.getElementById('form-input');
let list = document.getElementById('task-list');

//Create event listeners
button.addEventListener('click', newErrand);
list.addEventListener('click', deleteErrand);

//Functions
function newErrand(e) {
    e.preventDefault();
    //Set the value of the input to what the user types
    const text = input.value;
    //Set input default to blank
    input.value = "";
    //Create div
    const div = document.createElement('div');
    div.classList.add('todo-div');
    //Create checkbox
    const cbox = document.createElement('input');
    cbox.setAttribute("type", "checkbox");
    //Append checkbox
    list.appendChild(div);
    div.appendChild(cbox);
    //Create list item
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.textContent = text;
    //Append li item
    div.appendChild(li);
    li.appendChild(p);
    //Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-button');
    deleteBtn.innerText = 'Delete';
    div.appendChild(deleteBtn);
    //Delete task
    deleteBtn.addEventListener('click', deleteTodo);

    function deleteTodo(e) {
    const deleteNode = e.target.parentElement;
    deleteNode.remove();
}
}
