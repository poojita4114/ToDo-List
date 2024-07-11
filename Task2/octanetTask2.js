const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

let tasks = [];

// Function to render tasks
function renderTasks() {
    todoList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.text;
        if (task.completed) {
            li.classList.add('completed');
        }
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            deleteTask(index);
        });
        li.appendChild(deleteButton);
        li.addEventListener('click', () => {
            toggleTask(index);
        });
        todoList.appendChild(li);
    });
}

// Function to add a new task
function addTask(text) {
    const newTask = {
        text: text,
        completed: false
    };
    tasks.push(newTask);
    renderTasks();
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Function to toggle task completion
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// Event listener for form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (text !== '') {
        addTask(text);
        input.value = '';
    }
});

// Initial rendering of tasks
renderTasks();