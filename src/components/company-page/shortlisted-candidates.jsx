import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import "./company.css";
import "./jobposting.css";
import "./ShortlistedCandidates.css";
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css";
// // integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=" crossorigin="anonymous" />

function ShortListed() {
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
    <div class="container mt-3 mb-4">
      <div class="col-lg-9 mt-4 mt-lg-0">
        <div class="row">
          <div class="col-md-12">
            <div class="user-dashboard-info-box table-responsive mb-0 bg-white p-4 shadow-sm">
              <table class="table manage-candidates-top mb-0">
                <thead>
                  <tr>
                    <th>Candidate Name</th>
                    <th class="text-center">Status</th>
                    <th class="action text-right"> Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="candidates-list">
                    <td class="title">
                      <div class="thumb">
                        <img
                          class="img-fluid"
                          src="https://bootdey.com/img/Content/avatar/avatar7.png"
                          alt=""
                        />
                      </div>
                      <div class="candidate-list-details">
                        <div class="candidate-list-info">
                          <div class="candidate-list-title">
                            <h5 class="mb-0">
                              <a href="#">Zoha Mustafa</a>
                            </h5>
                          </div>
                          <div class="candidate-list-option">
                            <ul class="list-unstyled">
                              <li>
                                <i class="fas fa-filter pr-1"></i>Information
                                Technology
                              </li>
                              <li>
                                <i class="fas fa-map-marker-alt pr-1"></i>UET
                                Lahore
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="candidate-list-favourite-time text-center">
                      <a
                        class="candidate-list-favourite order-2 text-danger"
                        href="#"
                      >
                        <i class="pi pi-heart-fill"></i>
                      </a>
                      <span class="candidate-list-time order-1">
                        {" "}
                        Shortlisted
                      </span>
                    </td>

                    <td>
                      <div class="icon">
                        <ul class="list-unstyled mb-4 d-flex justify-content-end">
                          <a
                            href="#"
                            class="text-info"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Edit"
                          >
                            <i class="pi pi-pencil"></i>
                          </a>

                          <a
                            href="#"
                            class="text-danger"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Delete"
                          >
                            <i class="  pi pi-trash"></i>
                          </a>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr class="candidates-list">
                    <td class="title">
                      <div class="thumb">
                        <img
                          class="img-fluid"
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          alt=""
                        />
                      </div>
                      <div class="candidate-list-details">
                        <div class="candidate-list-info">
                          <div class="candidate-list-title">
                            <h5 class="mb-0">
                              <a href="#">Areeba Khawar</a>
                            </h5>
                          </div>
                          <div class="candidate-list-option">
                            <ul class="list-unstyled">
                              <li>
                                <i class="fas fa-filter pr-1"></i>Human
                                Resources
                              </li>
                              <li>
                                <i class="fas fa-map-marker-alt pr-1"></i>UET
                                Lahore
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="candidate-list-favourite-time text-center">
                      <a
                        class="candidate-list-favourite order-2 text-danger"
                        href="#"
                      >
                        <i class="pi pi-heart-fill"></i>
                      </a>
                      <span class="candidate-list-time order-1">
                        {" "}
                        Shortlisted
                      </span>
                    </td>
                    <td>
                      <div class="icon">
                        <ul class="list-unstyled mb-4 d-flex justify-content-end">
                          <a
                            href="#"
                            class="text-info"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Edit"
                          >
                            <i class="  pi pi-pencil"></i>
                          </a>

                          <a
                            href="#"
                            class="text-danger"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Delete"
                          >
                            <i class="  pi pi-trash"></i>
                          </a>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr class="candidates-list">
                    <td class="title">
                      <div class="thumb">
                        <img
                          class="img-fluid"
                          src="https://bootdey.com/img/Content/avatar/avatar2.png"
                          alt=""
                        />
                      </div>
                      <div class="candidate-list-details">
                        <div class="candidate-list-info">
                          <div class="candidate-list-title">
                            <h5 class="mb-0">
                              <a href="#">Haadia Aamir</a>
                            </h5>
                          </div>
                          <div class="candidate-list-option">
                            <ul class="list-unstyled">
                              <li>
                                <i class="fas fa-filter pr-1"></i>Recruitment
                                Consultancy
                              </li>
                              <li>
                                <i class="fas fa-map-marker-alt pr-1"></i>UET
                                Lahore
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="candidate-list-favourite-time text-center">
                      <a
                        class="candidate-list-favourite order-2 text-danger"
                        href="#"
                      >
                        <i class="pi pi-heart-fill"></i>
                      </a>
                      <span class="candidate-list-time order-1">
                        {" "}
                        Shortlisted
                      </span>
                    </td>
                    <td>
                      <div class="icon">
                        <ul class="list-unstyled mb-4 d-flex justify-content-end">
                          <a
                            href="#"
                            class="text-info"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Edit"
                          >
                            <i class="  pi pi-pencil"></i>
                          </a>

                          <a
                            href="#"
                            class="text-danger"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Delete"
                          >
                            <i class="  pi pi-trash"></i>
                          </a>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr class="candidates-list">
                    <td class="title">
                      <div class="thumb">
                        <img
                          class="img-fluid"
                          src="https://bootdey.com/img/Content/avatar/avatar3.png"
                          alt=""
                        />
                      </div>
                      <div class="candidate-list-details">
                        <div class="candidate-list-info">
                          <div class="candidate-list-title">
                            <h5 class="mb-0">
                              <a href="#">Misbah Sahar</a>
                            </h5>
                          </div>
                          <div class="candidate-list-option">
                            <ul class="list-unstyled">
                              <li>
                                <i class="fas fa-filter pr-1"></i>Human
                                Resources
                              </li>
                              <li>
                                <i class="fas fa-map-marker-alt pr-1"></i>UET
                                Lahore
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="candidate-list-favourite-time text-center">
                      <a
                        class="candidate-list-favourite order-2 text-danger"
                        href="#"
                      >
                        <i class="pi pi-heart-fill"></i>
                      </a>
                      <span class="candidate-list-time order-1">
                        {" "}
                        Shortlisted
                      </span>
                    </td>
                    <td>
                      <div class="icon">
                        <ul class="list-unstyled mb-4 d-flex justify-content-end">
                          <a
                            href="#"
                            class="text-info"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Edit"
                          >
                            <i class="  pi pi-pencil"></i>
                          </a>

                          <a
                            href="#"
                            class="text-danger"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Delete"
                          >
                            <i class="  pi pi-trash"></i>
                          </a>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr class="candidates-list">
                    <td class="title">
                      <div class="thumb">
                        <img
                          class="img-fluid"
                          src="https://bootdey.com/img/Content/avatar/avatar4.png"
                          alt=""
                        />
                      </div>
                      <div class="candidate-list-details">
                        <div class="candidate-list-info">
                          <div class="candidate-list-title">
                            <h5 class="mb-0">
                              <a href="#">Rimsha Zaib</a>
                            </h5>
                          </div>
                          <div class="candidate-list-option">
                            <ul class="list-unstyled">
                              <li>
                                <i class="fas fa-filter pr-1"></i>Information
                                Technology
                              </li>
                              <li>
                                <i class="fas fa-map-marker-alt pr-1"></i>UET
                                Lahore
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="candidate-list-favourite-time text-center">
                      <a
                        class="candidate-list-favourite order-2 text-danger"
                        href="#"
                      >
                        <i class="pi pi-heart-fill"></i>
                      </a>
                      <span class="candidate-list-time order-1">
                        {" "}
                        Shortlisted
                      </span>
                    </td>
                    <td>
                      <div class="icon">
                        <ul class="list-unstyled mb-4 d-flex justify-content-end">
                          <a
                            href="#"
                            class="text-info"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Edit"
                          >
                            <i class="  pi pi-pencil"></i>
                          </a>

                          <a
                            href="#"
                            class="text-danger"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Delete"
                          >
                            <i class="  pi pi-trash"></i>
                          </a>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShortListed;

// <article>
// <div class="job-card">
//  <div class="company-logo-img">
//  <img src={displayImage} alt="companyLogo" />
//  </div>
//  <div class="job-title">Misbah Sahar</div>
//  <div class="company-name">UET Lahore</div>
//  <div class="skills-container">
//    <div class="skill">Photoshop</div>
//    <div class="skill">Illustrator</div>
//    <div class="skill">HTML</div>
//  </div>
//  <button class="apply">Edit</button>
//  <button class="save">Delete</button>
//  <a href="#"></a>
// </div>

// <div class="job-card">
// <div class="company-logo-img">
// <img src={displayImage} alt="companyLogo" />
// </div>
// <div class="job-title">Product Designer</div>
// <div class="company-name">Systems Limited</div>
// <div class="skills-container">
// <div class="skill">Photoshop</div>
// <div class="skill">Illustrator</div>
// <div class="skill">HTML</div>
// </div>
// <button class="apply">Edit</button>
// <button class="save">Delete</button>
// <a href="#"></a>
// </div>

// <div class="job-card">
// <div class="company-logo-img">
// <img src={displayImage} alt="companyLogo" />
// </div>
// <div class="job-title">Business Analyst</div>
// <div class="company-name">Systems Limited</div>
// <div class="skills-container">
// <div class="skill">Photoshop</div>
// <div class="skill">Illustrator</div>
// <div class="skill">HTML</div>
// </div>
// <button class="apply">Edit</button>
// <button class="save">Delete</button>
// <a href="#"></a>
// </div>
// </article>
