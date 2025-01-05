'use client';

import { useState } from "react";
import { themeContext } from "./components/themeContext";
import Header from "./components/header";
import Tasks from "./components/tasks";
import Image from "next/image";
import light from "@/public/light.png"
import dark from "@/public/dark.png"

export default function Home() {
    const [theme, setTheme] = useState("light");

    const changeTheme = () => {
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
      document.documentElement.setAttribute("data-theme", theme === "light" ? "dark" : "light");
    }

    return (
      <div className={theme}>
        <themeContext.Provider value={theme}>
          <main>
              <Header />
              <Tasks />
              <div className="flex flex-col items-center">
                <button onClick={changeTheme}>
                  <Image 
                    src={theme === "dark" ? light : dark} 
                    alt={"light and dark mode toggle"}
                    className="h-10 w-10 mt-3"
                  />
                </button>
              </div>
            </main>
        </themeContext.Provider>
      </div>
    );
}
