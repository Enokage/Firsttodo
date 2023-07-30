import React,{useState, useEffect} from 'react';
import './App.css'; 
import Todos from './components/Todos';
import Form from './components/Form';
import Toggle from './components/Toggle';
import NavBar from './components/NavBar';
function App() {
  const [tasks,setTasks]=useState( ()=>{
    const localData=localStorage.getItem('tasks');
    return localData ? JSON.parse(localData):[];
  }
    /*[
    {
      id:1,
      title:'Shopping',
      text:'going shopping at the mall',
      day:'Monday'
    },
    {
      id:2,
      title:'Prayer',
      text:'going church',
      day:'Tuesday'
    },
    {
      id:3,
      title:'Exercise',
      text:'going complex for football',
      day:'Saturday'
    }
  ]*/)

  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks))
  })

  let Add=(task)=>{
    const id=Math.random()
    const newtask={id,...task}
    setTasks([newtask,...tasks])
  }

  let ondelete=(id)=>{
    setTasks(tasks.filter((task)=> task.id !== id))}

//For the open and Close (Toggling)
  let [show,setShow]=useState(true)
  
  const onAdd=()=>{
      setShow(!show)
    } 
    
    return <div>
      
    <button className='tt' onClick={onAdd}>{show? <NavBar/>: <button className='op'> Open</button> }</button>
    { show?<div className='App'>
    <h1>Welcome to the To-do App</h1>
    <Form todo={Add}/>
    <Todos tasks={tasks} deletetask={ondelete}/>
    <Toggle/>
    </div>:<h2>TO-DO APP close page</h2>
    }
  </div>
  
}

export default App;
