
import React from 'react';
import TodoList from './components/TodoList/TodoList';
// import css
import './App.css';
function App() {
 return (
 <div className="App">
    <h1 className='flex justify-center py-10 font-size'>My Todo List</h1>
 <TodoList />
 </div>
 ); 
}
export default App;
