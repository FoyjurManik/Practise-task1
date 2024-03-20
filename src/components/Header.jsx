import React from 'react';

const Header = () => {
    return (
        <nav className="bg-gray-800 p-4 flex justify-between items-center">
      {/* Left side */}
      <div className="flex items-center">
        <div className="mr-4">
          {/* Three bar menu icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
        <div className="mr-4">
          {/* Home bar */}
          <a href="/" className="text-white">Home</a>
          {/* Submenu for Home */}
          <div className="pl-4">
            <a href="/home" className="text-gray-300">Banner</a>
            <a href="/banner" className="text-gray-300">Service</a>
          </div>
        </div>
        <div className="mr-4">
          {/* Service bar */}
          <a href="/service" className="text-white">Service</a>
        </div>
        <div className="mr-4">
          {/* About bar */}
          <a href="/about" className="text-white">About</a>
        </div>
        <div>
          {/* FAQ bar */}
          <a href="/faq" className="text-white">FAQ</a>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center">
        {/* Profile pic */}
        <div className="mr-4">
          <img src="profile-pic.jpg" alt="Profile" className="w-10 h-10 rounded-full" />
        </div>
        {/* React icon */}
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
      </div>
    </nav>
    );
};

export default Header;