import { Link, Outlet } from "react-router-dom";

function Home() {
    return (
        <div className="bg-[#FFF8F8] min-h-screen">
            <div className="px-56">
                <h1 className="text-6xl font-bold text-center py-12">Rooted in Purpose, Growing Together.</h1>
            </div>
            <div className="flex justify-center items-center gap-16 px-56 py-12">
                <div className="flex flex-col gap-2">
                    <h1 className="text-5xl font-bold text-center">40+</h1>
                    <p>Total Villages Covered</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-5xl font-bold text-center">35</h1>
                    <p>Total VLE's</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-5xl font-bold text-center">50+</h1>
                    <p>Active Volunteers</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-5xl font-bold text-center">10+</h1>
                    <p>Total Funds Received</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-8 px-56 py-12">
                <div className="flex items-center justify-center gap-8 p-4">
                    <img
                        src="https://framerusercontent.com/images/eLUcwA4VCvqKvZruXjtLrAUeVI0.jpg?scale-down-to=1024"
                        alt=""
                        className="w-96 h-72 object-cover rounded-md"
                    />
                    <img
                        src="https://framerusercontent.com/images/uZjtg91t76rAtwPE2rrAVabQ6ms.jpg?scale-down-to=1024"
                        alt=""
                        className="w-96 h-72 object-cover rounded-md"
                    />
                </div>
                <div className="border-2 border-gray-200 rounded-lg p-6 text-center flex justify-center items-center hover:scale-105 transition-transform duration-300">
                    <p className="px-56 py-10 text-xl">Reaching Roots aims to create a societal impact through evidence-based and community-driven interventions at the intersection of agriculture, entrepreneurship, and climate change.</p>
                </div>

                <div className="border-2 border-gray-200 rounded-lg p-6 flex flex-col md:flex-row justify-center items-center gap-8 hover:scale-105 transition-transform duration-300">
                    <img
                        src="https://framerusercontent.com/images/0j6OAtDxVXfaCPeBunru5RTszg.png?scale-down-to=512"
                        alt="Mountain View"
                        className="w-full md:w-1/2 h-72 object-cover rounded-lg"
                    />
                    <div className="text-left md:w-1/2 px-4 md:px-0">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center md:text-left">Our Vision</h2>
                        <p className="text-xl text-gray-700 text-center md:text-left">
                            A thriving and resilient community where every individual learns, earns, and lives sustainably by 2030
                        </p>
                        <div className="mt-6 flex justify-center md:justify-start">
                        <button className="bg-black text-white px-6 py-2 text-sm uppercase font-semibold rounded hover:bg-gray-800 transition-all">
                            Contact
                        </button>
                        </div>
                    </div>
                </div>


            </div>
            <Outlet />
        </div>
    )
}

export default Home;