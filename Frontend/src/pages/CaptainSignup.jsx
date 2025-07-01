import React, { useState } from 'react'

const CaptainSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName]= useState('');
  const [lastName, setLastName]= useState();
  const [userData,setUserData]= useState({})
  
    const submitHandler = (e) => {
      e.preventDefault();
      setUserData({
        email: email,
        password: password,
        fullName:{
          firstName: firstName,
          lastName: lastName
        },
      });
      setEmail('');
      setPassword('');
      setFirstName('');
      setLastName('');
    };
  return (
    <div className='p-7 flex flex-col justify-between min-h-screen bg-gray-100 items-center justify-center'>
      <div className='bg-white w-80 p-6 rounded shadow-sm'>
        <img className='w-16 mb-10' src="/pngegg.png" alt="Logo" />
        <form onSubmit={submitHandler}>
          <h3 className='text-lg font-medium mb-2'>What's your name</h3>
          <div className='flex gap-4'>
            <input
              required
              className='bg-[#eeeeee] mb-7 rounded px-4 py-4 border w-1/2 text-lg placeholder:text-sm'
              type="text"
              placeholder='First name'
              value={firstName}
              onChange={(e)=>{
                setFirstName(e.target.value)
              }}
            />
            <input
              required
              className='bg-[#eeeeee] mb-7 rounded px-4 py-4 border w-1/2 text-lg placeholder:text-sm'
              type="text"
              placeholder='Last name'
              value={lastName}
              onChange={(e)=>{
                setLastName(e.target.value)
              }}
            />
          </div>
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
            Already have a account? <Link to="/captain-login" className='text-blue-600'>Log in here</Link>
          </p>
        </form>
        <Link
          to='/captain-login'
          className='bg-green-600 flex items-center justify-center text-white font-semibold mt-6 rounded px-4 py-2 border w-full text-sm hover:bg-green-700' 
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  )
}

export default CaptainSignup