import React from 'react';
export default function LandingPage() {
    return (
        <div className="w-screen h-screen flex flex-col bg-white">
            <div className="bg-[url('/img.png')] bg-center bg-no-repeat bg-cover w-screen h-[40vh] w-screen">
                <h1 className="font-inter text-[54px] font-bold mt-[82.76px] ml-[142.01px]">Find My Professor</h1>
                <p className="text-[22.5px]  ml-[142.01px] mt-[40px] mb-[90px] mr-[950px]" >Want to know more about the professors here at UMD? This is the perfect place to learn a bit about the courses they teach and their grade distributions.</p>
            </div>

            <div className="flex flex-col gap-8 items-center">
                <h1 className="font-inter text-[36px] font-bold text-[black] mt-[60px] justify-center">Enter a Professor to start</h1>
                <div className = "flex">
                    <input type="text" placeholder="Enter Professor Name..." className="h-[52px] border text-black bg-white border-black-1000 rounded-l-lg w-[750px] p-[12px] pl-[40px]" />
                    <button className="bg-[#39302B] text-white rounded-l-none rounded-r-lg w-[72px] h-[52px]">
                        <img src="/search.png" alt="Search" className="w-[30px] h-[30px] inline-block " />
                    </button>
                </div>
                
                <h1 className="font-inter self-start ml-[420px] text-[22.5px] font-bold text-[#39302B] mt-[40px]"> Recently Searched</h1>
                <div className="flex flex-row gap-20">
                    <button className="bg-[#FBFBFB] border-[#C5C5C5] font-inter text-black text-[20px] pt-[15px] pb-[15px] pl-[20px] pr-[20px]">John Jane Doe  <img src='/arrow.png' className="ml-[15px] inline-block h-[12px]"/></button>
                    <button className="bg-[#FBFBFB] border-[#C5C5C5] font-inter text-black text-[20px] pt-[15px] pb-[15px] pl-[20px] pr-[20px]">Jane Middle Doe  <img src='/arrow.png' className="ml-[15px] inline-block h-[12px]"/></button>
                    <button className="bg-[#FBFBFB] border-[#C5C5C5] font-inter text-black text-[20px] pt-[15px] pb-[15px] pl-[20px] pr-[20px]">John John Jane  <img src='/arrow.png' className="ml-[15px] inline-block h-[12px]"/></button>
                </div>
            </div>

            <p className="font-inter text-[#AAAAAA] text-[18px] fixed bottom-4 text-center left-0 right-0" >All data is gathered from the <span className="text-[#B95F5F] underline">PlanetTerp</span> API</p>
        </div>
    )
}