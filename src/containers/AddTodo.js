import React from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../actions/index.js'
import './css/AddTodo.css'

const AddTodo = ({ dispatch }) => {

    let userInput

    const handleSubmit = (event) => {
        // event.preventDefault();
        //check if input is null or have many white space
        if (!userInput.value.trim()) return;
        dispatch(addTodo(userInput.value))
        userInput.value = ''
    }
    console.log(userInput)
    return (
        <div className="add-todo-box-root">
            <span className="add-todo-box-leading"> &gt; </span>

            {/* <form onSubmit={handleSubmit}>
                <input ref={node => userInput = node} placeholder="What needs to be done?"/>
                <button>Add</button>
            </form> */}

            <input
                type="text"
                placeholder="What's on your mind..."
                className="add-todo-box-input"
                ref={node => userInput = node}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        handleSubmit();
                    }
                }}
            />

            <div className="add-todo-button-root">
                <button
                    type="submit"
                    className="add-todo-button"
                    title="Add todo"
                    // disabled={(userInput === undefined || userInput.value.trim()).length === 0}
                    onClick={handleSubmit}
                >
                    +
                </button>
            </div>

        </div>
    );
};

export default connect()(AddTodo);