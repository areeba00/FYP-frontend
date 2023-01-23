import React from "react";
import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../../assets/companyLogo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getJobsbtid } from "../../redux/actions/jobActions";
import { useParams } from "react-router-dom";
import displayImage from "../../assets/education.png";
import displayImage1 from "../../assets/background.jpg";

const Job = ({ match, history }) => {
  const { jobId } = useParams();
  console.log(jobId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobsbtid(jobId));
  }, [dispatch, jobId]);

  const { job } = useSelector((state) => state.jobss);

  return (
    <div>
      <header class=" relative bg-white mx-auto px-4 sm:px-6 sticky top-0">
        <div class="flex justify-between items-center border-b-2 border-gray-200 py-6 md:justify-start md:space-x-10">
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
          <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <div class="row-2 md:row-2">
              <div class="text-center text-base text-gray-900">
                {" "}
                Welcome Back
              </div>
              <div class="text-center text-base font-medium text-indigo-700">
                {" "}
                Ryan Ahmad{" "}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div class="flex flex-row min-h-screen bg-gray-100 text-gray-800">
        <div class="overflow-y-auto py-4 px-3 bg-slate-200 rounded">
          <ul class="space-y-4">
            <div class="row-2 md:row-2 pt-8 pb-6">
              <div class="flex flex-row justify-center">
                <img
                  class="w-14 h-14 rounded-full"
                  src={logo}
                  alt="Rounded avatar"
                />
              </div>
              <div class="text-center text-base font-medium text-indigo-700 pt-4">
                {" "}
                Ryan Ahmad{" "}
              </div>
            </div>
            <li>
              <Link
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-indigo-300 "
                to="/student"
              >
                <i className="pi pi-home"></i>
                <span class="ml-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-indigo-300 "
                to="/student/search"
              >
                <i className="pi pi-list"></i>
                <span class="ml-3">Search Jobs</span>
              </Link>
            </li>
            <li>
              <Link
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-indigo-300 "
                to="/student/body"
              >
                <i className="pi pi-plus"></i>
                <span class="ml-3">Create CV</span>
              </Link>
            </li>
            <li>
              <Link
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-indigo-300 "
                to="/student/messages"
              >
                <i className="pi pi-envelope"></i>
                <span class="ml-3">Messages</span>
              </Link>
            </li>
            <li>
              <Link
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-indigo-300 "
                to="/student/profile"
              >
                <i className="pi pi-users"></i>
                <span class="ml-3">Profile</span>
              </Link>
            </li>
            <li>
              <Link
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-indigo-300 "
                to="/student/edit"
              >
                <i className="pi pi-user-edit"></i>
                <span class="ml-3">Edit Your Profile</span>
              </Link>

              <Link
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-indigo-300 "
                to="/student/job/:jobId"
              >
                <i className="pi pi-user-edit"></i>
                <span class="ml-3">Edit Your </span>
              </Link>
            </li>
          </ul>
        </div>
        <Outlet />

        <div className="container">
          {/* {job && JSON.stringify(job)} */}
          {/* {console.log(jobId)} */}

          {job && (
            <div>
              <img class="rounded-sm w-48 h-48" src={displayImage1} alt="" />
              <div className="row flex flex-wrap ">
                <div className="col-md-6 my-8 mx-8 ">
                  <img class="rounded-sm w-48 h-48" src={displayImage} alt="" />
                </div>

                <div className="col-md-5 my-8 mx-8">
                  <h1 class="text-2xl">{job.jobTitle}</h1>
                  <p className="text-muted border-top py-2">
                    Description: {job.jobDescription}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* <img class="rounded-sm w-48 h-48" src={displayImage1} alt="" /> */}
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
    </div>
  );
};

export default Job;
