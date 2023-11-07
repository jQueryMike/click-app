import React from 'react';
import Image from "next/image";

const Footer: React.FC = () => {

    const year = new Date().getFullYear();
    return (
        <footer className="fixed bottom-0 w-full h-16 bg-gray-100 flex justify-center items-center px-8">
            <div className="flex justify-between items-center h-full text-xs w-full">
                <div className="mr-4">
                    <Image src="/click_app.png" alt="logo" className="w-[120px]" width={1784} height={364} priority />
                </div>
                <div className="ml-auto mr-4">
                    &copy; {year} Click Vehicles
                </div>
            </div>
        </footer>
    );
};

export default Footer;
