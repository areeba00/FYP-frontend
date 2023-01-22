import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import displayImage from "../../assets/graph.png";
import "./createcv.css";
import axios from "axios";

function CV() {
  const [inputs, setInputs] = useState({});
  const clickMe = () => {
    let text = document.getElementById("popup");
    text.classList.toggle("hide");
    text.classList.toggle("show");
  };

  const clickMe1 = () => {
    let text = document.getElementById("popup1");
    text.classList.toggle("hide");
    text.classList.toggle("show");
  };

  const clickMe2 = () => {
    let text = document.getElementById("popup2");
    text.classList.toggle("hide");
    text.classList.toggle("show");
  };

  const clickMe3 = () => {
    let text = document.getElementById("popup3");
    text.classList.toggle("hide");
    text.classList.toggle("show");
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("/api/students/CV", inputs).then(function (response) {
      console.log(response);
    });

    console.log(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container mx-auto text-center ">
        <div class="pr-4 pl-4">
          <div class="self-center font-normal whitespace-nowrap text-start text-gray-900 pt-8">
            {" "}
            TELL US ABOUT YOUR SELF{" "}
          </div>
          <hr class="w-100" />

          <div class="pt-5 left">
            <label>Full Name </label> <br />
            <input
              class="pl-3 "
              placeholder="Enter your full name"
              type="text"
              name="fullName"
              value={inputs.fullName || ""}
              onChange={handleChange}
            />
          </div>

          <div class="pt-5 left">
            <label>Email</label> <br />
            <input
              class="pl-3 "
              placeholder="Enter your Email"
              type="text"
              name="email"
              value={inputs.email || ""}
              onChange={handleChange}
            />
          </div>

          <div class="pt-5 left">
            <label>Contact Number</label> <br />
            <input
              class="pl-3 "
              placeholder="Enter your contact number"
              type="text"
              name="contactNumber"
              value={inputs.contactNumber || ""}
              onChange={handleChange}
            />
          </div>

          <div class="pt-5 left">
            <label>Address</label> <br />
            <input
              class="pl-3 "
              placeholder="Enter your address"
              type="text"
              name="address"
              value={inputs.address || ""}
              onChange={handleChange}
            />
          </div>
          <div class="self-center font-normal whitespace-nowrap text-start text-gray-900 pt-8">
            {" "}
            Experience{" "}
          </div>
          <hr class="w-100" />

          <div class="pt-5 left">
            <label>Skills </label> <br />
            <input
              class="pl-3 "
              placeholder="Describe your skills"
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
                id="experiences"
                name="experience"
                onChange={handleChange}
              >
                <option value="" selected disabled hidden>
                  Choose here
                </option>
                <option value="Graduate">Graduate</option>
                <option value="Experienced 1-2 years">
                  Experienced 1-2 years
                </option>
                <option value="Experienced 2+ years">
                  Experienced 2+ years
                </option>
                <option value="Masters">Masters</option>
                <option value="Studying">Studying</option>
              </select>
            </div>
          </div>

          {/* <button id="theButton" onclick={clickMe}>Click me!</button> */}
          <div className="left">
            <button className="button" id="theButton" onClick={clickMe}>
              + Date of birth{" "}
            </button>
            <input
              className="margin"
              type="text"
              placeholder="DOB"
              name="DOB"
              id="popup"
              class="hide"
              value={inputs.DOB || ""}
              onChange={handleChange}
            />

            <button className="button" id="theButton" onClick={clickMe1}>
              + Internships{" "}
            </button>
            <div name="popup" id="popup1" class="hide">
              <div class="pt-5 left">
                <label>Job Position </label> <br />
                <input
                  class="pl-3 "
                  placeholder="Enter the name or title of your job"
                  type="text"
                  name="title"
                  value={inputs.title || ""}
                  onChange={handleChange}
                />
              </div>

              <div class="pt-5 left">
                <label>Start Date </label> <br />
                <input
                  class="pl-3 "
                  placeholder="Enter the name or title of your job"
                  type="date"
                  name="title"
                  value={inputs.title || ""}
                  onChange={handleChange}
                />
              </div>

              <div class="pt-5 left">
                <label>End Date </label> <br />
                <input
                  class="pl-3 "
                  placeholder="Enter the name or title of your job"
                  type="date"
                  name="title"
                  value={inputs.title || ""}
                  onChange={handleChange}
                />
                <div class="pt-5 left">
                  <label>Description </label> <br />
                  <input
                    class="pl-3 "
                    placeholder="Describe the job in few words"
                    type="textarea"
                    name="description"
                    value={inputs.description || ""}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <button className="button" id="theButton" onClick={clickMe2}>
              + Certificates{" "}
            </button>
            <div name="popup" id="popup2" class="hide">
              <div class="pt-5 left">
                <label>Certificate</label> <br />
                <input
                  class="pl-3 "
                  placeholder="Enter the name or title of your job"
                  type="text"
                  name="title"
                  value={inputs.title || ""}
                  onChange={handleChange}
                />
              </div>

              <div class="pt-5 left">
                <label>Awarded On </label> <br />
                <input
                  class="pl-3 "
                  placeholder="Enter the name or title of your job"
                  type="date"
                  name="title"
                  value={inputs.title || ""}
                  onChange={handleChange}
                />
              </div>

              <div class="pt-5 left">
                <label>Upload Certificate</label> <br />
                <input
                  class="pl-3 "
                  placeholder="Enter the name or title of your job"
                  type="file"
                  name="title"
                  value={inputs.title || ""}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button className="button" id="theButton" onClick={clickMe3}>
              + Skills{" "}
            </button>
            <div name="popup" id="popup3" class="hide">
              <div class="pt-5 left">
                <label>Skill</label> <br />
                <input
                  class="pl-3 "
                  placeholder="Enter the name or title of your job"
                  type="text"
                  name="title"
                  value={inputs.title || ""}
                  onChange={handleChange}
                />
              </div>

              <div class="flex flex-nowrap">
                <div class="sm:w-1/2 pt-5 ">
                  <label for="available">Level</label> <br />
                  <select id="available" name="available">
                    <option value={inputs.type || ""} onChange={handleChange}>
                      Average
                    </option>
                    <option value={inputs.type || ""} onChange={handleChange}>
                      good
                    </option>
                    <option value={inputs.type || ""} onChange={handleChange}>
                      Excellent
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <input class="hover:bg-indigo-300 " type="submit" />
        </div>
      </div>
    </form>
  );
}

export default CV;
