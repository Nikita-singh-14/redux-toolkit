import React, { useState } from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { removeTodo, updateTodo, deleteTodo } from '../features/todo/todoslice';
import { CiEdit } from "react-icons/ci";
import { MdDataSaverOff } from "react-icons/md";

const Todos = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const [editId, setEditId] = useState(null); 
    const [newText, setNewText] = useState("");

    const handleEdit = (todo) => {
        setEditId(todo.id);
        setNewText(todo.text); 
    }

    const handleSave = (id) => {
        dispatch(updateTodo({ id, text: newText }));
        setEditId(null); 
    }

  
    return (
        <>
            <div>Todos</div>
            <ul className='list-one flex flex-col items-center justify-center'>
                {todos.map((todo) => (
                    <li 
                    className='mt-4 w-2xl flex justify-between items-center bg-zinc-800 px-4 py-2 rounded'
                    key={todo.id}>

                        {editId === todo.id ? (
                            <input 
                                type="text"
                                value={newText}
                                onChange={(e) => setNewText(e.target.value)}
                                className=' text-white outline-none cursor-pointer w-full'
                            />
                        ) : (
                            <div className='text-white'>{todo.text}</div> 
                        )}

                       <div className='flex gap-5'>
                        {editId === todo.id ? (
                                <button 
                                    onClick={() => handleSave(todo.id)}
                                    className='text-white bg-gray-500 px-4 py-1 rounded hover:bg-gray-600'
                                >
                                    <MdDataSaverOff />
                                </button>
                            ) : (
                                <button 
                                    onClick={() => handleEdit(todo)}
                                    className='text-white bg-gray-500 px-4 py-1 rounded hover:bg-gray-600'
                                >
                                    <CiEdit />   
                                </button>
                            )}
                        <button 
                        onClick={() => dispatch(removeTodo(todo.id))}
                        className='text-white bg-red-500 border-0 by-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md'
                        >
                            X
                        </button>

                       </div>
                       
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Todos