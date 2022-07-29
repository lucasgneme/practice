import styles from './ToDoCard.module.css'

const ToDoCard = ({ item, onEdit, onDelete }) => {
    const {id, title} = item
    return (
        <div 
            key = {id} 
            className = {`${styles.todoCard}`}
            style =
            {
                {
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center'
                }
            } 
        >
            <h1>
                {title}
            </h1>
            <div
                className={styles.btnContainer}
            >
                <input 
                    type = 'button'
                    value = '✍' 
                    onClick = { () => onEdit() } 
                />
                <input 
                    type='checkbox'
                />
                <input 
                    type = 'button' 
                    value = '❌'
                    onClick = { () => onDelete(id) } 
                />
            </div>
        </div>    
    )
}

export default ToDoCard