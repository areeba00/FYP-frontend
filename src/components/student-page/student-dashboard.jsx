import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom";
import { ProgressBar } from 'primereact/progressbar';
import displayImage from "../../assets/graph.png";
import { BreadCrumb } from 'primereact/breadcrumb';


class StudentDashboard extends Component {
    state = {
        value: 80,
        items: [
            { label: 'Dashboard' },
        ],
        home: { icon: 'pi pi-home', url: 'http://localhost:3000/' },
    }
    displayValueTemplate = (value) => {
        return (
            <React.Fragment>
                {value}/<b>100</b>
            </React.Fragment>
        );
    }
    render() {

        return (
            <React.Fragment>
                <div class="container mx-auto sm:px-4">
                    <BreadCrumb model={this.state.items} home={this.state.home} />
                    <div class="flex flex-wrap ">
                        <div class="sm:w-2/3 pr-4 pl-4">
                            <div class="self-center text-2xl font-semibold whitespace-nowrap text-start text-gray-900 pt-8"> Overview </div>
                            <div className='Data'>
                                <div class="self-center text-sm font-normal whitespace-nowrap text-start text-black pt-2 pb-2">Technical Hiring </div>
                                <ProgressBar value={55} displayValueTemplate={this.displayValueTemplate}></ProgressBar>
                            </div>
                            <div className='Data'>
                                <div class="self-center text-sm font-normal whitespace-nowrap text-start text-black pt-2 pb-2">Non Technical Hiring </div>
                                <ProgressBar value={55} displayValueTemplate={this.displayValueTemplate}></ProgressBar>
                            </div>
                            <div className='Data'>
                                <div class="self-center text-sm font-normal whitespace-nowrap text-start text-black pt-2 pb-2">Month's Progress</div>
                                <ProgressBar value={this.state.value} ></ProgressBar>
                            </div>
                        </div>
                        <div class="sm:w-1/3 pr-4 pl-4">
                            <div class="self-center text-2xl font-semibold whitespace-nowrap text-center text-gray-900 pt-8"> About me</div>
                            <p class="pt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                    <div class="flex flex-wrap ">
                        <div className="container mx-auto mt-12">
                            <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
                                <div class="self-center text-2xl font-semibold whitespace-nowrap text-start text-gray-900 pb-0"> Jobs Applied </div>
                                <div class="self-center text-2xl font-semibold whitespace-nowrap text-start text-gray-900 pb-0"> Jobs Recommended </div>
                            </div>
                            <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
                                <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                                    <div className="text-sm font-medium text-gray-900 truncate flex flex-nowrap ">
                                        <i className="pi pi-building pr-2"></i>
                                        Systems Limited
                                        <i className="pi pi-map-marker pr-2 pl-5 ml-64"></i>
                                        Lahore, Pakistan
                                    </div>
                                    <div className="mt-1 text-sm font-semibold text-gray-600 pl-5 ">
                                        Software Engineer | Full Time  <br />
                                    </div>
                                    <div className="text-sm font-medium text-gray-900 truncate mt-4 ">
                                        <i className="pi pi-building pr-2"></i>
                                        Arbisoft
                                        <i className="pi pi-map-marker pr-2 pl-5 ml-64"></i>
                                            Lahore, Pakistan

                                    </div>
                                    <div className="mt-1 text-sm font-semibold text-gray-600 pl-5 ">
                                        Software Engineer | Full Time  <br />
                                    </div>
                                </div>
                                <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                                    <div className="text-sm font-medium text-gray-900 truncate flex flex-nowrap ">
                                        <i className="pi pi-building pr-2"></i>
                                        10 Pearls
                                        <i className="pi pi-map-marker pr-2 pl-5 ml-64"></i>
                                        Lahore, Pakistan
                                    </div>
                                    <div className="mt-1 text-sm font-semibold text-gray-600 pl-5 ">
                                        Software Engineer | Full Time  <br />
                                    </div>
                                    <div className="text-sm font-medium text-gray-900 truncate mt-4 ">
                                        <i className="pi pi-building pr-2"></i>
                                        Devsinc
                                        <i className="pi pi-map-marker pr-2 pl-5 ml-64"></i>
                                        Lahore, Pakistan
                                    </div>
                                    <div className="mt-1 text-sm font-semibold text-gray-600 pl-5 ">
                                        Software Engineer | Full Time  <br />
                                    </div>
                                </div>
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

export default StudentDashboard;