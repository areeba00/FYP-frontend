import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import displayImage from "../assets/background.jpg";

function CompanyHomePage() {


  const [userData, setUserData] = useState(null);

  useEffect(() => {



    const data = localStorage.getItem('userData');
    console.log('data is:' , data);
    if (data) {
      const parsedUserData = JSON.parse(data);
      setUserData(parsedUserData);
      console.log('paarsed data:',parsedUserData);
    }

  }, []);




  return (
    <React.Fragment>
      <header class=" relative bg-white mx-auto px-4 sm:px-6 sticky top-0">
        <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div class="self-center text-2xl font-semibold whitespace-nowrap text-indigo-700">
            {" "}
            Smart Job Portal{" "}
          </div>
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <span class="sr-only">Workflow</span>
              <img
                class="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="logo"
              />
            </Link>
          </div>
          <nav class="hidden md:flex space-x-10">
          </nav>

          <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          {/* <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Welcome, {userData.companyEmail}!</h1> */}

          {userData && (
        <h1>Welcome, {userData.companyEmail}!</h1>
      )}
          </div>
        </div>
      </header>
      <Outlet />

      <div class="container">
      <img src={displayImage} class="img-fluid" alt="Responsive image"/>
        </div>

      <footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a
            href="http://localhost:4200/"
            class="flex items-center mb-4 sm:mb-0"
          >
            <img
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              class="mr-3 h-8"
              alt="Flowbite Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Smart Job Portal
            </span>
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" class="mr-4 hover:text-gray-900 md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:text-gray-900 md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:text-gray-900 md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-gray-900">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a href="http://localhost:4200/" class="hover:underline">
            Smart Job Portal
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </React.Fragment>
  );
}

export default CompanyHomePage;
