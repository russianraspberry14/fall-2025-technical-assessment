import React, { useState} from 'react';
import {useNavigate} from 'react-router-dom';

export default function LandingPage() {
    const [professorName, setProfessorName] = useState('');
    const navigate = useNavigate();

     const handleSearch = () => {
        if (professorName.trim() !== '') {
         // Navigate to results page with professorName
        navigate(`/results?name=${encodeURIComponent(professorName)}`);
        }
    };
    return (
        <div className="w-screen h-screen flex flex-col bg-white">
            <div className="bg-[url('/img.png')] bg-center bg-no-repeat bg-cover w-screen h-[40vh] w-screen">
                <h1 className="font-inter font-bold sm:mt-[20px] sm:ml-[30.01px] sm:text-[40px]  md:mt-[20px] md:ml-[30.01px] md:text-[40px]  md:mt-[40px] md:ml-[50.01px] lg:text-[54px]  lg:mt-[82.76px] lg:ml-[142.01px]">Find My Professor</h1>
                <p className=" sm:text-[15.5px] sm:ml-[30.01px] sm:mt-[30px] sm:mb-[60px] sm:mr-[260px] md:text-[15.5px] md:ml-[30.01px] md:mt-[30px] md:mb-[90px] md:mr-[260px] lg:text-[22.5px] lg:ml-[142.01px] lg:mt-[40px] lg:mb-[90px] lg:mr-[750px]" >Want to know more about the professors here at UMD? This is the perfect place to learn a bit about the courses they teach and their grade distributions.</p>
            </div>

            <div className="flex flex-col gap-8 items-center">
                <h1 className="font-inter text-[36px] font-bold text-[black] mt-[60px] justify-center">Enter a Professor to start</h1>
                <div className = "flex">
                    <input type="text" placeholder="Enter Professor Name..." value={professorName} onChange={e => setProfessorName(e.target.value)} className="h-[52px] border text-black bg-white border-black-1000 rounded-l-lg sm:w-[350px] md:w-[500px] lg:w-[750px] p-[12px] pl-[40px]" />
                    <button onClick={handleSearch} className="bg-[#39302B] text-white rounded-l-none rounded-r-lg w-[72px] h-[52px]">
                        <img src="/search.png" alt="Search" className="w-[30px] h-[30px] inline-block " />
                    </button>
                </div>
                
                <h1 className="font-inter self-start sm:ml-[100px] md:ml-[200px] lg:ml-[420px] text-[22.5px] font-bold text-[#39302B] mt-[40px]"> Recently Searched</h1>
                <div className="flex flex-row sm:gap-5 md:gap-10 lg:gap-20">
                    <button className="bg-[#FBFBFB] border-[#C5C5C5] font-inter text-black text-[20px] sm:p-[4px] md:p-[7px] lg:pt-[15px] lg:pb-[15px] lg:pl-[20px] lg:pr-[20px]">John Jane Doe  <img src='/arrow.png' className="ml-[15px] inline-block h-[12px]"/></button>
                    <button className="bg-[#FBFBFB] border-[#C5C5C5] font-inter text-black text-[20px] sm:p-[4px] md:p-[7px] lg:pt-[15px] lg:pb-[15px] lg:pl-[20px] lg:pr-[20px]">Jane Middle Doe  <img src='/arrow.png' className="ml-[15px] inline-block h-[12px]"/></button>
                    <button className="bg-[#FBFBFB] border-[#C5C5C5] font-inter text-black text-[20px] sm:p-[4px] md:p-[7px] lg:pt-[15px] lg:pb-[15px] lg:pl-[20px] lg:pr-[20px]">John John Jane  <img src='/arrow.png' className="ml-[15px] inline-block h-[12px]"/></button>
                </div>
            </div>

            <p className="font-inter text-[#AAAAAA] text-[18px] fixed bottom-4 text-center left-0 right-0" >All data is gathered from the <span className="text-[#B95F5F] underline">PlanetTerp</span> API</p>
        </div>
    )
}