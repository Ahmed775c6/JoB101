'use client';

import { redirect } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaLaptopCode, FaBuilding, FaCheck } from 'react-icons/fa';

interface OptionsProps {
  
  onClose: () => void;
}
const Options = ({onClose} :  OptionsProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(true);


  const handleSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (!selectedOption) return;
    

 redirect(`/register/${selectedOption}`);
  };

  return (
    <div className={`min-h-screen fixed w-full h-screen flex flex-col items-center justify-center p-4 transition-colors duration-300 z-10 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'}`}>
      <div className="w-full max-w-md">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-2">
            <div className={`w-10 h-10 rounded-lg ${darkMode ? 'bg-indigo-900' : 'bg-indigo-100'} flex items-center justify-center`}>
              <span className={`text-xl font-bold ${darkMode ? 'text-indigo-300' : 'text-indigo-700'}`}>J</span>
            </div>
            <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>JOB 101</h1>
      
          </div>
           <button 
              className=" text-white bg-black bg-opacity-50 rounded-full p-2 z-10 hover:bg-opacity-75"
     onClick={onClose} 
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>    
      
        </div>
        
        <div className={`rounded-2xl shadow-xl p-6 transition-all duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="text-center mb-8">
            <h1 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Join as a client or freelancer
            </h1>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Select your role to get started
            </p>
          </div>
          
          <div className="space-y-4 mb-8">
            {/* Freelancer Card */}
            <div 
              onClick={() => handleSelect('freelancer')}
              className={`p-5 rounded-xl border-2 cursor-pointer transition-all duration-300 transform hover:scale-[1.02] ${
                selectedOption === 'freelancer' 
                  ? `${darkMode ? 'border-indigo-500 bg-indigo-900/20' : 'border-indigo-500 bg-indigo-50'}`
                  : `${darkMode ? 'border-gray-700 hover:border-indigo-400' : 'border-gray-200 hover:border-indigo-300'}`
              }`}
            >
              <div className="flex items-center">
                <div className={`p-3 rounded-lg mr-4 ${darkMode ? 'bg-indigo-900' : 'bg-indigo-100'}`}>
                  <FaLaptopCode 
                    size={24} 
                    className={selectedOption === 'freelancer' 
                      ? 'text-indigo-500' 
                      : `${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`
                    } 
                  />
                </div>
                <div className="flex-1">
                  <h2 className={`font-semibold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    I'm a Freelancer
                  </h2>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Showcase your skills and find work
                  </p>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedOption === 'freelancer' 
                    ? 'bg-indigo-500 border-indigo-500' 
                    : `${darkMode ? 'border-gray-600' : 'border-gray-300'}`
                }`}>
                  {selectedOption === 'freelancer' && (
                    <FaCheck size={10} className="text-white" />
                  )}
                </div>
              </div>
            </div>
            
            {/* Client Card */}
            <div 
              onClick={() => handleSelect('client')}
              className={`p-5 rounded-xl border-2 cursor-pointer transition-all duration-300 transform hover:scale-[1.02] ${
                selectedOption === 'client' 
                  ? `${darkMode ? 'border-indigo-500 bg-indigo-900/20' : 'border-emerald-500 bg-emerald-50'}`
                  : `${darkMode ? 'border-gray-700 hover:border-indigo-500' : 'border-gray-200 hover:border-emerald-300'}`
              }`}
            >
              <div className="flex items-center">
                <div className={`p-3 rounded-lg mr-4 ${darkMode ? 'bg-indigo-900' : 'bg-emerald-100'}`}>
                  <FaBuilding 
                    size={24} 
                    className={selectedOption === 'client' 
                      ? 'text-indigo-500' 
                      : `${darkMode ? 'text-indigo-400' : 'text-emerald-600'}`
                    } 
                  />
                </div>
                <div className="flex-1">
                  <h2 className={`font-semibold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    I'm a Client
                  </h2>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Find talented professionals for your projects (Allways Free)
                  </p>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedOption === 'client' 
                    ? 'bg-indigo-500 border-indigo-500' 
                    : `${darkMode ? 'border-gray-600' : 'border-gray-300'}`
                }`}>
                  {selectedOption === 'client' && (
                    <FaCheck size={10} className="text-white" />
                  )}
                </div>
              </div>
            </div>
          </div>
          
          <button
            onClick={handleNext}
            disabled={!selectedOption}
            className={`w-full py-3 rounded-xl font-medium transition-all cursor-pointer duration-300 ${
              selectedOption
                ? `${darkMode ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-indigo-600 hover:bg-indigo-700'} text-white shadow-lg transform hover:scale-[1.02]`
                : `${darkMode ? 'bg-gray-700 cursor-not-allowed' : 'bg-gray-200 cursor-not-allowed'} text-gray-500`
            }`}
          >
            Continue
          </button>
          
          <div className={`mt-6 text-center text-sm ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
            Already have an account ?{' '}
            <Link href="/login" className={`font-medium ${darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'}`}>
              Sign in
            </Link>
          </div>
        </div>
        
        <div className={`mt-8 text-center text-sm ${darkMode ? 'text-gray-600' : 'text-gray-500'}`}>
          © 2025 Job101. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Options;