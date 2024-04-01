import React from "react";
import {BsFacebook,BsInstagram,BsYoutube,BsTwitter} from 'react-icons/bs';


function Footer(){
    return(

        <>

        <div className="bg-[#223354] w-full p-5">
            <div className="max-w-[1250px] mx-auto flex flex-row justify-between">
                <div>
                    <h1 className="text-white text-2xl">InfoTech</h1>
                </div>
                <div className="flex gap-3 text-2xl">
                    <BsFacebook className="text-[#215bcf]"/>
                    <BsInstagram className="text-[#e82e44]"/>
                    <BsYoutube className="text-[#cf0b04]"/>
                    <BsTwitter className="text-[#179be8]"/>
                </div>
            </div>
            <div className="max-w-[1250px] mx-auto flex flex-row flex-wrap justify-between py-3 text-[#a9a9c2]">
                <div>
                    <h1 className="text-2xl">Courses</h1>
                    <ul>
                        <li>Web Wevelopment</li>
                        <li>Python Development</li>
                        <li>JavaScript</li>
                        <li>React Js</li>
                        <li>Node Js</li>
                    </ul>
                </div>
                <div>
                    < h1 className="text-2xl">Our Plans</h1>
                    <ul>
                        <li>Web Wevelopment</li>
                        <li>Python Development</li>
                        <li>JavaScript</li>
                        <li>React Js</li>
                        <li>Node Js</li>
                    </ul>
                </div>
                <div className="pt-2 md:p-0">
                    <h1 className="text-2xl">Contact</h1>
                    <ul>
                        <li>infoTech@gmail.com</li>
                        <li>+91 8904346578</li>
                        <li>+91 6789878909</li>
                        <li>Lucknow,226201</li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="w-full bg-[#5f5f70] p-2">
            <div>
                < p className="text-center text-[#e4e4f0]">Copyright©2023 Kalendra Singh</p>
            </div>
        </div>
        
        </>
    )
}
export default Footer;