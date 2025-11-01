import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {

  return (
    <header className="bg-white shadow fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 relative">
        
        <nav className="hidden md:flex space-x-6 absolute left-6">
          <Link to="/" className="hover:text-gray-600">Home</Link>
          <Link to="/about" className="hover:text-gray-600">About</Link>
        </nav>

        {/* Center Logo */}
        <h1 className="text-2xl font-bold mx-auto">
          <Link to="/">Company Name/Logo</Link>
        </h1>
      </div>
    </header>
  );
}
