import React, { useState } from 'react';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import url from "../url";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [checkEmail , SetCheckEmail] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const Navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const submitPopup = (e) => {
    e.preventDefault();
    axios.post(url + '/login', { type: "togglepopup", data: { checkEmail } })
      .then(response => {
        console.log(response.data); // Log the response to see what data is received
        if (response.data.message === 'Valid user') {
          alert('Password is sent to your email');
        } else {
          alert('You are not authorized');
        }
        setShowPopup(false);
        SetCheckEmail('');
      })
      .catch(err => console.log(err));

  }
  

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(url + '/login', { type : "handleSubmit", data: {email, password} })
      .then(response => {
        console.log(response); 
        if (response.data.message === 'Invalid user') {
          alert('Invalid email or password');
        }else {
          setShowSuccessPopup(true); 
          setTimeout(() => {
            setShowSuccessPopup(false); 
          }, 200);
          Navigate('/admin');
        }

      })
      .catch(err => console.log(err));
    console.log('Form submitted!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-8 sm:px-12 lg:px-16">
      <div className="max-w-xl w-full space-y-8">

        <div>
          <h2 className="mt-6 text-center text-5xl font-extrabold text-gray-900">Sign in to your account</h2>
        </div>
        <form className="mt-8 space-y-6 w-1/2 mx-auto" onSubmit={handleSubmit}  >
          <div className="space-y-3">
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input 
                id="email-address" 
                name="email" 
                type="email" 
                autoComplete="email" 
                required 
                className=" w-full px-3 py-3 border border-gray-300 placeholder-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-lg" 
                placeholder="Email address"
                
                onChange={(e) => (setEmail(e.target.value))} />
            </div>
            <div className="relative">
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'} // Toggle password visibility
                autoComplete="current-password"
                required
                className="w-full px-3 py-3 border border-gray-300 placeholder-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-lg"
                placeholder="Password"
                
                onChange={(e) => (setPassword(e.target.value))}
              />
              {/* Show Password Icon */}
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center z-10">
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="h-5 w-5 text-gray-400 cursor-pointer " onClick={togglePasswordVisibility} />
              </div>
            </div>
          </div>

          
          <div className="text-sm">
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={() => setShowPopup(true)}>Forgot your password?</a>
          </div>
          {showPopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
              <div className="bg-white p-6 rounded-md shadow-md">
                <div className="flex justify-between">
                  <p className="text-lg font-medium">Forgot Your Password?</p>
                  <button className="text-gray-500" onClick={() => setShowPopup(false)}>X</button>
                </div>
                <label htmlFor="email_id" className="text-sm font-medium text-gray-700">Enter your Email:</label>
                <input 
                  type="email" 
                  id="email_id"
                  className="w-3/4 px-3 py-2 border border-gray-300 placeholder-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-sm"
                  placeholder="Email address"
                  required
                  autoComplete=''
                  onChange={(e) => SetCheckEmail(e.target.value)} 
                />
                <button onClick={submitPopup} className="block mt-4 py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Submit</button>
              </div>
            </div>
          )}          
          


          <div>
            <button
              type="submit"
              className=" w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div className="bg-white p-6 rounded-md shadow-md">
            <p className="text-lg font-medium">Successfully logged in!</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
