import React from 'react'
import { useState } from 'react'
import { addTodo, removeTodo } from '../redux/action'
import { useDispatch, useSelector } from 'react-redux'

export const TodoList = () => {
    const [inputEvent, setInputEvent] = useState('')
    const dispatch = useDispatch()

    const selector = useSelector(state => state.todoReducer.list)
    console.log(selector)

    return (
        <div className='flex flex-col gap-4 bg-slate-200 p-5'>
            <div className='space-x-4'>
                <input type="text"
                    onChange={(e) => { setInputEvent(e.target.value) }}
                    placeholder='Enter Here...'
                    className='pl-4 p-3 border-2 border-black w-96'
                    value={inputEvent}
                />
                <button onClick={() => dispatch(addTodo(inputEvent), setInputEvent(''))} className='border-2 border-black pl-4 p-3 bg-blue-500 text-white rounded-lg '>ADD</button>

            </div>

            {selector.map((item) => {
                return (
                    <div key={item.id} className='flex justify-between items-center w-full'>
                        <p className='font-semibold'>{item.data} </p> <button onClick={() => dispatch(removeTodo(item.id))} className='border-2 border-black pl-4 p-3 bg-red-500 text-white rounded-lg'>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}
