import React from "react";
import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../../assets/companyLogo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getJobsbtid } from "../../redux/actions/jobActions";
import { useParams } from "react-router-dom";
import displayImage from "../../assets/education.png";

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
            </li>
          </ul>
        </div>
        <Outlet />
        <div className="container">
          {job && (
            <div>
              <div className="my-1 lg:my-6 container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between pb-4 border-b border-gray-300">
                <div>
                  <h2 class="text-4xl font-extrabold dark:text-white">
                    {job.jobTitle}
                  </h2>
                  <div class="mt-5 flex flex-col sm:mt-5 sm:flex-row sm:flex-wrap sm:space-x-10">
                    <div class="mt-2 flex items-center text-sm text-gray-600">
                      <svg
                        class="mr-1.5 h-5 w-5 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z"
                          clip-rule="evenodd"
                        />
                        <path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z" />
                      </svg>
                      {job.category}
                    </div>
                    <div class="mt-2 flex items-center text-sm text-gray-600">
                      <svg
                        class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      {job.availability}
                    </div>
                    <div class="mt-2 flex items-center text-sm text-gray-500">
                      <svg
                        class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M10.75 10.818v2.614A3.13 3.13 0 0011.888 13c.482-.315.612-.648.612-.875 0-.227-.13-.56-.612-.875a3.13 3.13 0 00-1.138-.432zM8.33 8.62c.053.055.115.11.184.164.208.16.46.284.736.363V6.603a2.45 2.45 0 00-.35.13c-.14.065-.27.143-.386.233-.377.292-.514.627-.514.909 0 .184.058.39.202.592.037.051.08.102.128.152z" />
                        <path
                          fill-rule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-6a.75.75 0 01.75.75v.316a3.78 3.78 0 011.653.713c.426.33.744.74.925 1.2a.75.75 0 01-1.395.55 1.35 1.35 0 00-.447-.563 2.187 2.187 0 00-.736-.363V9.3c.698.093 1.383.32 1.959.696.787.514 1.29 1.27 1.29 2.13 0 .86-.504 1.616-1.29 2.13-.576.377-1.261.603-1.96.696v.299a.75.75 0 11-1.5 0v-.3c-.697-.092-1.382-.318-1.958-.695-.482-.315-.857-.717-1.078-1.188a.75.75 0 111.359-.636c.08.173.245.376.54.569.313.205.706.353 1.138.432v-2.748a3.782 3.782 0 01-1.653-.713C6.9 9.433 6.5 8.681 6.5 7.875c0-.805.4-1.558 1.097-2.096a3.78 3.78 0 011.653-.713V4.75A.75.75 0 0110 4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      {job.payRange}
                    </div>
                    <div class="mt-2 flex items-center text-sm text-gray-600">
                      <svg
                        class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0m1 2.5v4.5l2 -1.5l2 1.5v-4.5m-7 1.5h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73m-14 -9.73l12 0m-12 3l3 0m-3 3l2 0"></path>
                      </svg>
                      {job.experience}
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-1 lg:my-6 container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between pb-4 ">
                <div class="min-h-screen flex">
                  <div class="flex-1 ...">
                    <h4 class="text-2xl font-bold dark:text-white pb-2">
                      Job Description:
                    </h4>
                    <p class="mb-3 text-align: justify text-gray-800 dark:text-gray-400">
                      {job.jobDescription}
                    </p>
                    <div class="flex-1 ...">
                      <h4 class="text-2xl font-bold dark:text-white pb-2">
                        Skills Required:
                      </h4>
                      <p class="mb-3 text-align: justify text-gray-800 dark:text-gray-400">
                        {job.skills}
                      </p>
                    </div>
                    <div class="flex-1 ...">
                      <p class="mb-3 text-align: justify text-gray-800 dark:text-gray-400">
                        <div class="container my-2 mx-auto">
                          <section class="mb-32 text-gray-800 text-left">
                            <h4 class="text-2xl font-bold mb-10">
                              Job Details:
                            </h4>
                            <div class="grid lg:gap-x-12 lg:grid-cols-3">
                              <div class="mb-12 lg:mb-0">
                                <div class="rounded-lg shadow-lg h-full block bg-white">
                                  <div class="flex justify-center">
                                    <div class="p-4 bg-indigo-700 rounded-full shadow-lg inline-block -mt-8">
                                      <svg
                                        class="w-7 h-7 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                      >
                                        <path
                                          fill="currentColor"
                                          d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z"
                                        ></path>
                                      </svg>
                                    </div>
                                  </div>
                                  <div class="p-6">
                                    <h3 class="text-2xl font-bold text-indigo-700 mb-4">
                                      Job Type
                                    </h3>
                                    <h5 class="text-lg font-medium mb-4">
                                      {job.availability}
                                    </h5>
                                  </div>
                                </div>
                              </div>

                              <div class="mb-12 lg:mb-0">
                                <div class="rounded-lg shadow-lg h-full block bg-white">
                                  <div class="flex justify-center">
                                    <div class="p-4 bg-indigo-700 rounded-full shadow-lg inline-block -mt-8">
                                      <svg
                                        class="w-7 h-7 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 544 512"
                                      >
                                        <path
                                          fill="currentColor"
                                          d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z"
                                        ></path>
                                      </svg>
                                    </div>
                                  </div>
                                  <div class="p-6">
                                    <h3 class="text-2xl font-bold text-indigo-700 mb-4">
                                      Expected Salary
                                    </h3>
                                    <h5 class="text-lg font-medium mb-4">
                                      {job.payRange}
                                    </h5>
                                  </div>
                                </div>
                              </div>

                              <div class="">
                                <div class="rounded-lg shadow-lg h-full block bg-white">
                                  <div class="flex justify-center">
                                    <div class="p-4 bg-indigo-700 rounded-full shadow-lg inline-block -mt-8">
                                      <svg
                                        class="w-7 h-7 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 640 512"
                                      >
                                        <path
                                          fill="currentColor"
                                          d="M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                  <div class="p-6">
                                    <h3 class="text-2xl font-bold text-indigo-700 mb-4">
                                      Minimum experience
                                    </h3>
                                    <h5 class="text-lg font-medium mb-4">
                                      {job.experience}
                                    </h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </p>
                    </div>
                  </div>
                  <div class="flex-1 pl-2">
                    <h4 class="text-2xl font-bold dark:text-white pb-2">
                      About the company:
                    </h4>
                    <p class="mb-3 text-align: right text-gray-800 dark:text-gray-400">
                      Authentique Agency provides the perfect amount of
                      information upfront to describe what it is and its mission
                      and values — leveraging the power of identity in brand
                      campaigns that reflect cultural identities rather than
                      erasing them. Its a great example of how to quickly and
                      succinctly get your message across to site visitors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
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
