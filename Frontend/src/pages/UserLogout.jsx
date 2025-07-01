import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserLogout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    const logout = async () => {
      try {
        await axios.post(
          `${import.meta.env.VITE_BASE_URL}/users/logout`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
          }
        );
        localStorage.removeItem('token');
        navigate('/login');
      } catch (error) {
        localStorage.removeItem('token');
        navigate('/login');
      }
    };
    logout();
  }, [navigate, token]);

  return <div>UserLogout</div>;
};

export default UserLogout;