import React from 'react';
import { Outlet, Navigate, Link } from 'react-router-dom';
import { useStateContext } from '../context/ContextProvider';

export default function DefaultLayout() {
 const { user, token } = useStateContext();

 if (!token) {
    return <Navigate to="/login" />;
 }

 return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-8 h-screen flex flex-col items-center">
        {/* Centered Avatar */}
        <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mb-4 flex items-center justify-center">
          <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
          </svg>
        </div>
        {/* Navigation Links */}
        <Link to="/dashboard" className="block mb-2">Dashboard</Link>
        <Link to="/users" className="block mb-2">Users</Link>
      </aside>
      
      {/* Main content */}
      <div className="flex-grow">
        {/* Navbar */}
        <header className="bg-gray-700 text-white p-4 flex justify-between items-center">
          <Link to="/home" className="text-white">Home</Link>
          <div>
            <Link className="text-white">User information: {user.name}</Link>
            <button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">            <Link className="text-white">Logout</Link>
</button>

          </div>
        </header>
        {/* Main content */}
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
 );
}
