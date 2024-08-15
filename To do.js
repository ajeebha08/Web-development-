
document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();
    
    if (task) {
        addTask(task);
        taskInput.value = '';
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('taskList');

    const li = document.createElement('li');
    const input = document.createElement('input');
    input.type = 'text';
    input.value = taskText;
    input.setAttribute('readonly', 'readonly');

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';

    editBtn.addEventListener('click', function() {
        if (editBtn.textContent.toLowerCase() === 'edit') {
            input.removeAttribute('readonly');
            input.focus();
            editBtn.textContent = 'Save';
        } else {
            input.setAttribute('readonly', 'readonly');
            editBtn.textContent = 'Edit';
        }
    });

    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    li.appendChild(input);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
}

// Moving background
const movingBg = document.createElement('div');
movingBg.classList.add('moving-background');
document.body.appendChild(movingBg);
