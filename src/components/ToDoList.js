import React from 'react';
import ToDo from './ToDo';

const ToDoList = (props) => {
    if (props.todoList === '') return <div className='todo-list'> It seems empty in here</div>

    return (
        <div className='todo-list'>
            {/* Filter all tasks */}
            {props.filter === 'all' && 
            props.todoList.map((todo) => <ToDo key={todo.id} todo={todo} handleDelete={props.deleteTask} handleComplete={props.toggleTaskCompleted}/>)}

            {/* Filter done tasks */} 
            {props.filter === 'done' &&
            props.todoList
                .filter((todo) => todo.complete)
                .map((todo) => <ToDo key={todo.id} todo={todo} handleDelete={props.deleteTask} handleComplete={props.toggleTaskCompleted}/>)}

            {/* Filter not done tasks */}
            {props.filter === 'notDone' &&
            props.todoList
                .filter((todo) => !todo.complete)
                .map((todo) => <ToDo key={todo.id} todo={todo} handleDelete={props.deleteTask} handleComplete={props.toggleTaskCompleted}/>)}
            
        </div>
    );
};

export default ToDoList;