import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tl from-blue-400 to-cyan-100">
      <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-2xl lg:max-w-4xl border">
        <div
          className="hidden bg-cover lg:block lg:w-2/4"
          style={{ backgroundImage: `url('/hai.jpg')` }}
        ></div>

        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto"></div>

          <p className="mt-3 text-xl text-center text-blue-500 font-medium ">
            CREATE AN ACCOUNT
          </p>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b border-gray-600 lg:w-1/4"></span>

            <a
              href="#"
              className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
            >
              Your Details
            </a>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
          </div>

          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600"
              htmlFor="Email"
            >
              Email Address
            </label>
            <input
              id="Email"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
              placeholder="Enter Your Email"
            />
          </div>

          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600"
              htmlFor="Password"
            >
              Password
            </label>
            <input
              id="Password"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
              placeholder="Enter a Password"
            />
          </div>

          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600  "
              htmlFor="Mobile"
            
            >
              Mobile
            </label>
            <input
              id="Mobile"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="text"
              placeholder="Enter Your Mobile Number"
            />
          </div>

          <div className="mt-6">
            <button
              className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-400 rounded-lg hover:bg-indigo-800 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            >
         SIGN UP
            </button>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

            <a
              href="#"
              className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
            >
              or sign in
            </a>

            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
