function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value;
    if (todoText === '') return;

    const todoList = document.getElementById('todo-list');
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = todoText;
    li.appendChild(span);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        todoList.removeChild(li);
    };
    li.appendChild(deleteButton);

    li.onclick = function() {
        li.classList.toggle('completed');
    };

    todoList.appendChild(li);
    todoInput.value = '';
}
