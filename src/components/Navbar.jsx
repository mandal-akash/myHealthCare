import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex tetx-xl border p-5 justify-between shadow-md bg-white">
      <div className="navLeft">
        <Link to="/"><h1 className="text-2xl font-semibold text-rose-700 hover:cursor-pointer">
          my<span className="text-neutral-600">HealthCare</span>
        </h1></Link>
      </div>
      <div className="navRight list-none flex space-x-24 text-xl mr-24 font-semibold text-neutral-600 hover:cursor-pointer">
        <li>About</li>
       <Link to="/services"><li>Services</li></Link> 
      </div>
    </nav>
  );
};

export default Navbar;
