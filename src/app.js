import './style.css';

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
  todoList.innerHTML = '';

  todos.forEach(todo => {
    const todoItem = document.createElement('li');
    todoItem.textContent = todo.text;
    todoList.appendChild(todoItem);
  });
}

const startApp = () => {
  displayTodos();
}

startApp();