import { useState } from "react";

function TaskInput({ addTask }) {
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(title);
        setTitle("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Ajouter une tâche..." 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
            />
            <button type="submit">Ajouter</button>
        </form>
    );
}

.0
export default TaskInput;