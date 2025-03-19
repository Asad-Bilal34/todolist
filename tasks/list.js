document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '')
        alert("Enter some data to add task")
        return;

    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');
    const taskName = document.createElement('span');

    taskName.className = 'task-name';
    taskName.textContent = taskText;

    const actions = document.createElement('div');
    actions.className = 'actions';

    const editBtn = document.createElement('button');
    editBtn.className = 'edit';
    editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
    editBtn.addEventListener('click', () => editTask(taskName));

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete';
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i></i>';
    deleteBtn.addEventListener('click', () => deleteTask(taskItem));

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    taskItem.appendChild(taskName);
    taskItem.appendChild(actions);
    taskList.appendChild(taskItem);

    document.getElementById('successmsg').textContent = 'Todo item created successfully!';
    setTimeout(() => document.getElementById('successmsg').textContent = '', 3000);

    taskInput.value = '';
}

function editTask(taskName) {
    const newTask = prompt('Edit your task:', taskName.textContent);
    if (newTask !== null) {
        taskName.textContent = newTask;
    }
}

function deleteTask(taskItem) {
    taskItem.remove();

    document.getElementById('successmsg').textContent = 'Todo item deleted successfully';
    setTimeout ( () => document.getElementById('successmsg').textContent = '', 2500 );
}``