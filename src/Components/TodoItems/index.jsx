import React from 'react'
import tick from '../../assets/tick.png'
import not_tick from '../../assets/not_tick.png'
import delete_icon from '../../assets/delete.png'

function TodoItems({text, id, isComplete, deleteTodo, toggle}) {
    return (
        <>
            {/* Todo items */}

            <div onClick={()=>toggle(id)} className='flex items-center my-3 gap-2'>
                <div className='flex flex-1 items-center cursor-pointer'>
                    <img src={isComplete ? tick : not_tick} alt='Status'className='w-7' />
                    <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through" : ""}`}>{text}</p>
                </div>

                <img src={delete_icon} alt='Delete' onClick={()=>deleteTodo(id)} className='w-3.5' />

            </div>
        </>
    )
}

export default TodoItems