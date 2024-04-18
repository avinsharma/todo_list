
import React from 'react';
const TodoItem =({ task, deleteTask, toggleCompleted }) =>{
const handleChange  = () => {
 toggleCompleted(task.id);
 }

 
 return (
 <div className="bg-gray-200 py-4 px-8 m-4  rounded overflow-hidden shadow-lg min-w-full flex justify-between ">  
 <input 
 type="checkbox"
 checked={task.completed}
 onChange={handleChange}
 />
<p className='text-gray-700 text-base'>{task.text}</p>
<button onClick={() => deleteTask(task.id)}>
 X
 </button>
 </div>
 );
}
export default TodoItem;
