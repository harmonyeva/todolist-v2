"use client";

import { useState, useContext } from "react";
import { themeContext } from "./themeContext"; 
import Image from "next/image";
import bin from "@/public/bin.png";
import wbin from "@/public/wbin.png"

const Tasks = () => {
    const theme = useContext(themeContext);

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
        <div className="flex flex-row flex-wrap justify-center items-center mt-4">
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
                className=" border-2 border-black rounded-md p-2 w-52"
            />
            <button 
                onClick={handleAddTask}
                className="text-4xl mb-2 ml-2"
            >+</button>
            <ul className="flex flex-col items-center mt-4 w-full">
                {tasks.map((task, index) => (
                    <li key={index} className="flex items-center border-2 border-black rounded-md p-2 w-60 mt-2">
                        <span>{task}</span>
                        <Image 
                            src={theme === "light" ? bin : wbin} 
                            alt="delete" 
                            width={20} 
                            height={20} 
                            onClick={() => handleDeleteTask(index)}
                            className="cursor-pointer ml-auto"
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Tasks;