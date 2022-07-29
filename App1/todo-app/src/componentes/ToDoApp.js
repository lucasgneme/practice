import { useState } from 'react'
import ToDo from './ToDo';

import styles from './ToDoApp.module.css';

const ToDoApp = () => {
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState('');
    
    function handleSubmit(e) {
        e.preventDefault()
        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        }
        const temp = [...todos]
        temp.push(newTodo)
        setTodos(temp)
        setTitle('')
    }
    function handleChange(e) {
        const value = e.target.value
        setTitle(value)
    }
    function handleUpdate(id, value) {
        const temp = [...todos]
        const item = temp.find(item => item.id === id)
        item.title = value
        setTodos(temp)
    }
    function handleDelete(id) {
        const temp = todos.filter(item => item.id !== id)
        setTodos(temp)
    }

  return (
    <div className={`${styles.formContainer}`} >
        <h1>Todo List</h1>
        <form className={`${styles.todoForm}`} onSubmit={handleSubmit}>
            <input onChange={handleChange} className={`${styles.todoInput}`} value={title} />
            <input onClick={handleSubmit} type='submit' value='crear todo' className={`${styles.todoBtn}`} />
        </form>
        <div className='todoContainer'>
            {todos.map(item => (
                <ToDo item={item} onUpdate={handleUpdate} onDelete={handleDelete} />
            ))}
        </div>
    </div>
  )
}

export default ToDoApp