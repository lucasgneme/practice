import { useState } from 'react'

import styles from './ToDoEdit.module.css'

const ToDoEdit = ({ item, onEdit, onUpdate }) => {
    const {id, title} = item
    const [Value, setValue] = useState(title)

    function handleSubmit(e) {
        e.preventDefault()
    }
    function handleChange(e) {
        const value = e.target.value
        setValue(value)
    }
    function handleClick() {
        onUpdate(id, Value)
        onEdit()
    }
    return (
        <form 
            className={`${styles.todoFormEdit}`}
            onSubmit={handleSubmit}    
        >
            <input 
                type='text'
                value={Value}
                className={`${styles.todoInputEdit}`}
                onChange={handleChange}
            />
            <button
                className={`${styles.upgradeBtn}`}
                onClick={handleClick}
            >
                Actualizar
            </button>       
        </form>
    )
}

export default ToDoEdit