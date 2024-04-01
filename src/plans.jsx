import React from "react";
import {CgWebsite} from 'react-icons/cg';
import {FaPython,FaReact} from 'react-icons/fa';


function Plans(){
        return(


            <>
            <div className="bg-[#112aa8] p-5">
                <h1 className="text-center text-white text-bold text-4xl p-4">SELECT OUR PLANS</h1>
                <div className="max-w-[1250px] mx-auto flex flex-row justify-center flex-wrap md:gap-5">
                    <div className="p-4 bg-white h-[450px] min-w-[350px] m-2 duration-300 hover:scale-75 cursor-pointer">
                        <div className="max-w-[80px]  mx-auto p-5">
                            <CgWebsite className="text-[#112aa8]  text-5xl animate-bounce"/>
                            
                        </div>
                        <div className="text-center text-bold text-4xl my-2">
                            <p className="my-2">Web Developmet</p>
                            <h1>$499.0</h1>
                        </div>
                        
                        
                        <ul className="text-center text-3xl py-3">
                            <li>HTLM5 CSS3</li>
                            <li>JavaScript</li>
                        </ul>
                        <div className="pt-[100px] relative">
                             <button className="bg-[#112aa8] w-full h-[40px] text-white rounded">SELECT PLAN</button>
                        </div>
                        
                    </div>
                    <div className="p-4 bg-white h-[450px] min-w-[350px] m-2 duration-300 hover:scale-75 cursor-pointer">
                        <div className="max-w-[80px]  mx-auto p-5">
                            <FaPython className="text-[#112aa8]  text-5xl animate-bounce"/>
                            
                        </div>
                        <div className="text-center text-bold text-4xl my-2">
                            <p className="my-2">Python Course</p>
                            <h1>$499.0</h1>
                        </div>
                        
                        
                        <ul className="text-center text-3xl py-3">
                            <li>Variables</li>
                            <li>Operators</li>
                        </ul>
                        <div className="pt-[100px] relative">
                             <button className="bg-[#112aa8] w-full h-[40px] text-white rounded">SELECT PLAN</button>
                        </div>
                        
                    </div>
                    <div className="p-4 bg-white h-[450px] min-w-[350px] m-2 duration-300 hover:scale-75 cursor-pointer">
                        <div className="max-w-[80px]  mx-auto p-5">
                            <FaReact className="text-[#112aa8]  text-5xl animate-bounce"/>
                            
                        </div>
                        <div className="text-center text-bold text-4xl my-2">
                            <p className="my-2">React Developmet</p>
                            <h1>$499.0</h1>
                        </div>
                        
                        
                        <ul className="text-center text-3xl py-3">
                            <li>React DOM</li>
                            <li>React Props</li>
                        </ul>
                        <div className="pt-[100px] relative">
                             <button className="bg-[#112aa8] w-full h-[40px] text-white rounded">SELECT PLAN</button>
                        </div>
                        
                    </div>
                </div>
            </div>
            </>
        )
}
export default Plans;