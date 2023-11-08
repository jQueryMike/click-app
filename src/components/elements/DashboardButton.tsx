import React from "react";
import Link from "next/link"

const DashboardButton = ({ text = "[Dashboard Button]", navigatePath = "/", disabled = false }: { text: string, navigatePath: string, disabled: boolean }): React.JSX.Element => {
    return (
        <Link href={navigatePath}
            className={`flex items-center align-middle justify-center
                        mr-4 mb-4 px-6
                        w-full py-6
                        sm:w-60 sm:h-60
                        cursor-pointer
                        border-2 border-orange-300 rounded-xl shadow-lg 
                        hover:shadow-sm
                        bg-orange-400  
                        text-gray-50  
                        hover:border-gray-100 
                        hover:text-white
                        text-center ${disabled && "opacity-50 cursor-not-allowed shadow-sm border-gray-100 text-white"}`}>
            <p className="text-center text-2xl sm:text-3xl font-bold">{text}</p>
        </Link>
    );
};

export default DashboardButton;