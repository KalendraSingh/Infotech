import React from "react";
import about from './about.jpg';
import './About.css';
import {AiOutlineArrowRight} from 'react-icons/ai';
import contact from './contact.png';

function About(){
    return(

    <>
        <div className="p-4">
            <div className="max-w-[1250px] mx-auto flex flex-row flex-wrap justify-center">

                <div className="max-w-[600px] mx-auto">
                    <img src = {about} alt="abour" className=" max-w-[400px] p-4"/>
                </div>
                <div className="max-w-[500px] p-4 md:pt-12">
                    <h1 className="pt-3 text-[#323f4b] text-bold text-[20px]"> Explore About US</h1>
                    <p className="text-justify pt-3 text-[#7b8794]">At InfoTech, we are a leading provider 
                        of cutting-edge solutions in the world of Information Technology.
                         Our dedicated team of experts is passionate about technology and
                        thrives on delivering exceptional services to our clients. With 
                          a diverse range of services, including Web Development, 
                        Python Development, and React Development.
                        
                    </p>
                    <button href="#" className="inline text-red-800 pt-3">Explore more<AiOutlineArrowRight className="inline"/> </button>
                </div>
            </div>

        </div>
        <div className="bg-[#8e43cc] p-4">
            <div className="max-w-[1250px] mx-auto flex flex-row flex-wrap justify-center">

                <div className="max-w-[600px] mx-auto">
                    <img src = {contact} alt="abour" className=" max-w-[400px] p-4"/>
                </div>
                <div className="max-w-[500px] p-4 md:pt-12 order-[-1]">
                    <h1 className="pt-3 text-white  text-bold text-[20px]">GET IN TOUCH</h1>
                    <div className="text-justify pt-3 text-white">
                        <form>
                            
                        
                            <div className="py-2">
                                <label>Name</label><br/>
                                <input type="text" className="w-full" placeholder="Name"></input>
                            </div>
                            <div className="py-2">
                                <label>Email</label><br/>
                                <input type="email" className="w-full" placeholder="Email"></input>
                            </div>
                            <div className="py-2">
                                <label>If Any Query</label><br/>
                                <textarea rows={5} cols={50} className="w-full" placeholder="Type here..."></textarea>
                            </div>
                        </form>
                    </div>
                    <button className="bg-[#290fa8] text-white rounded cursor-pointer p-3">Submit</button>
                </div>
            </div>

        </div>
    </>


    )
  
}

export default About;