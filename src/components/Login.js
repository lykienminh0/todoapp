import React, { useState } from 'react';
import { connect } from 'react-redux'
import { toggleLogin } from '../actions/index.js'

const Login = ({dispatch}) => {
    // {username: , password: }
    const [ userInput, setUserInput ] = useState('');
    let authority = {
        'admin': '123',
        'mint': '123',
    }

    const handleChange = (event) => {
        setUserInput({
            ...userInput,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (authority[userInput.username] && userInput.password === authority[userInput.username]) dispatch(toggleLogin());
        else alert("The username or password you entered is incorrect");
        setUserInput(''); 
    }
    return (
        <div className='container'>
            <form className='persistent-header' onSubmit={handleSubmit}>
                <label> Username:
                    <input
                        name="username"
                        type="text"
                        value={userInput.username ? userInput.username : ''}
                        onChange={handleChange} />
                </label>
                
                <label> Password:
                    <input
                        name="password"
                        type="password"
                        value={userInput.password ? userInput.password : ''}
                        onChange={handleChange} />
                </label>
                <button type="submit" className='todo-list-item-button'> Login </button>
            </form>
        </div>
    );
};

export default connect()(Login);;