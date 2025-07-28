import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <Link to="/" className="text-xl font-bold text-blue-600">
                    MKBar
                </Link>
                <ul className="flex space-x-6 text-gray-700 font-medium">
                    <li>
                        <NavLink to="/Nosotros" className={({ isActive }) => isActive ? "text-blue-600 underline" : "hover:text-blue-600"} > Nosotros </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Servicios" className={({ isActive }) => isActive ? "text-blue-600 underline" : "hover:text-blue-600"} > Servicios </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Cursos" className={({ isActive }) => isActive ? "text-blue-600 underline" : "hover:text-blue-600"} > Cursos </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contacto" className={({ isActive }) => isActive ? "text-blue-600 underline" : "hover:text-blue-600"} > Contacto </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;