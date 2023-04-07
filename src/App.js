import './App.css';
import { Header } from './component/Header';
import { Addtask } from './component/Addtask';
import { Showtask } from './component/Showtask';
import { useEffect, useState } from 'react';

function App() {
  const[task,settask]=useState(JSON.parse(localStorage.getItem("task"))||[]);
  const[element,setelement]=useState({})
  useEffect(()=>{
    localStorage.setItem("task", JSON.stringify(task))
  },[task]);
  return (

    
    <div className="App">
      <Header />
      <Addtask 
      task={task} 
      settask={settask}
      element={element}
      setelement={setelement}
      />
      <Showtask 
      task={task}
      settask={settask}
      element={element}
      setelement={setelement}/>
    </div>
  );
}

export default App;
