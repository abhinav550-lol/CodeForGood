import { Link } from "react-router";

function Dashboard() {
    return (
        <Link to="/login/dashboard" className="bg-[#48A6A7] text-white rounded hover:bg-[#006A71] transition-colors duration-300">
        <div className="bg-[#FFF8F8] h-screen flex justify-center items-center">
        <div className="w-[30%] flex justify-center items-center flex-col gap-4 bg-gray-100 p-8 rounded-lg shadow-lg">
            <h1 className="text-black text-4xl">Dashboard</h1>
            <p className="text-gray-700 text-lg">Welcome to the Admin Dashboard</p>
        </div>
        </div>
        </Link>
    );
}

export default Dashboard;