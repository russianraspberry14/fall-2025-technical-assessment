
export default function ResultsPage() {
    return (
        <div className="bg-white w-screen flex flex-col h-screen items-center">
            <div className="flex flex-row mt-[50px]">
                <div>
                    <button className="text-[#6E6E6E] text-center bg-white border-none text-[20px] mr-[60px]"> <img src="/arrow2.svg" className="inline-block mr-[20px]"/>  Return</button>
                </div>
                <div className = "flex mr-[220px]">
                    <input type="text" placeholder="Enter Professor Name..." className="h-[52px] border text-black bg-white border-black-1000 rounded-l-lg w-[750px] p-[12px] pl-[40px]" />
                    <button className="bg-[#39302B] text-white rounded-l-none rounded-r-lg w-[72px] h-[52px]">
                        <img src="/search.png" alt="Search" className="w-[30px] h-[30px] inline-block" />
                    </button>
                </div>
            </div>
            <h1 className="font-inter self-start text-[22.5px] font-bold text-[#39302B] mt-[40px] ml-[400px]"> Search Results</h1>
            <p className="font-inter text-[#AAAAAA] text-[18px] fixed bottom-4 text-center left-0 right-0" >All data is gathered from the <span className="text-[#B95F5F] underline">PlanetTerp</span> API</p>

        </div>
    )
}