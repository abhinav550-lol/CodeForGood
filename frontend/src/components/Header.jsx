import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from '../assets/logo.png';

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <header className="h-24 flex justify-between items-center bg-white shadow-md fixed left-0 right-0 z-50 top-0 px-6">
        <div>
            <Link to="/" className="text-2xl font-bold text-[#48A6A7]">
              <img src={logo} alt="Logo" className="h-10" />
            </Link>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
            <nav className="flex justify-center items-center gap-8 text-[1.1rem]">
                <Link to="/" className="hover:text-[#48A6A7]">Home</Link>
                <Link to="/about" className="hover:text-[#48A6A7]">About</Link>
                <Link to="/contact" className="hover:text-[#48A6A7]">Contact</Link>
            </nav>
            <button className="hover:bg-[#006A71] bg-[#48A6A7] text-white rounded-lg px-4 py-2 text-sm">
                <Link to="/login">Login</Link>
            </button>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <i
              className="fi fi-br-menu-burger text-2xl text-[#48A6A7] cursor-pointer"
              onClick={toggleSidebar}
            ></i>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-md p-6 z-50 transform ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <button
          onClick={toggleSidebar}
          className="text-right w-full text-[#48A6A7] text-xl font-bold"
        >
          ×
        </button>
        <nav className="flex flex-col mt-8 gap-6 text-lg">
          <Link to="/" onClick={toggleSidebar}>Home</Link>
          <Link to="/about" onClick={toggleSidebar}>About</Link>
          <Link to="/impact" onClick={toggleSidebar}>Impact</Link>
          <Link to="/programs" onClick={toggleSidebar}>Programs</Link>
          <Link to="/blog" onClick={toggleSidebar}>Blog</Link>
          <Link to="/volunteer" onClick={toggleSidebar}>Volunteer</Link>
          <Link to="/donate" onClick={toggleSidebar}>Donate</Link>
        </nav>
      </aside>

      <div className="pt-24">
        <Outlet />
      </div>
    </>
  );
}

export default Header;
