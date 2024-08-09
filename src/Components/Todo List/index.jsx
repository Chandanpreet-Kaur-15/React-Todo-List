import React from 'react'
import todo_icon from '../assets/todo_icon.png'

function TodoList() {
  return (
    <>
      <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>

        {/* Title */}
        <div className='flex items-center mt-7 gap-2'>
          <img className='w-8' src={todo_icon} alt='Title' />
          <h1 className='text-3xl font-semibold'>Todo List</h1>
        </div>

        {/* Todo Input */}

        <div className=''>
          <input type='text' placeholder='Add Your Task Here' />
          <button>Add+</button>
        </div>

      </div>
    </>
  )
}

export default TodoList