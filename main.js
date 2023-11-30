const taskList = document.getElementById('task-list');
const newTaskInput = document.getElementById('new-task');

function addTask() {
    const taskText = newTaskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.className = 'task';
        li.innerHTML = `<input type="checkbox"> <span class="task-text">${taskText}</span> <div class="task-buttons"><button class="edit" onclick="editTask(this)">Edit</button><button class="done" onclick="markAsDone(this)">Done</button><button class="delete" onclick="deleteTask(this)">Delete</button></div>`;
        taskList.appendChild(li);
        newTaskInput.value = '';
    }
}

function completeSelectedTasks() {
    const checkboxes = document.querySelectorAll('.task input[type="checkbox"]:checked');
    checkboxes.forEach((checkbox) => {
        checkbox.closest('.task').classList.toggle('completed');
        checkbox.checked = false;
    });
}

function deleteTask(button) {
    button.parentNode.parentNode.remove();
}

function editTask(button) {
    const taskTextElement = button.parentNode.parentNode.querySelector('.task-text');
    const updatedTaskText = prompt('Edit task:', taskTextElement.textContent.trim());
    if (updatedTaskText !== null) {
        taskTextElement.textContent = updatedTaskText;
    }
}

function markAsDone(button) {
    const taskTextElement = button.parentNode.parentNode.querySelector('.task-text');
    taskTextElement.classList.toggle('completed');
}