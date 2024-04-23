import React from 'react'

const Footer = () => {
    return (
        <div className='w-full'>
            <div className="bg-gray-800 p-4">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="mb-4">
                        <h3 className="text-white text-lg font-bold">Your Website</h3>
                        <p className="text-gray-400 text-sm">© 2024 Your Company</p>
                    </div>
                    <div className="mb-4">
                        <h4 className="text-white text-lg font-bold mb-2">Navigation</h4>
                        <ul className="text-gray-400">
                            <li><a href="#" className="hover:text-white">Home</a></li>
                            <li><a href="#" className="hover:text-white">About</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h4 className="text-white text-lg font-bold mb-2">Social Media</h4>
                        <div className="flex items-center space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                            <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                            <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
                        </div>
                    </div>
                    <div className="mb-4">
                        <h4 className="text-white text-lg font-bold mb-2">Contact Us</h4>
                        <p className="text-gray-400">Gurgaon, India</p>
                        <p className="text-gray-400">Email: ayushbhatt204@gmail.com</p>
                        <p className="text-gray-400">Phone: +97 7015842605</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Footer