function TaskItem({ item, deleteTask, toggleTask }) {
    return (
      <li style={{ marginBottom: "10px", listStyle: "none" }}>
        <span 
          style={{ 
            textDecoration: item.completed ? "line-through" : "none",
            marginRight: "10px",
            color: item.completed ? "gray" : "black"
          }}
        >
          {item.title}
        </span>
  
        <button onClick={() => toggleTask(item.id)}>
          {item.completed ? "Undo" : "Done"}
        </button>
  
        <button onClick={() => deleteTask(item.id)} style={{ marginLeft: "5px" }}>
          Supprimer
        </button>
      </li>
    )
  }
  
  export default TaskItem