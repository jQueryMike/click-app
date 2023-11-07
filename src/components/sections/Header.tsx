import React from "react";
import Image from "next/image";


const Header: React.FC  = () => {

    return (
        <header>
            <div className="flex">
                <div className="px-6 my-6">
                    <a href="/">
                        <Image src="/click_app.png" alt="logo" className="w-[220px]" width={1784} height={364} priority />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
