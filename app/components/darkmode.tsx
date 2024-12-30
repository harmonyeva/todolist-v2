"use client";

import { useState, useEffect } from "react";

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

type Theme = "light" | "dark";

const DarkMode = () => {
    const [theme, setTheme] = useState<Theme>("light");

    const toggleTheme  = (e: ChangeEvent) => setTheme(e.target.checked ? 'dark' : 'light');
    
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <div className="container-switch">
            <span>Change Theme </span>
            <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
        </div>
    );
};

export default DarkMode;