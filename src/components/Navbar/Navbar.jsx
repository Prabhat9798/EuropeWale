import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const Navlinks = [
        { id: 1, links: "Home" },
        { id: 2, links: "Features" },
        { id: 3, links: "Services" },
        { id: 4, links: "Reviews" }
    ];

    return (
        <nav className='min-h-[85px] flex items-center justify-center w-full bg-yellow lg:px-22 '>
            <div className='container mx-auto px-12 sm:px-6 lg:px-8 py-2'>
                {/* Main Navbar Content */}
                <div className='flex items-center justify-between'>
                    {/* Logo Section */}
                    <div className="flex gap-2 items-center">
                        <img src='https://logos-download.com/wp-content/uploads/2021/07/Flag_of_Austria.png' alt="Logo" className='w-12 h-8 rounded' />
                        <p className='font-medium text-lg text-[#000000]'>EuropeWale</p>
                    </div>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center lg:justify-center gap-8">
                        <ul className='flex gap-6'>
                            {Navlinks.map((link) => (
                                <li key={link.id} className='cursor-pointer font-medium hover:text-blue-600'>
                                    {link.links}
                                </li>
                            ))}
                        </ul>
                      
                    </div>
                    <div className='hidden lg:flex items-center lg:justify-center gap-8'>
                          <button className='px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors' 
                           style={{
                background: "linear-gradient(91.44deg, #FF9422 17.06%, #D63715 52.08%)",
                borderRadius: "10px 0 10px 0",
              }}>
                            Call for Demo
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className='lg:hidden p-2 focus:outline-none'
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className='lg:hidden bg-yellow-100 p-4 mt-2 rounded-lg'>
                        <ul className='flex flex-col gap-4'>
                            {Navlinks.map((link) => (
                                <li 
                                    key={link.id}
                                    className='cursor-pointer font-medium hover:text-blue-600 p-2'
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.links}
                                </li>
                            ))}
                        </ul>
                        <button className='mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg w-full hover:bg-blue-600'>
                            Call for Demo
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;