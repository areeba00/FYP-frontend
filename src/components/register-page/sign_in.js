import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/signIn.jpg";
import axios from "axios";

function MyForm() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormState({ ...formState, [name]: value });
  // };
  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
    };

  // const handleSubmit = (event) => {
  //   if (!formState.email || !formState.password) {
  //     setErrorMessage("Please fill in all the fields");
  //     {
  //       return;
  //     }
  //   }
  //   const userData = {
  //     email: formState.email,
  //     password: formState.password
  //   };

  //   axios.post('/api/login/company', userData).then((response) => {
  //     console.log(response.status, response.data.token);
  //   });
  //   event.preventDefault();
  //   console.log(formState);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    const userData = {
      email: formState.name,
      password: formState.job
    };

    try {
      const response = await axios.post('/api/login/company', formState);

      // Handle the response from the backend API
      console.log(response.data.token.token); 
      
      const token = await response.data.token.token
      //     localStorage.setItem('token', token)
      //     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      //     window.location = '/companyHome';
      // }
      console.log(response)

      // window.location.href = '/companyHome';


      // Perform any necessary actions after successful authentication
      // For example, store authentication token in local storage or Redux state
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error(error);
    }
  };

  return (
    <div>
      <section class="relative flex flex-wrap lg:h-screen lg:items-center">
        <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div class="mx-auto max-w-lg text-center">
            <h1 class="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
              Smart Job Portal
            </h1>

            <p class="mt-4 text-gray-500">
              Welcome back! We're excited to see you again. Login to your
              account to stay up-to-date with the latest job opportunities,
              manage your applications, and connect with top recruiters. Let's
              take the next step in your career journey together!
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            class="mx-auto mt-8 mb-0 max-w-md space-y-4"
          >
            <div class="relative">
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter email"
              />

              <span class="absolute inset-y-0 right-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>

            <div class="relative">
              <input
                type="password"
                class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter password"
                name="password"
                value={formState.password}
                onChange={handleChange}
              />

              <span class="absolute inset-y-0 right-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>

              <div class="relative">
                {errorMessage && (
                  <p>
                    <div
                      class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                      role="alert"
                    >
                      <span class="font-medium">Error!</span> {errorMessage}
                    </div>
                  </p>
                )}
              </div>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-sm text-gray-500">
                No account?
                <Link
                  to="/signup"
                  class="underline whitespace-nowrap text-base text-sm text-indigo-600 hover:text-indigo-700"
                >
                  Sign Up
                </Link>
              </p>

              <button
                type="submit"
                class="inline-block rounded-lg px-5 py-3 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>

        <div class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
          <img src={logo} class="w-full" alt="Sample image" />
        </div>
      </section>
    </div>
  );
}
export default MyForm;
