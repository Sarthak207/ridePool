import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';

const Captainlogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/login`,
        { email, password },
        { withCredentials: true }
      );
      console.log(response); // <-- Add this line
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        setCaptain(response.data.captain);
        navigate('/captain-home');
      }
    } catch (error) {
      alert(error.response?.data?.message || 'Login failed');
    }
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
            Have Space? <Link to="/captain-signup" className='text-blue-600'>Register as a captain</Link>
          </p>
        </form>

        <Link
          to='/login'
          className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mt-6 rounded px-4 py-2 border w-full text-sm hover:bg-green-700' 
        >
          Sign in as User
        </Link>
      </div>
    </div>
  )
}

export default Captainlogin