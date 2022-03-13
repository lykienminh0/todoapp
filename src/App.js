import React from 'react';
//css
import './App.css'
//containers
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import FilterToolbar from './components/FilterToolbar'
import Login from './components/Login'
import { connect } from 'react-redux'
import { toggleLogin } from './actions/index.js'

function App({isLogin, dispatch}) {
  return (
    <div className="App">
      <header>
        <h1>Todo list</h1>
      </header>

      {!isLogin &&
        <Login />
      }

      {isLogin &&
        <div className="container persistent-header">
          <AddTodo />
          <FilterToolbar />
          <VisibleTodoList />
          <button
            type="button"
            className="todo-list-item-button logout-btn"
            onClick={() => {
              alert('You have successfully logged out!');
              dispatch(toggleLogin());
            }}
          > 
            Logout 
          </button>
        </div>
      }   

      <br/> 
      <footer>Made by Lee Kim Min</footer>
    </div>
  );
}

export default connect(
  (state) => ({
    isLogin: state.login
  })
)(App)