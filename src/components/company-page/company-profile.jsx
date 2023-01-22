import React, { Component } from "react";
import { useState, useEffect } from "react";
import logo from "../../assets/companyLogo.jpg";
import "./company.css";
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
    axios.get("/api/companies").then((res) => {
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
              Edit Company Details
            </div>
            <hr class="w-100" />

            <div class="pt-5">
              <label>Company Name </label> <br />
              <input
                class="pl-3 "
                placeholder={userData?.users[0]?.companyName}
                type="text"
                name="companyName"
                value={inputs.companyName || userData?.users[0]?.companyName}
                onChange={handleChange}
              />
            </div>

            <div class="pt-5">
              <label>Company Email</label> <br />
              <input
                class="pl-3 "
                placeholder={userData?.users[0]?.companyEmail}
                type="text"
                name="companyEmail"
                value={inputs.companyEmail || userData?.users[0]?.companyEmail}
                onChange={handleChange}
              />
            </div>

            <div class="pt-5">
              <label>Company Contact Number </label> <br />
              <input
                class="pl-3 "
                placeholder={userData?.users[0]?.companyContactNumber}
                type="text"
                name="companyContactNumber"
                value={
                  inputs.companyContactNumber ||
                  userData?.users[0]?.companyContactNumber
                }
                onChange={handleChange}
              />
            </div>

            <div class="pt-5">
              <label>Company Address</label> <br />
              <input
                class="pl-3 "
                placeholder={userData?.users[0]?.companyAddress}
                type="text"
                name="companyAddress"
                value={
                  inputs.companyAddress || userData?.users[0]?.companyAddress
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
            Systems Limited
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
