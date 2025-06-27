import React from 'react'
import { Link } from 'react-router-dom'  // ✅ Make sure to import this

const Home = () => {
  return (
    <div className="h-screen w-full flex flex-col">
      
      {/* Top Section with Background Image */}
      <div className="h-4/5 bg-[url('/cov.jpg')] bg-cover bg-bottom relative">
        <img className="w-20 ml-5 pt-8" src="/pngegg.png" alt="Logo" />
      </div>

      {/* Bottom White Section */}
      <div className="h-1/5 bg-white py-6 px-4 w-full">
        <h2 className="text-3xl font-bold">Get Started with HopIn</h2>
        <Link 
          to="/login" 
          className="flex items-center justify-center w-full bg-black text-white h-10 rounded mt-5"
        >
          Continue
        </Link>
      </div>
      
    </div>
  )
}

export default Home
