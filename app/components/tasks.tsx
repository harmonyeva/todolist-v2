"use client";

import { useState } from "react";
import Image from "next/image";
import bin from "@/public/bin.png";

const Tasks = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState<string[]>([]);

    const handleAddTask = () => {
        if (task.trim() !== "") {
            setTasks([...tasks, task]);
            setTask("");
        }
    }

    const handleDeleteTask = (index: number) => {
        setTasks(tasks.filter((_, i) => i !== index));
    }

    return (
        <div>
            <input 
                type="text" 
                placeholder="add a new task" 
                value={task} 
                onChange={(e) => setTask(e.target.value)} 
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleAddTask();
                    }
                }}
            />
            <button onClick={handleAddTask}>add</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <Image 
                            src={bin} 
                            alt="delete" 
                            width={20} 
                            height={20} 
                            onClick={() => handleDeleteTask(index)}
                            className="inline-block"
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Tasks;