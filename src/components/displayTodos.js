const todos = [
  {
    text: 'Take out trash',
    isCompleted: false
  },
  { 
    text: 'Meeting with boss',
    isCompleted: false
  },
  {
    text: 'Dentist appt',
    isCompleted: false
  }
];

const displayTodos = () => {
  const todoList = document.querySelector('.todo-list');
  const parentContainer = document.querySelector('.container');
  const addTodo = document.createElement('input');

  todoList.innerHTML = '';
  addTodo.setAttribute('type', 'text');
  addTodo.setAttribute('placeholder', 'Add a todo');
  addTodo.setAttribute('id', 'add-todo');
  
  parentContainer.appendChild(addTodo);
  parentContainer.appendChild(todoList);

  todos.forEach(todo => {
    const todoItem = document.createElement('li');
    const checkbox = document.createElement('input');

    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.id = 'checkbox';
    checkbox.addEventListener('click', () => {
      if (checkbox.checked) {
        todoItem.classList.add('completed');
      } else {
        todoItem.classList.remove('completed');
      }
    })
    
    todoItem.textContent = todo.text;
    todoItem.className = 'todo-item';

    todoList.appendChild(todoItem);
    todoItem.appendChild(checkbox);
  });
}

export default displayTodos;
