import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const state = useSelector((state) => state.handleCart);
  return (
    <div>
      <nav className="bg-indigo-600 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center text-white">
          <NavLink className="text-3xl font-semibold" to="/">
            Food 🤤
          </NavLink>
          </div>
          <div className="flex items-center">
            <div className="ml-4">
            <NavLink to="/cart" className="bg-white rounded-md p-2">
            🛒 ({state.length})
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
}


