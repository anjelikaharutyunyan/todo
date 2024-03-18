document.addEventListener("DOMContentLoaded", function () {
    const addTaskButton = document.querySelector('#addTaskBtn');
    const taskInput = document.querySelector('#taskInput');
    const taskList = document.querySelector('#taskList');

    function createNewRow(inputValue) {
        const row = document.createElement('li');
        row.classList.add('task-item')
        const text = document.createTextNode(inputValue);

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'x';
        deleteButton.classList.add('delete-task'); 
        deleteButton.addEventListener('click', function () {
            deleteRow(row);
        });

        row.appendChild(text);
        row.appendChild(deleteButton); 
        taskList.appendChild(row);

        taskInput.value = '';
    }

    function deleteRow(row) {
        taskList.removeChild(row); 
    }

    addTaskButton.addEventListener('click', function () {
        const inputValue = taskInput.value.trim();
        if (inputValue) {
            createNewRow(inputValue);
        }
    });
});
