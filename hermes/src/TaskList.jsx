import TaskItem from "./TaskItem"

function TaskList({ todo, deleteTask, toggleTask }) {
  if (todo.length === 0) {
    return <p>Aucune tâche disponible</p>
  }

  return (
    <ul>
      {todo.map((item) => (
        <TaskItem 
          key={item.id} 
          item={item} 
          deleteTask={deleteTask} 
          toggleTask={toggleTask} 
        />
      ))}
    </ul>
  )
}

export default TaskList