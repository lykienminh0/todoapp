import React from 'react';
import './ToDo.css';

const ToDo = (props) => {
    return (
        <div className='todo-item flex-container'>
            <button className='btn-completed flex-item' onClick={() => props.handleComplete(props.todo.id)}>
                {props.todo.complete ? 'Not done' : 'Done'}
            </button>
            <div className={props.todo.complete ? 'todo-value flex-item todo-strike' : 'todo-value flex-item'} value={props.todo.id}>
                {props.todo.task}
            </div>
            <button className='btn-delete flex-item' onClick={() => props.handleDelete(props.todo.id)}>
                Delete
            </button>
        </div>
    );
};


export default ToDo;