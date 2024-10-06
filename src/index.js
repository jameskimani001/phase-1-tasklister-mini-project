document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', (event) => {
      event.preventDefault();

      const taskDescription = document.getElementById('new-task-description').value;
      const priority = document.getElementById('priority').value;

      addTask(taskDescription, priority);
      form.reset(); // Reset the form after submission
  });

  function addTask(description, priority) {
      const li = document.createElement('li');
      li.textContent = description;
      li.style.color = getPriorityColor(priority);

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
          li.remove();
      });

      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.addEventListener('click', () => {
          const newDescription = prompt("Edit task:", description);
          if (newDescription) {
              li.firstChild.textContent = newDescription;
          }
      });

      li.appendChild(editButton);
      li.appendChild(deleteButton);
      taskList.appendChild(li);
  }

  function getPriorityColor(priority) {
      switch (priority) {
          case 'high':
              return 'red';
          case 'medium':
              return 'blue';
          case 'low':
              return 'green';
          default:
              return 'black';
      }
  }
});
