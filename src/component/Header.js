import React from 'react'
import logo from './logo.png'


export const Header = () => {
  return (
    <div className='border-b-4 border-neutral-100 max-w-7xl flex m-auto '>
        <div className='flex '>
            <img className='h-12' src={logo} alt='logo'/>
            <span className='m-3 text-2xl font-bold'>TaskBuddy</span>
            
        </div>
    </div>
  )
}
