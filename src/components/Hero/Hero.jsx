
import React, { useState, useEffect } from 'react';
import hero from '../../assets/Hero/heroimg.png';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import PopupForm from './PopupForm';
// Import the PopupForm component

const Hero = () => {
  const [showForm, setShowForm] = useState(false);
  const [formClosedTime, setFormClosedTime] = useState(null);

  // Handle the "Book a Call" button click
  const handleBookCallClick = () => {
    setShowForm(true);
    // Reset the timer when manually opened
    setFormClosedTime(null);
  };

  // Handle form close
  const handleCloseForm = () => {
    setShowForm(false);
    // Record when the form was closed
    setFormClosedTime(Date.now());
  };

  // Show form again after 5 seconds if it was closed
  useEffect(() => {
    if (formClosedTime) {
      const timer = setTimeout(() => {
        setShowForm(true);
        setFormClosedTime(null);
      }, 9000); // 5 seconds

      return () => clearTimeout(timer);
    }
  }, [formClosedTime]);


  return (
    <section className='flex items-center justify-center  bg-gray-50 py-16 px-0 sm:px-6 lg:px-22 '>
      <div className='container flex flex-col lg:flex-row items-center justify-center   gap-12'>
        {/* Left-section text-div - Centered on mobile/tablet */}
        <motion.div 
          className="flex flex-col w-[100%] lg:w-1/2 px-4 sm:px-6 items-center lg:items-start text-center lg:text-left space-y-6 md:space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className='text-3xl sm:text-4xl md:text-5xl font-bold leading-tight'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Study & Shape Your <br className="hidden sm:block"/>  Future in {" "}
            <motion.span 
              className="bg-gradient-to-r from-[#D63715] to-[#FF9422] bg-clip-text text-transparent"
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              initial={{ backgroundPosition: '100% 50%' }}
              animate={{ backgroundPosition: '0% 50%' }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            >
              Austria Effortlessly.
            </motion.span>
          </motion.h1>

     <motion.div 
  className="space-y-4 max-w-md"
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }}
>
  {[
    "100% Admission Guaranteed",
    <span key="english-courses">
      100% English taught courses<br className=" sm:block  "/>for Masters and Bachelors
    </span>,
    "No APS required"
  ].map((item, index) => (
    <motion.div 
      key={index} 
      className="flex gap-3 items-start"
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
      }}
    >
      <div className="flex-shrink-0 pt-1">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.3751 13.1246C20.6251 16.8746 17.7976 20.4056 13.8301 21.1946C11.8951 21.5799 9.88781 21.345 8.0941 20.5232C6.30039 19.7014 4.81167 18.3346 3.83993 16.6175C2.8682 14.9003 2.46297 12.9204 2.68196 10.9596C2.90094 8.99877 3.73298 7.15702 5.05959 5.69658C7.78059 2.69958 12.3751 1.87458 16.1251 3.37458" stroke="#00A745" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8.625 11.625L12.375 15.375L21.375 5.625" stroke="#00A745" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <motion.p 
        className="text-lg font-medium text-[#3B4353]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        {item}
      </motion.p>
    </motion.div>
  ))}
</motion.div>

          <motion.div
            className="w-full flex justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <button
                          onClick={handleBookCallClick}

              className='px-8 sm:px-14 py-3 font-medium text-white transition-all hover:opacity-90 w-full sm:w-auto'
              style={{
                background: "linear-gradient(91.44deg, #FF9422 17.06%, #D63715 52.08%)",
                borderRadius: "10px 0 10px 0",
              }}
              whileHover={{ scale: 1.02 }}
            >
              Book a Call
            </button>
          </motion.div>

          <motion.div 
            className="flex space-x-4 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {[
              { icon: <FaFacebookF className="text-lg" />, href: "/" },
              { icon: <FaInstagram className="text-lg" />, href: "/" },
              { icon: <FaTwitter className="text-lg" />, href: "/" }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.href} 
                className="flex items-center justify-center w-10 h-10 rounded-full border border-black text-black hover:bg-gray-100 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right section Image div - Animated and centered on mobile */}
        <motion.div 
          className='w-full lg:w-1/2 flex justify-center px-2 sm:px-0'
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <img 
            src={hero} 
            alt="Hero Image" 
            className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] h-auto object-cover rounded-lg "
          />
        </motion.div>
      </div>
      
            <PopupForm isOpen={showForm} onClose={handleCloseForm} />

    </section>
  );
};

export default Hero;
