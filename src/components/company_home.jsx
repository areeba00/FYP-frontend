import React from "react";
import { Outlet, Link } from "react-router-dom";

function CompanyHomePage() {
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
            <Link
              to="/"
              class="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              {" "}
              Candidates
            </Link>
            <Link
              to="/company"
              class="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              {" "}
              Employers
            </Link>
            <Link
              to="/"
              class="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              {" "}
              Profiles
            </Link>
            <Link
              to="/student"
              class="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              {" "}
              Students
            </Link>
          </nav>

          <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link
              to="/signin"
              class="whitespace-nowrap text-base font-medium text-indigo-600 hover:text-indigo-700"
            >
              {" "}
              Sign in{" "}
            </Link>
            <Link
              to="/signup"
              class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              {" "}
              Sign up{" "}
            </Link>
          </div>
        </div>
      </header>
      <Outlet />

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
