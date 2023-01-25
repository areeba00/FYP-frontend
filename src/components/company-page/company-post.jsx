import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import displayImage from "../../assets/graph.png";
import "./company.css";
import axios from "axios";

function CompanyPost() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handlejobImage = (event) => {
    console.log(event.target.files[0]);
    setInputs({
      ...inputs,[event.target.name]:event.target.files[0],
    })
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post("/api/company/create", inputs).then(function (response) {
      console.log(response);
    });

    // console.log(inputs);
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data" >
      <div className="container mx-auto sm:px-4 ">
        <div class="flex flex-wrap ">
          <div class="sm:w-2/3 pr-4 pl-4">
            <div class="self-center font-normal whitespace-nowrap text-start text-gray-900 pt-8">
              {" "}
              TELL US ABOUT YOUR JOB{" "}
            </div>
            <hr class="w-100" />

            <div class="pt-5">
              <label>Job title </label> <br />
              <input
                class="pl-3 "
                placeholder="Enter the name or title of your job"
                type="text"
                name="jobTitle"
                value={inputs.jobTitle || ""}
                onChange={handleChange}
              />
            </div>

            <div class="pt-5">
              <label>Describe Your Job </label> <br />
              <input
                class="pl-3 "
                placeholder="Describe the job in few words"
                type="textarea"
                name="jobDescription"
                value={inputs.jobDescription || ""}
                onChange={handleChange}
              />
            </div>

            <div class="self-center font-normal whitespace-nowrap text-start text-gray-900 pt-8">
              {" "}
              JOB REQUIREMENTS{" "}
            </div>
            <hr class="w-100" />

            <div class="pt-5">
              <label>Skills </label> <br />
              <input
                class="pl-3 "
                placeholder="Describe the skills you require for the job"
                type="text"
                name="skills"
                value={inputs.skills || ""}
                onChange={handleChange}
              />
            </div>

            <div class="flex flex-nowrap">
              <div class="sm:w-1/2 pt-5 ">
                <label for="availability">Availability</label> <br />
                <select
                  id="availability"
                  name="availability"
                  onChange={handleChange}
                >
                  <option value="" selected disabled hidden>
                    Choose here
                  </option>
                  <option value="On-Site">On-Site</option>
                  <option value="Remote">Remote</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>

              <div class="sm:w-1/2 pt-5">
                <label for="experience">Experience Level</label> <br />
                <select
                  id="experience"
                  name="experience"
                  onChange={handleChange}
                >
                  <option value="" selected disabled hidden>
                    Choose here
                  </option>
                  <option value="Fresh-Graduate">Fresh-Graduate</option>
                  <option value="Less-than-a-year">Less-than-a-year</option>
                  <option value="2+ years">2+ years</option>
                  <option value="5+ years">5+ years</option>
                </select>
              </div>
            </div>

            <div class="pt-5">
              <label for="category">Job Category</label> <br />
              <select id="category" name="category" onChange={handleChange}>
                <option value="" selected disabled hidden>
                  Choose here
                </option>
                <option value="Finance">Finance</option>
                <option value="IT">IT</option>
                <option value="Mechanical">Mechanical</option>
                <option value="Architecture">Architecture</option>
                <option value="Polymer">Polymer</option>
              </select>
            </div>

            <div class="self-center font-normal whitespace-nowrap text-start text-gray-900 pt-8">
              {" "}
              JOB PAYMENT CRITERIA{" "}
            </div>
            <hr class="w-100" />
            <div class="flex flex-nowrap pb-5">
              <div class="sm:w-1/2 pt-5 ">
                <label for="type">Job Type</label> <br />
                <select id="jobType" name="jobType" onChange={handleChange}>
                  <option value="" selected disabled hidden>
                    Choose here
                  </option>
                  <option value="Internship">Internship</option>
                  <option value="Software Engineer">Software Engineer</option>
                  <option value="Senior Software Engineer">
                    Senior Software Engineer
                  </option>
                  <option value="Project Manager">Project Manager</option>
                </select>
              </div>

              <div class="sm:w-1/2 pt-5">
                <label for="payRange">Pay Range</label> <br />
                <select id="payRange" name="payRange" onChange={handleChange}>
                  <option value="" selected disabled hidden>
                    Choose here
                  </option>
                  <option value="10k - 20k">10k - 20k</option>
                  <option value="20k - 30k">20k - 30k</option>
                  <option value="30k - 40k">30k - 40k</option>
                  <option value="50k+">50k+</option>
                </select>
              </div>
            </div>
            <input class="hover:bg-indigo-300 " type="submit" />
          </div>

          <div class="sm:w-1/3 pr-4 pl-4">
            <div class="self-center text-2xl font-semibold whitespace-nowrap text-start text-gray-900 pt-8">
              {" "}
              Success Recruitments
            </div>
            {/* <div className="custom-file">
              <input type="file"
              className="custom-file-input"
              name="file"
              onChange={handlejobImage}/>

            </div> */}
          </div>
        </div>
      </div>
    </form>
  );
}

export default CompanyPost;
