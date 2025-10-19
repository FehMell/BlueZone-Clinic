import React from "react";
import DrThiago from "../images/thiago1.webp";

function Sobre() {
    return (
        <div className="bg-gradient-to-r from-gray-900 from-[70%] to-gray-700 text-center py-20 px-40">
            <div className="mb-10">
                <h1 className="text-white font-semibold text-lg">Dr. Thiago Garcia</h1>
                <h2 className="text-gray-300 font-semibold">MÉDICO – CRM SP 217222</h2>
            </div>

            <div className="flex items-center gap-10">
               
                <div className="h-[700px] shadow-md pl-40">
                    <img
                        src={DrThiago}
                        alt="Dr. Thiago"
                        className="h-full w-auto object-cover rounded-b-full shadow"
                    />
                </div>

              
                <div className="text-white max-w-md pl-30">
                    <p>
                        teste teste teste
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Sobre;