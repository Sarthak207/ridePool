import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Captainlogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});
  
  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      email: email,
      password: password
    });
    console.log(userData);
    setEmail('');
    setPassword('');
  };
  return (
    <div className='p-7 flex flex-col justify-between min-h-screen bg-gray-100 items-center justify-center'>
      <div className='bg-white w-80 p-6 rounded shadow-sm'>
        <img className='w-16 mb-10' src="/pngegg.png" alt="Logo" />
        <form onSubmit={submitHandler}>
          <h3 className='text-sm font-medium mb-1'>What's your email</h3>
          <input 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-sm placeholder:text-sm' 
            type="email" 
            placeholder='email@example.com'
          />

          <h3 className='text-sm font-medium mb-1'>Enter Password</h3>
          <input 
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-sm placeholder:text-sm'  
            type="password" 
            placeholder='password'
          />

          <button
            type="submit"
            className='bg-black text-white font-semibold mb-5 rounded px-4 py-2 border w-full text-sm' 
          >
            Login
          </button>

          <p className='text-center text-sm'>
            Have Space? <Link to="/signup" className='text-blue-600'>Register as a captain</Link>
          </p>
        </form>

        <Link
          to='/captain-login'
          className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mt-6 rounded px-4 py-2 border w-full text-sm hover:bg-green-700' 
        >
          Sign in as User
        </Link>
      </div>
    </div>
  )
}

export default Captainlogin