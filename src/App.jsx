import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from "./components/Header";
import { AppWrapper } from './Appstyles';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';

const title = 'Task Tracker';

const theme = {
  colors: {
    black: '#000',
    grey: '#ccc',
    white: '#fff',
    green: '#43e893',
    blue: '#165edb;',
  }
};

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }
    getTasks();
  }, []);

  //Fetching tasks from json-server
  const fetchTasks = async (taskId) => {
      const res = await fetch('http://localhost:5000/tasks');
      const data = await res.json();

      return data
    }

    //Fetching one task from json-server
  const fetchTask = async (taskId) => {
      const res = await fetch(`http://localhost:5000/tasks/${ taskId }`);
      const data = await res.json();

      return data
    }  

  //Adding task
  const onAddTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    });
    const data = await res.json();
      setTasks([...tasks, data]);

    // const id = Math.floor(Math.random() * 10000 +1);
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
  }

  //Delete task
  const onDeleteTask = async (taskId) => {
    await fetch(`http://localhost:5000/tasks/${ taskId }`, {
      method: 'DELETE'
    });

    setTasks(tasks.filter(el => el.id !== taskId))
  };

  //Toggle reminder
  const onToggleReminder = async (taskId) => {
    const taskToToggle = await fetchTask(taskId);
    const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder};
    const res = await fetch(`http://localhost:5000/tasks/${ taskId }`, {
      method: 'PUT',
      headers: {
        'Content-type' : 'application/json'
      },
      body : JSON.stringify(updatedTask)
    });

    const data = await res.json();

    setTasks(tasks.map(task => task.id === taskId 
      ? {...task, reminder: data.reminder} 
      : task))
  }

  return (
    <BrowserRouter>
            <AppWrapper>
        <Header title={ title } 
                theme = { theme } 
                onAddShow={ () => setShowAddTask(!showAddTask) }
                showAdd={ showAddTask }        
        />
        <Route path='/' exact render={ (props) => (<>
        { showAddTask && <AddTask onAddTask={ onAddTask }/> }
        { tasks.length ? 
              (<Tasks tasks={ tasks } 
                onDeleteTask={ onDeleteTask } 
                onToggleReminder={ onToggleReminder }
                />) 
              : 'No tasks' 
        }
        </>) }/>
        <Route path='/about' exact component={ About } />
        <Footer />
      </AppWrapper>    
    </BrowserRouter>
  );
}

export default App;
