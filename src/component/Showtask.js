import React from 'react'
import del from './delete.png'
import edit from './edit.png'

export const Showtask = ({task,settask,element,setelement}  ) => {
  const handleedit=(id)=>{
    const select_task=task.find(task=>task.id===id)
    setelement(select_task)

  }

  const handledel=(id)=>{
    const update=task.filter(task=>task.id!==id);
    settask(update)
  }
  
  return (<>
  <div className='h-16'></div>
  <div className='max-w-5xl border m-auto  rounded-xl '>
    <div className='flex justify-between m-auto border-b p-3 max-w-3xl'>
      <div>
        <span className='text-xl m-5 font-bold'>Task</span>
        <span className=' text-lg font-bold rounded-full bg-slate-400 px-2'>{task.length}</span>
      </div>
      <div>
        <button onClick={()=>settask([])} className='text-bold border-4 rounded-full bg-slate-200'>Clear All</button>
      </div>
      
    </div>
    <div className='max-w-4xl m-auto h-72 p-3'>
      <ul className='flex flex-wrap justify-evenly '>
        { 
          task.map((todo) =>(
           <li key={todo.id} className=' flex justify-between border-l-4 border-amber-500	p-2 border rounded-2xl m-3 w-64'>
           <p className='grid'>
             <span className='font-bold text-lg'>{todo.name}</span>
             <span>{todo.time}</span>
           </p>
           <p className='p-2'>
             <div onClick={()=>handledel(todo.id)}><img className='h-4 ' src={del} alt='del'/></div>
             <div onClick={()=>handleedit(todo.id)}><img className='h-4 mt-2' src={edit} alt='edit'/></div>
           </p>
         </li>
        ))
        }

        
      </ul>
    </div>
   
  </div>
  
  </>
    
  )
}
