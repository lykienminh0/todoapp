import React, { useState } from 'react';
//components
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import TaskFilters from './components/TaskFilters';
import Login from './components/Login';

const FILTER_NAMES = {
  'all': 'View all', 
  'notDone': 'Not done', 
  'done': 'Done', 
};

const FILTER_KEYS = ['all', 'notDone', 'done']

function App() {
  
  // { id: , task: , complete: }
  const [ toDoList, setToDoList ] = useState('');
  const [ filter, setFilter ] = useState('all');
  const [ isLogin, setIsLogin ] = useState(false);

  // Filter list All | Not done | Done
  const filterList = FILTER_KEYS.map(name => (
    <TaskFilters
      key={name}
      name={name}
      isPressed={name === filter}
      displayName={FILTER_NAMES[name]}
      setFilter={setFilter}
    />
  ));

  function toggleTaskCompleted(id) {
    const updatedTasks = toDoList.map(task => {
      return task.id === id ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = toDoList.filter(task => id !== task.id);
    setToDoList(remainingTasks);
  }

  const addTask = (userInput) => {
    let copy = [...toDoList];
    // let id = toDoList.length > 1 : Math.max.apply(Math, toDoList.map(function(todo) { return todo.y; })) ? toDoList.length;
    let maxID = toDoList.length > 0 ? toDoList[0].id : 0;
    copy = [{ id:  maxID + 1, task: userInput, complete: false }, ...copy];
    setToDoList(copy);
  }

  return (
    <div className="App">
      <header>
        <h1>To Do List</h1>
      </header>
      
      { !isLogin && 
      <Login className='isNotLogin' setIsLogin={setIsLogin}/>
      }

      { isLogin && 
      <div className='isLogin'>
        <ToDoForm addTask={addTask}/> 
        {filterList} 
        <ToDoList todoList={toDoList} filter={filter} deleteTask={deleteTask} toggleTaskCompleted={toggleTaskCompleted}/>
        <br/> 
        <button
          type="button"
          className="btn logout-btn"
          onClick={() => {
            alert('You have successfully logged out!');
            setIsLogin(false);
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

export default App;