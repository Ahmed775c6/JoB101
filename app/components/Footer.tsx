'use client'
import { motion } from 'framer-motion'
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaTelegram, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

const socialMediaArray = [
  { icon: FaInstagram, url: 'https://instagram.com', color: '#E1306C' },
  { icon: FaFacebook, url: 'https://facebook.com', color: '#3b5998' },
  { icon: FaTiktok, url: 'https://tiktok.com', color: '#000' },
  { icon: FaWhatsapp, url: 'https://whatsapp.com', color: '#25D366' },
  { icon: FaTelegram, url: 'https://telegram.org', color: '#0088CC' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="relative bg-gray-950">
      <div className="p-6 w-full h-full text-white grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 - Brand Info */}
        <div className="w-full flex p-2 flex-col gap-3">
          <img src="/vercel.svg" alt="logo" className="w-40 h-40 object-center" />
          <h1 className="text-[4rem] font-bold hero_title gradient">JOB 101</h1>
          <p className="text-3xl font-bold hero_title gradient">Get in Touch</p>
          <p className="text-gray-300 ">
            Feel free to reach out to us for any inquiries, feedback, or support. 
            We're here to assist you and ensure you have the best experience possible.
          </p>
          <motion.div 
            className="p-2 flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {socialMediaArray.map((social, idx) => (
              <Link 
                href={social.url}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative group overflow-hidden backdrop-blur-lg rounded-md p-3 w-12 h-12 
                            flex items-center justify-center transition-all duration-300 hover:scale-105 
                            active:scale-95 shadow-lg`}
                style={{
                  background: `linear-gradient(135deg, ${social.color}80, ${social.color}40)`,
                  boxShadow: `0 4px 30px ${social.color}20`,
                  border: `1px solid ${social.color}40`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <social.icon className="text-white text-xl" />
              </Link>
            ))}
          </motion.div>
        </div>

        {/* Column 2 - Useful Links */}
        <div className="w-full flex p-2 flex-col gap-3">
          <h2 className="text-3xl font-bold hero_title gradient">Quick Links</h2>
          <ul className="space-y-3 mt-2">
            {[
              { name: 'Home', path: '/' },
              { name: 'About Us', path: '/about' },
              { name: 'Services', path: '/services' },
              { name: 'Job Listings', path: '/jobs' },
              { name: 'Career Resources', path: '/resources' },
              { name: 'Contact Us', path: '/contact' }
            ].map((link, index) => (
              <motion.li 
                key={index}
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Link href={link.path} className="text-gray-300 hover:text-white transition-colors flex text-lg  items-center">
                  <span className="w-2 h-2 bg-indigo-950 rounded-full mr-3"></span>
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Services */}
        <div className="w-full flex flex-col gap-3 p-2">
          <h2 className="text-3xl font-bold hero_title gradient">Our Services</h2>
          <ul className="space-y-3 mt-2">
            {[
              'Job Matching',
              'Resume Building',
              'Career Counseling',
              'Interview Preparation',
              'Skill Development',
              'Company Insights'
            ].map((service, index) => (
              <motion.li 
                key={index}
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="flex items-center"
              >
                <span className="text-indigo-950 mr-2">✓</span>
                <span className="text-gray-300 text-lg">{service}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Column 4 - Contact */}
        <div className="w-full flex flex-col gap-3 p-2">
          <h2 className="text-3xl font-bold hero_title gradient">Contact Info</h2>
          <div className="space-y-4 mt-2">
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-indigo-950  mt-1 mr-3 flex-shrink-0" />
              <p className="text-gray-300 text-lg">123 Career Street, Jobville, CA 90210</p>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-indigo-950 mr-3 flex-shrink-0" />
              <p className="text-gray-300 text-lg">+1 (555) 123-4567</p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-indigo-950 mr-3 flex-shrink-0" />
              <p className="text-gray-300 text-lg">info@job101.com</p>
            </div>
        
          </div>
        </div>
      </div>
      
      {/* Copyright Footer */}
      <div className="w-full py-4 px-6 bg-black text-center border-t border-gray-800">
        <p className="text-gray-400 text-sm">
          &copy; {currentYear} JOB 101. All rights reserved. 
    
        </p>
      </div>
    </div>
  )
}

export default Footer;