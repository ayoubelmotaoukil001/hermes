import { useState, useEffect } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import Filter from "./Filter";

function App() {
    const [todo, setTodo] = useState(() => {
        const saved = localStorage.getItem("hermes_tasks");
        return saved ? JSON.parse(saved) : [];
    })

    const [filter, setFilter] = useState("All");

    useEffect(() => {
        localStorage.setItem("hermes_tasks", JSON.stringify(todo));
    }, [todo]);

    const addTask = (title) => {
        if (title.trim() === "") return;

        const newTask = {
            id: Date.now(),
            title: title,
            completed: false,
            created_at: new Date().toLocaleString()
        };

        setTodo([...todo, newTask]);
    };
    const deleteTask = (id) => {
        setTodo(todo.filter((task) => task.id !== id));
    };
    const toggleTask = (id) => {
        setTodo(todo.map((task) => 
          task.id === id ? { ...task, completed: !task.completed } : task
        ))
      }
    const filteredTodo = todo.filter((task) => {
        if (filter === "Completed") return task.completed
        if (filter === "Pending") return !task.completed
        return true
      })
      return (
        <div>
          <h1>Hermes App</h1>
          <TaskInput addTask={addTask} />
          
          <Filter setFilter={setFilter} />
          
          <TaskList 
            todo={filteredTodo} 
            deleteTask={deleteTask} 
            toggleTask={toggleTask} 
          />
        </div>
      )

}

export default App;