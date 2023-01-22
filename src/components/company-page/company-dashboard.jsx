import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";
import { ProgressBar } from "primereact/progressbar";
import displayImage from "../../assets/graph.png";
import { BreadCrumb } from "primereact/breadcrumb";
import axios from "axios";

class CompanyDashboard extends Component {
  state = {
    value: 80,
    items: [{ label: "Dashboard" }],
    home: { icon: "pi pi-home", url: "http://localhost:3000/" },
  };
  displayValueTemplate = (value) => {
    return (
      <React.Fragment>
        {value}/<b>100</b>
      </React.Fragment>
    );
  };

  Users = (e) => {
    e.preventDefault();
    let data = {};
    axios
      .get("/api/users")
      .then((res) => {
        console.log(res.data);
      })
      .catch((Error) => {
        console.log(Error);
      });
  };
  render() {
    return (
      <React.Fragment>
        <div class="container mx-auto sm:px-4">
          <BreadCrumb model={this.state.items} home={this.state.home} />
          <div class="flex flex-wrap ">
            <div class="sm:w-2/3 pr-4 pl-4">
              <div class="self-center text-2xl font-semibold whitespace-nowrap text-start text-gray-900 pt-8">
                {" "}
                Overview{" "}
              </div>
              <div className="Data">
                <div class="self-center text-sm font-normal whitespace-nowrap text-start text-black pt-2 pb-2">
                  Technical Hiring{" "}
                </div>
                <ProgressBar
                  value={55}
                  displayValueTemplate={this.displayValueTemplate}
                ></ProgressBar>
              </div>
              <div className="Data">
                <div class="self-center text-sm font-normal whitespace-nowrap text-start text-black pt-2 pb-2">
                  Non Technical Hiring{" "}
                </div>
                <ProgressBar
                  value={55}
                  displayValueTemplate={this.displayValueTemplate}
                ></ProgressBar>
              </div>
              <div className="Data">
                <div class="self-center text-sm font-normal whitespace-nowrap text-start text-black pt-2 pb-2">
                  Month's Progress
                </div>
                <ProgressBar value={this.state.value}></ProgressBar>
              </div>
            </div>
            <div class="sm:w-1/3 pr-4 pl-4">
              <div class="self-center text-2xl font-semibold whitespace-nowrap text-start text-gray-900 pt-8">
                {" "}
                Success Recruitments
              </div>
              <img src={displayImage} alt="Logo" />
            </div>
          </div>
          <div class="flex flex-wrap ">
            <div className="container mx-auto mt-12">
              <div class="self-center text-2xl font-semibold whitespace-nowrap text-start text-gray-900 pb-8">
                {" "}
                Offer's Progress{" "}
              </div>
              <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-4">
                <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                  <div className="text-sm font-medium text-gray-500 truncate">
                    Offers extended
                  </div>
                  <div className="mt-1 text-3xl font-semibold text-center text-gray-900">
                    25
                  </div>
                </div>
                <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                  <div className="text-sm font-medium text-gray-500 truncate">
                    Offers accepted
                  </div>
                  <div className="mt-1 text-3xl font-semibold text-center text-gray-900">
                    10
                  </div>
                </div>
                <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                  <div className="text-sm font-medium text-gray-500 truncate">
                    Offers rejected
                  </div>
                  <div className="mt-1 text-3xl font-semibold text-center text-gray-900">
                    5
                  </div>
                </div>
                <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                  <div className="text-sm font-medium text-gray-500 truncate">
                    Offers pending
                  </div>
                  <div className="mt-1 text-3xl font-semibold text-center text-gray-900">
                    10
                  </div>
                </div>
                <button className="btn" type="submit" onClick={this.Users}>
                  get
                </button>
              </div>
            </div>
            {/* <div class="relative sm:flex-grow sm:flex-1">col-sm</div>
                        <div class="relative sm:flex-grow sm:flex-1">col-sm</div>
                        <div class="relative sm:flex-grow sm:flex-1">col-sm</div> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CompanyDashboard;
