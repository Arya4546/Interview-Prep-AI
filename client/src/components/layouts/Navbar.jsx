import React from 'react'
import ProfileInfoCard from '../Cards/ProfileInfoCard'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-gray-200 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8 py-3">
        <Link to="/dashboard" className="group">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 transition-colors duration-200 group-hover:text-[#FF9324]">
            Interview Prep AI
          </h1>
        </Link>
        <ProfileInfoCard />
      </div>
    </header>
  );
};

export default Navbar;
