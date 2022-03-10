import React, { useState } from 'react';


const Login = (props) => {
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
        if (authority[userInput.username] && userInput.password === authority[userInput.username]) props.setIsLogin(true);
        else alert("The username or password you entered is incorrect");
        setUserInput(''); 
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label> Username:
                    <input
                        name="username"
                        type="text"
                        value={userInput.username ? userInput.username : ''}
                        onChange={handleChange} />
                </label>
                <br />
                <label> Password:
                    <input
                        name="password"
                        type="password"
                        value={userInput.password ? userInput.password : ''}
                        onChange={handleChange} />
                </label>
                <button type="submit"> Login </button>
            </form>
        </div>
    );
};

export default Login;