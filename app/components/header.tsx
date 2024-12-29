"use client";

import Image from "next/image";
import background from "@/public/background.png";

const Header = () => {
    return (
        <div>
            <Image 
            src={background} 
            alt="background" 
            />
            <h1 className="text-center text-5xl">୨୧ to do ୨୧</h1>
        </div>
    )
}

export default Header;