import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import displayImage from "../../assets/companyLogo.jpg";
import "./company.css";
import "./jobposting.css";

function JobPost() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };

  return (
    <article>
      <div class="job-card">
        <div class="company-logo-img">
          <img src={displayImage} alt="companyLogo" />
        </div>
        <div class="job-title">Software Engineer</div>
        <div class="company-name">Systems Limited</div>
        <div class="skills-container">
          <div class="skill">Photoshop</div>
          <div class="skill">Illustrator</div>
          <div class="skill">HTML</div>
        </div>
        <button class="apply">Edit</button>
        <button class="save">Delete</button>
        <a href="#"></a>
      </div>

      <div class="job-card">
        <div class="company-logo-img">
          <img src={displayImage} alt="companyLogo" />
        </div>
        <div class="job-title">Product Designer</div>
        <div class="company-name">Systems Limited</div>
        <div class="skills-container">
          <div class="skill">Photoshop</div>
          <div class="skill">Illustrator</div>
          <div class="skill">HTML</div>
        </div>
        <button class="apply">Edit</button>
        <button class="save">Delete</button>
        <a href="#"></a>
      </div>

      <div class="job-card">
        <div class="company-logo-img">
          <img src={displayImage} alt="companyLogo" />
        </div>
        <div class="job-title">Business Analyst</div>
        <div class="company-name">Systems Limited</div>
        <div class="skills-container">
          <div class="skill">Photoshop</div>
          <div class="skill">Illustrator</div>
          <div class="skill">HTML</div>
        </div>
        <button class="apply">Edit</button>
        <button class="save">Delete</button>
        <a href="#"></a>
      </div>
    </article>
  );
}

export default JobPost;
