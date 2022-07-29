import React, { useState } from 'react'
import ToDoCard from './ToDoCard'
import ToDoEdit from './ToDoEdit'

import styles from './ToDo.module.css'

const ToDo = ({ item, onUpdate, onDelete }) => {
    const [isEdit, setIsEdit] = useState(false)
    
    const handleEdit = () => {
        setIsEdit(!isEdit)
    }

    return (
    <>
        <div className={`${styles.todo}`}>
            {isEdit ? 
                <ToDoEdit item={ item } onEdit={ handleEdit } onUpdate={ onUpdate }/> 
                : 
                <ToDoCard item={ item } onEdit={ handleEdit } onDelete={ onDelete }/>
            }
        </div>
    </>
  )
}

export default ToDo