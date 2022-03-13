import React from 'react';
import Todo from './Todo.js';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
    <ul className='todo-list-root' style={{ padding: 0 }}>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          toggleTodo={() => toggleTodo(todo.id)}
          deleteTodo={() => deleteTodo(todo.id)}
        />
      )}
    </ul>
  )

export default TodoList;