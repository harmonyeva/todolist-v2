"use client";

import Image from "next/image";
import background from "@/public/background.png";

const Header = () => {
    return (
        <div >
            <Image 
            src={background} 
            alt="background" 
            className="object-cover h-28 mb-4"
            />
            <h1 className="text-center text-5xl">୨୧ to do ୨୧</h1>
        </div>
    )
}

export default Header;