import React from 'react';
import './css/Todo.css';

const Todo = ({ completed, text, deleteTodo, toggleTodo, id }) => {
    return (
        <li className='todo-list-item-root' data-completed={completed}>

            <div
                className="todo-list-item-click-target"
                onClick={toggleTodo}
            />

            <div className="todo-list-item-primary-content">
                <input
                    type="checkbox"
                    checked={completed}
                    id={`checkbox-${id}`}
                    title={`Mark item "${text}" as ${completed ? 'pending' : 'completed'}`}
                    onChange={toggleTodo}
                />
                
                <label
                    className="todo-list-item-label"
                    htmlFor={`checkbox-${id}`}
                    style={{ textDecoration: completed ? 'line-through' : 'none'}}
                >
                    { text }
                </label>
            </div>

            {/* <div style={{ textDecoration: completed ? 'line-through' : 'none'}}>
                {text}
            </div> */}

            {/* <button className='btn-delete flex-item' onClick={deleteTodo}>
                Delete
            </button> */}

            <button
                className="todo-list-item-actions-group todo-list-item-button"
                type="button"
                title="Delete"
                onClick={deleteTodo}
            >
                Delete
            </button>
        </li>
    );
};
  
export default Todo;