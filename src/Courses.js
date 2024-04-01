import React from "react";
import web from './web.jpg';
import python from './python.jpg';
import react from './react.jpg';
import {AiOutlineArrowRight} from 'react-icons/ai';

function Courses(){
    return(
        <>
            <div className="bg-[#2d3a8c] py-[15px]">
            <h1 className="text-center text-bold text-2xl md:text-4xl text-white">COURSES WE OFFERS</h1>
                <div className=" max-w-[1250px] py-[15px] mx-auto flex flex-row flex-wrap justify-center gap-5 md:justify-center md:gap-12">
                    <div className="max-w-[350px] border flex flex-col justify-center p-4 bg-white ">
                        <div className="max-w-[250px] mx-auto">
                          <img src= {web} alt ="in web" className="w-[250px] rounded-[10PX]"/>
                        </div>
                         
                         <h1 className="text-[#323f4b] text-bold text-[20px] pb-2">Web Development</h1>
                         <p className="text-justify text-[#7b8794] pb-2 ">
                         Web development refers to the creating, building, and maintaining
                          of websites. It includes aspects such as web design, 
                          web publishing, web programming
                         </p>
                         <a href="#" className="inline text-red-800">Read more<AiOutlineArrowRight className="inline text-red-800"/></a>
                    </div>
                    <div className="max-w-[350px] border flex flex-col justify-center p-4 bg-white ">
                        <div className="max-w-[250px] mx-auto">
                          <img src= {python} alt ="in web" className="w-[250px] rounded-[10PX]"/>
                        </div>
                         
                         <h1 className="text-[#323f4b] text-bold text-[20px] pb-2">Python Development</h1>
                         <p className="text-justify text-[#7b8794] pb-2 ">
                         Web development refers to the creating, building, and maintaining
                          of websites. It includes aspects such as web design, 
                          web publishing, web programming
                         </p>
                         <a href="#" className="inline text-red-800">Read more<AiOutlineArrowRight className="inline text-red-800"/></a>
                    </div>
                    <div className="max-w-[350px] border flex flex-col justify-center p-4 bg-white">
                        <div className="max-w-[250px] mx-auto">
                          <img src= {react} alt ="in web" className="w-[250px] rounded-[10PX]"/>
                        </div>
                         
                         <h1 className="text-[#323f4b] text-bold text-[20px] pb-2">React Development</h1>
                         <p className="text-justify text-[#7b8794] pb-2 ">
                         Web development refers to the creating, building, and maintaining
                          of websites. It includes aspects such as web design, 
                          web publishing, web programming
                         </p>
                         <a href="#" className="inline text-red-800">Read more<AiOutlineArrowRight className="inline text-red-800"/></a>
                    </div>
                    
                    
                </div>
            </div>
        </>
    )
}
export default Courses;