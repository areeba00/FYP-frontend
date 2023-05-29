import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useEffect } from "react";
import { useState } from "react";
import "./companyhome.css";
// import { FaPhone,FaMapMarkerAlt,FaEnvelope } from 'react-icons/fa';
import axios from "axios";
import companyhome from "../assets/companyhome.svg";

const Card = ({ title, description }) => (
  <div className="card">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);


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
  <div class="flex items-center">
          <Link
            to="/company"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Profile
          </Link>
          {userData && (
            <h1 class="ml-4">Welcome, {userData.companyName}!</h1>
          )}
        </div>
      </nav>
          {/* <nav class="hidden md:flex space-x-10">
          <Link
              to="/company"
              class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              {" "}
              Profile
            </Link>
          </nav> */}

          {/* <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">

          {userData && (
        <h1>Welcome, {userData.companyName}!</h1>
      )}

          </div> */}
        </div>
      </header>
      <Outlet />





    <div class="container">
    <body>
  <section class="about-us">
    <div class="about">
      <div class ="pic">
      <img src={companyhome} alt="company" />
      </div>
      <div class="text">
        <h2>Systems Limited</h2>
        <h5>Web Development & <span>Design</span></h5>
          <p>At Systems Limted, we are passionate about crafting innovative software solutions that drive digital transformation for businesses across industries. With a team of experienced and talented software engineers, designers, and project managers, we specialize in delivering cutting-edge software products and services.

Our mission is to empower our clients with technology-driven solutions that optimize their operations, enhance customer experiences, and accelerate business growth. </p>
        {/* <div class="data">
        <a href="#" class="hire">Apply Now</a>
        </div> */}
      </div>
    </div>
  </section>
</body>
<br></br>

<div className="grid grid-cols-3 gap-6 pl-12 ml-4">
                <div className="w-full px-4 py-5 rounded-lg shadow h-38 column">

                    <div className="flex items-center flex-col text-center">
                    <div className="flex items-center">
                    {/* <FaPhone size={24} className="text-white mb-2" /> */}
                    <span className="text-2xl font-medium colors pl-3">Call Us:</span>
                    </div>
                    <span className="text-lg colors mt-3">+1 (123) 456-7890</span>
                    <span className="text-lg colors mt-2">+1 (123) 456-7890</span>
                    <br></br>
                     
                 </div>

                </div>
                <div className="w-full px-4 py-5 rounded-lg shadow h-38 column">

                    <div className="flex items-center flex-col text-center">
                    <div className="flex items-center">
                    {/* <FaMapMarkerAlt size={24} className="text-white mb-2" /> */}
                    <span className="text-2xl font-medium colors pl-3">Location:</span>
                    </div>
                    <span className="text-lg colors mt-3">DHA Phase VII- Ex prak View Block</span>
                    <span className="text-lg colors mt-2">Block-B Garden Town, Lahore</span>
                    <br></br>
                     
                 </div>

                </div> 
                
                <div className="w-full px-4 py-5 rounded-lg shadow h-38 column">

                    <div className="flex items-center flex-col text-center">
                    <div className="flex items-center">
                    {/* <FaEnvelope size={24} className="text-white mb-2" /> */}
                    <span className="text-2xl font-medium colors pl-3">Email:</span>
                    </div>
                    <span className="text-lg colors mt-3">hr@systemlimited.com</span>
                    <span className="text-lg colors mt-2">careers@systems.com</span>
                    <br></br>
                     
                 </div>

                </div> 

              </div>
      </div>

      <br></br>
<br></br>
<br></br>




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
