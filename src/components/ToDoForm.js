import React, { useState } from 'react';

const ToDoForm = (props) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (event) => {
        setUserInput(event.currentTarget.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //check if input is null or have many white space
        if (!userInput.trim()) return;
        props.addTask(userInput);
        setUserInput("");
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={userInput} type="text" onChange={handleChange} placeholder="What needs to be done?"/>
                <button>Add</button>
            </form>
        </div>
    );
};

export default ToDoForm;