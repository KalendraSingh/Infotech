import React from "react";
import Typed from 'react-typed';
import './Herosection.css';

function Herosection(){
    return(

        <>

        <div className=" bgContainer w-full">
            <div className="max-w-[1250px] mx-auto text-center flex flex-col justify-center  h-[90.5vh] gap-[15px]">
               <div className=" text-4xl md:text-5xl text-bold text-white">
                    <h1>Learn With Us</h1>
                </div>
                <div  className="text-3xl text-bold text-white">
                    <h1>Grow With Us</h1>
                </div>
                <div  className=" text-1xl text-bold md:text-2xl text-bold text-white">
                    <p>Learn: 
                    <Typed
                    className="pl-2"
                strings={[
                    'Web Development',
                    'React Js',
                    'Pytho Development']}
                    typeSpeed={60}
                    backSpeed={50}
                    loop = {true}
                    
                    />
                    
               

                    </p>
                   

                </div>
                
               
            </div>
          
        </div>

        </>
    )

}
export default Herosection;


