'use client'
import { useState } from "react";

const jobCategories = [
  { id: 1, name: "Development & IT", color: "#e1f5fe", iconColor: "bg-blue-500" },
];

const hiringSteps = [
  {
    step: 1,
    title: "Post a Job",
    description: "Create a detailed job post with your requirements, budget, and timeline to attract the right talent.",
    icon: "📝"
  },
  {
    step: 2,
    title: "Review Proposals",
    description: "Evaluate freelancer proposals, portfolios, and ratings to find the best match for your project.",
    icon: "🔍"
  },
  {
    step: 3,
    title: "Interview Candidates",
    description: "Conduct interviews to assess skills, experience, and communication fit before making a decision.",
    icon: "💬"
  },
  {
    step: 4,
    title: "Hire & Collaborate",
    description: "Select your ideal freelancer, set milestones, and collaborate through our secure platform.",
    icon: "🤝"
  }
];

const findingWorkSteps = [
  {
    step: 1,
    title: "Create Profile",
    description: "Build a compelling profile showcasing your skills, experience, and portfolio to attract clients.",
    icon: "👤"
  },
  {
    step: 2,
    title: "Search Jobs",
    description: "Browse thousands of job listings and find opportunities that match your expertise.",
    icon: "🔎"
  },
  {
    step: 3,
    title: "Submit Proposals",
    description: "Craft personalized proposals that demonstrate your understanding of client needs.",
    icon: "📨"
  },
  {
    step: 4,
    title: "Get Hired & Work",
    description: "Secure projects, collaborate with clients, and get paid through our protected payment system.",
    icon: "💼"
  }
];

