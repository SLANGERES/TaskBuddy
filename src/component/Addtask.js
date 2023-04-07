import React from 'react';


export const Addtask = ({task,settask,element,setelement}) => {
  const handlesubmit=(e)=>{
    e.preventDefault();
    if(element.id){
      const date=new Date();
      const updatetask=task.map((todo) =>(
        todo.id===element.id ? {id:todo.id,name:element.name, time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}` }:todo
      ));
      settask(updatetask);
      setelement({id:'', name:''});
      
      

    }
    else{
      const date=new Date();
      const newTask={
        id:date.getTime(),
        name:e.target.task.value,
        time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
      }
      settask([...task,newTask]);
      setelement({id:'', name:''});
    }
      
       
    
   


  }
  return (
    <>
    <div className='h-20'></div>
    <div className='border p-6 border-sky-300 max-w-2xl m-auto rounded-full h-24'>
      <form onSubmit={handlesubmit} className='flex justify-center'>
        <input
          className='border-2 border-sky-300 rounded-full px-4 py-2 focus:outline-none'
          type='text'placeholder='ADD TASK' name='task' autoComplete='off' value={element.name} onChange={e=>setelement({...element,name:e.target.value})}
        />
        <button type='submit' className='bg-sky-500 text-white font-bold rounded-full ml-2 px-4 py-2'>
          {element.id?"Update":"ADD"}
        </button>
      </form>
    </div>
    </>
  );
};