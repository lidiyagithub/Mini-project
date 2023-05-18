document.addEventListener('DOMContentLoaded', function() {
  const taskForm = document.getElementById('taskForm');
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  // Load tasks from localStorage
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  // Function to render tasks
  function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach(function(task, index) {
      const li = document.createElement('li');
      li.textContent = task;

      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.classList.add('edit');
      editButton.dataset.index = index;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('delete');
      deleteButton.dataset.index = index;

      li.appendChild(editButton);
      li.appendChild(deleteButton);
      taskList.appendChild(li);
    });
  }

  // Add a new task
  function addTask(e) {
    e.preventDefault();
    const task = taskInput.value.trim();
    if (task !== '') {
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      taskInput.value = '';
      renderTasks();
   

}
}

// Edit a task
function editTask(index) {
const task = prompt('Enter a new task:');
if (task !== null && task.trim() !== '') {
tasks[index] = task.trim();
localStorage.setItem('tasks', JSON.stringify(tasks));
renderTasks();
}
}

// Delete a task
function deleteTask(index) {
tasks.splice(index, 1);
localStorage.setItem('tasks', JSON.stringify(tasks));
renderTasks();
}

// Event listener for form submission
taskForm.addEventListener('submit', addTask);

// Event delegation for edit and delete buttons
taskList.addEventListener('click', function(e) {
if (e.target.classList.contains('edit')) {
const index = e.target.dataset.index;
editTask(index);
} else if (e.target.classList.contains('delete')) {
const index = e.target.dataset.index;
deleteTask(index);
}
});})