const HowItWorks = () => {
  const [section, setSection] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const currentSteps = section === 0 ? hiringSteps : findingWorkSteps;
  const sectionTitle = section === 0 ? "Hiring Process" : "Finding Work Process";
  
  return (
    <div className="min-h-screen  py-12 px-4 bg-black sm:px-6 lg:px-8">
      <div className="mx-auto">
        {/* Header Section */}
        <div className="w-full bg-gradient-to-br from-blue-00 to-indigo-900 flex flex-col md:flex-row rounded-sm justify-between p-4 md:p-6 mb-8 shadow-lg" style={{
          
          boxShadow: `0 4px 30px ${jobCategories[0].color}20`,
          border: `1px solid ${jobCategories[0].color}40`
        }}>
          <div>
            <h1 className='text-3xl md:text-4xl font-bold text-white p-2'>How it Works</h1>
            <p className="text-gray-100 p-2 max-w-2xl">
              {section === 0 
                ? "Streamline your hiring process to find the perfect freelancer for your project" 
                : "Discover opportunities and build your freelance career with our platform"}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 p-2 self-center">
            <button 
              onClick={() => setSection(0)}
           
              className={`px-4 py-2 rounded-sm backdrop-blur-lg  cursor-pointer transition-all duration-300 ${
                section === 0 
                  ? "bg-gradient-to-br from-purple00 to-indigo-600 text-white shadow-sm" 
                  : "bg-white text-black hover:bg-blue-50"
              }`}
            >
              For Hiring
            </button>
            
            <button 
            
              onClick={() => setSection(1)}
               className={`px-4 py-2 rounded-sm backdrop-blur-lg  cursor-pointer transition-all duration-300 ${
                section === 1
                  ? "bg-gradient-to-br from-purple00 to-indigo-600 text-white shadow-sm" 
                  : "bg-white text-black hover:bg-blue-50"
              }`}
            >
              For Finding Work
            </button>
          </div>
        </div>
        
        {/* Video Section */}
        <div className="w-full mb-12 flex flex-col md:flex-row items-center justify-between gap-6 bg-gray-950 rounded-sm p-6  shadow-lg">
          <div className="flex-1 p-4">
            <h2 className="text-2xl  md:text-3xl font-bold text-white mb-3">
              {sectionTitle} Explained
            </h2>
            <p className="text-gray-200 mb-4 max-w-2xl">
              {section === 0
                ? "Watch our comprehensive guide to learn how to efficiently hire top talent for your projects."
                : "Learn how to maximize your earning potential and build a successful freelance career."}
            </p>
            <button 
              onClick={() => setShowVideo(true)}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-00 to-indigo-600 text-white rounded-full font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Watch Video Guide
            </button>
          </div>
          
          <div className="relative w-full md:w-1/2 lg:w-2/5 aspect-video rounded-sm overflow-hidden cursor-pointer" onClick={() => setShowVideo(true)}>
            <div className="absolute inset-0 bg-gradient-to-br from-purple00 to-indigo-600 flex items-center justify-center">
              <div className="w-16 h-16 bg-white bg-opacity-30 rounded-full flex items-center justify-center backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <h3 className="text-white font-bold text-lg">{sectionTitle} Video Guide</h3>
              <p className="text-blue-200 text-sm font-semibold">Click to play</p>
            </div>
          </div>
        </div>
        
        {/* Steps Section */}
        <div className=" bg-gray-950 p-6 rounded-sm flex flex-col gap-2">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mt-10 ">
            {section === 0 ? "Hiring in 4 Simple Steps" : "Find Work in 4 Simple Steps"}
          </h2>
          <p className="text-gray-200 text-center mb-10 max-w-3xl mx-auto">
            {section === 0 
              ? "Our streamlined process makes hiring top talent quick and efficient" 
              : "Start your freelance journey with our proven process"}
          </p>
          
          <div className="grid grid-cols-1 p-4 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentSteps.map((step, index) => (
              <div 
                key={step.step} 
                className={`relative  bg-gradient-to-br from-blue-00 to-indigo-900 text-white rounded-sm p-6 shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 border-t-4 ${
                  index === 0 ? 'border-blue-500' : 
                  index === 1 ? 'border-indigo-500' : 
                  index === 2 ? 'border-cyan-500' : 'border-pink-500'
                }`}
              >
                <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
                  <span className="text-xl">{step.icon}</span>
                </div>
                <div className="flex items-start mb-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                    index === 0 ? 'bg-blue-400' : 
                    index === 1 ? 'bg-indigo-300' : 
                    index === 2 ? 'bg-cyan-400' : 'bg-pink-400'
                  }`}>
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-300  mb-2">{step.title}</h3>
                <p className="text-gray-100">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Additional Resources */}
        <div className="bg-gray-950  mt-4 rounded-sm p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-200 mb-4">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-sm bg-gray-900">
              <h3 className="font-bold p-2  justify-center text-center rounded-sm  bg-gradient-to-br from-blue-00 to-indigo-900 mb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Hiring Guide
              </h3>
              <p className="text-gray-200">Best practices for writing effective job descriptions</p>
            </div>
            <div className="p-4 rounded-sm bg-gray-900 ">
              <h3 className="font-bold p-2  justify-center text-center rounded-sm  bg-gradient-to-br from-blue-00 to-indigo-900 mb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
                Pricing Strategies
              </h3>
              <p className="text-gray-200">How to set competitive rates for your projects</p>
            </div>
            <div className="p4 rounded-sm bg-gray-900 p-4 ">
              <h3 className="font-bold p-2  justify-center text-center rounded-sm  bg-gradient-to-br from-blue-00 to-indigo-900 mb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                Success Stories
              </h3>
              <p className="text-white">Learn from successful projects on our platform</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4" onClick={() => setShowVideo(false)}>
          <div className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden" onClick={e => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 z-10 hover:bg-opacity-75"
              onClick={() => setShowVideo(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="aspect-video bg-gray-900 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{sectionTitle} Guide</h3>
                <p className="text-gray-300 max-w-md mx-auto">
                  {section === 0
                    ? "This video will guide you through the process of hiring freelancers for your projects"
                    : "Learn how to effectively find and secure freelance work on our platform"}
                </p>
              </div>
            </div>
            <div className="p-4 bg-gray-900 text-white">
              <div className="flex items-center justify-between">
                <span>Video Guide</span>
                <span className="text-gray-400">5:24</span>
              </div>
              <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
                <div className="bg-blue-500 h-2 rounded-full w-1/3"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HowItWorks;