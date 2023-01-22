import React, { Component } from "react";
import { useState, useEffect } from "react";
import logo from "../../assets/companyLogo.jpg";
import axios from "axios";

function CompanyProfile() {
  const [inputs, setInputs] = useState({});
  const [userData, setUserData] = useState(null);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  useEffect(() => {
    axios.get("/api/users").then((res) => {
      setUserData(res.data);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };
  return (
    <div className="container mx-auto sm:px-4 ">
      <div class="flex flex-wrap ">
        <div class="sm:w-2/3 pr-4 pl-4">
          <form onSubmit={handleSubmit}>
            <div class="self-center font-normal whitespace-nowrap text-start text-gray-900 pt-8">
              {" "}
              Edit personal details
            </div>
            <hr class="w-100" />

            <div class="pt-5">
              <label>First Name </label> <br />
              <input
                class="pl-3 "
                placeholder={userData?.users[0]?.firstName}
                type="text"
                name="firstName"
                value={inputs.firstName || userData?.users[0]?.firstName}
                onChange={handleChange}
              />
            </div>
            <div class="pt-5">
              <label>Last Name </label> <br />
              <input
                class="pl-3 "
                placeholder={userData?.users[0]?.lastName}
                type="text"
                name="lastName"
                value={inputs.lastName || userData?.users[0]?.lastName}
                onChange={handleChange}
              />
            </div>

            <div class="pt-5">
              <label>Email</label> <br />
              <input
                class="pl-3 "
                placeholder={userData?.users[0]?.email}
                type="text"
                name="email"
                value={inputs.email || userData?.users[0]?.email}
                onChange={handleChange}
              />
            </div>

            <div class="self-center font-normal whitespace-nowrap text-start text-gray-900 pt-8">
              {" "}
              Edit Education details
            </div>
            <hr class="w-100" />
            <div class="pt-5">
              <label>Degree</label> <br />
              <input
                class="pl-3 "
                placeholder={userData?.users[0]?.degree}
                type="text"
                name="degree"
                value={inputs.degree || userData?.users[0]?.degree}
                onChange={handleChange}
              />
            </div>
            <div class="pt-5">
              <label>CGPA</label> <br />
              <input
                class="pl-3 "
                placeholder={userData?.users[0]?.CGPA}
                type="text"
                name="CGPA"
                value={inputs.CGPA || userData?.users[0]?.CGPA}
                onChange={handleChange}
              />
            </div>
            <div class="pt-5">
              <label>UET Branch</label> <br />
              <input
                class="pl-3 "
                placeholder={userData?.users[0]?.universityBranch}
                type="text"
                name="universityBranch"
                value={
                  inputs.universityBranch ||
                  userData?.users[0]?.universityBranch
                }
                onChange={handleChange}
              />
            </div>
            <input class="hover:bg-indigo-300 " type="submit" />
          </form>
        </div>

        <div class="sm:w-1/3 pr-4 pl-4">
          <div class="self-center text-2xl font-semibold whitespace-nowrap text-start text-gray-900 pt-8 ml-36">
            {" "}
            <div class="sm:w-1/3 pr-4 pl-4">
              {userData?.users[0]?.firstName}
              {userData?.users[0]?.lastName}
            </div>
          </div>
          <div class="flex flex-row justify-center">
            <img
              class="w-24 h-24 rounded-full mt-8 ml-32"
              src={logo}
              alt="Rounded avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyProfile;
