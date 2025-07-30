// app/components/Navbar.jsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Search from './Search';

const Navbar = () => {
  const [searching, setSearching] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when searching
  useEffect(() => {
    if (searching) {
      setIsMenuOpen(false);
    }
  }, [searching]);

  return (
    <>
      {searching && <Search onClose={() => setSearching(false)} />}
      
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2 ' : 'bg-transparent py-2'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
         
                <span className={`ml-3 font-bold text-xl ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}>Job101</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              <div className="hidden md:flex items-center space-x-1">
                <NavLink href="/" text="Home" isScrolled={isScrolled} />
                <NavLink href="/post-project" text="Post a Project" isScrolled={isScrolled} />
                <NavLink href="/enterprise" text="Enterprise" isScrolled={isScrolled} />
                <NavLink href="/freelancers" text="Freelancers" isScrolled={isScrolled} />
                <NavLink href="/pricing" text="Pricing" isScrolled={isScrolled} />
              </div>
              
              <div className="ml-4 flex items-center space-x-3">
                <button 
                  onClick={() => setSearching(true)}
                  className={`p-2 rounded-full ${
                    isScrolled 
                      ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' 
                      : 'bg-white/20 hover:bg-white/30 text-white'
                  }`}
                  aria-label="Search"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </button>
                
                <Link 
                  href="/login" 
                  className={`px-4 py-2 rounded-md font-medium transition-colors ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100' 
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  Login
                </Link>
                
                <Link 
                  href="/signup" 
                  className={`px-4 py-2 rounded-md font-medium transition-colors ${
                    isScrolled 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white ' 
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 '
                  }`}
                >
                  Sign Up
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setSearching(true)}
                className={`p-2 mr-2 rounded-full ${
                  isScrolled 
                    ? 'bg-gray-100 text-gray-700' 
                    : 'bg-white/20 text-white'
                }`}
                aria-label="Search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </button>
              
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-md ${
                  isScrolled 
                    ? 'text-gray-700 hover:bg-gray-100' 
                    : 'text-white hover:bg-white/20'
                }`}
                aria-label="Menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden fixed inset-0 bg-black/60  z-40 transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          <div 
            className={`absolute top-0 right-0 h-full w-4/5 max-w-sm bg-white transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full">
              <div className="p-5 border-b">
                <div className="flex items-center">
            
                  <span className="ml-3 font-bold text-xl text-gray-900">Job101</span>
                </div>
              </div>
              
              <div className="flex-1 overflow-y-auto py-4 px-6">
                <div className="space-y-3">
                  <MobileNavLink href="/" text="Home" />
                  <MobileNavLink href="/post-project" text="Post a Project" />
                  <MobileNavLink href="/enterprise" text="Enterprise" />
                  <MobileNavLink href="/freelancers" text="Freelancers" />
                  <MobileNavLink href="/pricing" text="Pricing" />
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Link 
                    href="/login" 
                    className="block w-full text-center py-3 px-4 rounded-lg bg-gray-100 text-gray-900 font-medium hover:bg-gray-200 transition-colors"
                  >
                    Login
                  </Link>
                  
                  <Link 
                    href="/signup" 
                    className="block w-full text-center py-3 px-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:bg-blue-700 transition-colors mt-3"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
              
              <div className="p-4 border-t">
                <p className="text-sm text-gray-500 text-center">© 2023 Job101. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

// Reusable NavLink component for desktop
const NavLink = ({ href, text, isScrolled } : any) => (
  <Link 
    href={href} 
    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isScrolled 
        ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100' 
        : 'text-white hover:bg-white/20'
    }`}
  >
    {text}
  </Link>
);

// Reusable NavLink component for mobile
const MobileNavLink = ({ href, text } :any) => (
  <Link 
    href={href} 
    className="block py-3 px-4 rounded-lg text-gray-900 font-medium hover:bg-gray-100 transition-colors"
  >
    {text}
  </Link>
);

export default Navbar;