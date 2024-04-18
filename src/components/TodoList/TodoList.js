
import React, { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import './TodoList.css';



const TodoList = () => {
    const [tasks, setTasks] = useState([
    {
    id: 1,
    text: 'Doctor Appointment',
    completed: true
    },
    {
    id: 2,
    text: 'Meeting at School',
    completed: false
    }
    ]);
    
    const [text, setText] = useState('');
   const addTask = (text) => {
    const newTask = {
    id: Date.now(),
    text,
    completed: false
    };
    setTasks([...tasks, newTask]);
    setText('');
    }
   function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
    }

    const  handleKeyPress = (event) => {
     
        if (event.key === 'Enter') {
            // Handle Enter key press here
           addTask(event.target.value)
            // For example, you can submit a form or perform an action here
        }

    }
   function toggleCompleted(id) {
    setTasks(tasks.map(task => {
    if (task.id === id) {
    return {...task, completed: !task.completed};
    } else {
    return task;
    } 
    }));
    }
   return (
    <div className="grid grid-cols-2 justify-items-center p-4">
        <div className="flex justify-between p-6">
            <div>
                <div className="relative ">
                    <label className="label">Create Todo Item</label>
                    <input
                    onKeyUp={handleKeyPress}
                    className="border rounded w-72 p-2"
                    value={text}
                    onChange={e => setText(e.target.value)} 
                />  
                </div>
            </div>
            <div>
            <button className="bg-gray-200 p-2 px-6 ml-2"  onClick={() => addTask(text)}>Add</button>
            </div>
            
        </div>
        <div  className="grid grid-cols-1 justify-items-center" >
            {tasks.map(task => (
            <TodoItem
            key={task.id} 
            task={task}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted} 
            />
            ))}
        </div>
        
        </div>
    );
   }
   export default TodoList;
   