import React from 'react'

const UserLogin = () => {
  return (
    <div className='p-7'>
        <div>
          <img className='w-16 mb-10' src="/pngegg.png"/>
          <form>
          <h3 className='text-lg font-medium mb-2'>Enter email</h3>
          <input 
          required
          className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
          type="email" 
          placeholder='email@example.com'
          />
        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
        <input 
        required
        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'  
        type="password" 
        placeholder='password'
        />
        <button
        className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
        >Login</button>
      </form>
        </div>
        <div>
          <button>Sign in as Captain</button>
        </div>
    </div>
  )
}

export default UserLogin