import React, { useState, useEffect } from 'react';
import './Auth.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Shimmer from './Shimmer'; 

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {

        const response = await axios.get('http://localhost:5000/api/', {
          withCredentials: true, 
        });

        
        if (response.status === 200) {
          navigate('/');
        }
      } catch (err) {

        console.log('User not authenticated:', err.response?.status);
      } finally {
        setLoading(false);
      }
    };
    checkAuthentication();
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post(
        'http://localhost:5000/api/login',
        { email, password },
        { withCredentials: true }
      );

      if (response.data.message === 'Login successful!') {
        toast.success('🎉 Login successful! Redirecting...');
        setTimeout(() => {
          navigate('/');
        }, 200);
      }
    } catch (err) {
      const errorMsg = err.response?.data || 'Login failed. Please try again.';
      toast.error(`❌ ${errorMsg}`);
      setError(errorMsg);
    }
  };

  if (loading) {
    return <Shimmer/>; 
  }

  return (
    <div className="auth-container">
      <div className="auth-card glassy">
        <h2 className="auth-title">Welcome Back 💍</h2>
        <p className="auth-subtitle">Login to continue your sparkling journey</p>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error">{error}</p>}
          <button type="submit">Login</button>
        </form>
        <p className="auth-footer">
          Don't have an account? <a href="/signup">Create one</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;