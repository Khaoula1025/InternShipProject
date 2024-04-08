// src/Home.js
import React, { useState } from 'react';

const Home = () => {const [isMenuOpen, setIsMenuOpen] = useState(false);


 return (
    <div className="flex flex-col min-h-screen">
    <header>
      

<nav class="!bg-gray-200 border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
    <a href="https://www.tratop.ma/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="../public/logo.png" class="h-24" alt="tra top Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
    </a>
    <button
 onClick={() => setIsMenuOpen(!isMenuOpen)}
 data-collapse-toggle="navbar-default"
 type="button"
 class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
 aria-controls="navbar-default"
 aria-expanded="false"
>
 <span class="sr-only">Open main menu</span>
 <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
 </svg>
</button>
<div class="hidden w-full md:block md:w-auto" id="navbar-default">
     <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
 <li>
    <a href="https://www.tratop.ma/" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 hover:text-white" aria-current="page">Home</a>
 </li>
 <li>
    <a href="https://www.tratop.ma/about" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:text-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">A propos</a>
 </li>
 <li>
    <a href="https://www.tratop.ma/technologies" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:text-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Nos technologies</a>
 </li>
 <li>
    <a href="https://www.tratop.ma/contact" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 hover:text-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
 </li>
</ul>

    </div>
  </div>
</nav>

    </header>
    <main className="flex-grow">
      {/* Your main content here */}
    </main>
    <footer class="flex flex-col space-y-10 justify-center m-10">

    <nav class="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
 <a class="hover:text-gray-900 transition transform hover:scale-110" href="#">Home</a>
 <a class="hover:text-gray-900 transition transform hover:scale-110" href="#">About</a>
 <a class="hover:text-gray-900 transition transform hover:scale-110" href="#">Contact</a>
</nav>

<div class="flex justify-center space-x-5">
 <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="transition transform hover:scale-110">
    <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
 </a>
 <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="transition transform hover:scale-110">
    <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
 </a>
 <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="transition transform hover:scale-110">
    <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
 </a>
 <a href="https://messenger.com" target="_blank" rel="noopener noreferrer" class="transition transform hover:scale-110">
    <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
 </a>
 <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="transition transform hover:scale-110">
    <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
 </a>
</div>
<p class="text-center text-gray-700 font-medium">&copy; TraTop Ingénierie © 2024</p>
</footer>
  </div>
 );
};

export default Home;
