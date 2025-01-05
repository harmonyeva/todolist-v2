"use client";

import { themeContext } from "./themeContext";
import { useContext} from "react";  
import Image from "next/image";
import background from "@/public/background.png";
import wbackground from "@/public/wbackground.png"; 

const Header = () => {

    const theme = useContext(themeContext);

    return (
        <div>
            <Image 
                src={theme === "light" ? background : wbackground} 
                alt="background" 
                className="object-cover h-28 mb-4"
            />
            <h1 className="text-center text-5xl">୨୧ to do ୨୧</h1>
        </div>
    );
};

export default Header;