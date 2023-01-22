import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom";
import { ProgressBar } from 'primereact/progressbar';
import displayImage from "../../assets/graph.png";
import { BreadCrumb } from 'primereact/breadcrumb';
import './student.css'


class StudentProfile extends Component {
    state = {
        items: [
            { label: 'Profile' },
        ],
        home: { icon: 'pi pi-home', url: 'http://localhost:3000/' },
    }
    render() {

        return (
            <React.Fragment>
                <div class="container mx-auto sm:px-4">
                    <BreadCrumb model={this.state.items} home={this.state.home} />
                    <div class="flex flex-wrap ">
                        <div class="sm:w-2/3 pr-4 pl-4">
                            <div class="self-center text-2xl font-semibold whitespace-nowrap text-start text-gray-900 pt-8"> About </div>
                            <p class="pt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <div class="flex flex-wrap ">
                        <div className="container mx-auto mt-12">

                            <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-1">
                                <div className="w-full px-4 py-2 bg-white rounded-lg shadow">
                                    <div className="text-md font-medium text-gray-900 truncate">
                                        Education
                                    </div>

                                    {/* <div class="flex flex-nowrap"> */}
                                        <div className="mt-1 text-sm font-semibold text-gray-500 pl-5">
                                            January 2012- <br/> February 2016
                                        </div>
                                        <div className="mt-1 text-lg font-semibold text-gray-900 pl-5">
                                            University of Engineering and Technology <br/>
                                        <div className="text-sm font-medium text-gray-700 truncate flex flex-nowrap pt-2 ">
                                            <i className="pi pi-star pr-2"></i>
                                            Grade Point Average 3.7 <br/>
                                        </div>
                                        <div className="text-sm font-medium text-gray-700 truncate flex flex-nowrap pt-2 ">
                                            <i className="pi pi-map-marker pr-2"></i>
                                            Lahore, Pakistan
                                        </div>

                                        </div>
                                    {/* </div> */}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-1">
                                <div className="w-full px-4 py-2 bg-white rounded-lg shadow">
                                    <div className="text-md font-medium text-gray-900 truncate">
                                        Experience
                                    </div>

                                    {/* <div class="flex flex-nowrap"> */}
                                        <div className="mt-1 text-sm font-semibold text-gray-500 pl-5">
                                            January 2012- <br/> February 2016
                                        </div>
                                        <div className="mt-1 text-lg font-semibold text-gray-900 pl-5">
                                            UX Designer <br/>
                                        <div className="text-sm font-medium text-gray-700 truncate pt-2 ">
                                            <i className="pi pi-map-marker pr-2"></i>
                                            Lahore, Pakistan
                                        </div>
                                        <div className="text-sm font-medium text-gray-700 truncate pt-2 ">
                                            <i className="pi pi-comment pr-2"></i>
                                            Develoed a UI of a bicycle sharing system
                                        </div>

                                        </div>
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                        {/* <div class="relative sm:flex-grow sm:flex-1">col-sm</div>
                        <div class="relative sm:flex-grow sm:flex-1">col-sm</div>
                        <div class="relative sm:flex-grow sm:flex-1">col-sm</div> */}
                    </div>
                        </div>

                        <div class="sm:w-1/3 pr-4 pl-4">
                            {/* <div class="self-center text-2xl font-semibold whitespace-nowrap text-center text-gray-900 pt-8"> Social Links</div>
                            <div class="text-center pt-4">
                            <i className="pi pi-envelope pr-2 pl-5"></i>
                                    ryamadams@gmail.com
                            </div>
                            <div class="text-center pt-4">
                            <i className="pi pi-linkedin pr-2 pl-5"></i>
                                    ryamadams@gmail.com
                            </div>
                            <div class="text-center pt-4">
                            <i className="pi pi-github pr-2 pl-5"></i>
                                    ryamadams@gmail.com
                            </div> */}

                    <div class="flex flex-wrap ">
                        <div className="container mx-auto mt-12">

                         <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-1">
                              <div className="w-full px-4 py-2 bg-white rounded-lg shadow">
                              <div className="text-md font-medium text-gray-900 truncate text-center">
                                        Contact
                                    </div>
                                    <div class=" pt-4">
                                        <i className="pi pi-envelope pr-2 pl-5"></i>
                                         ryamadams@gmail.com
                                    </div>
                                        <div class=" pt-4">
                                            <i className="pi pi-linkedin pr-2 pl-5"></i>
                                            ryamadams@gmail.com
                                        </div>
                                    <div class=" pt-4">
                                    <i className="pi pi-github pr-2 pl-5"></i>
                                            ryamadams@gmail.com
                                    </div>
                                    <hr class="mt-3"/>
                                    <div className="text-md font-medium text-gray-900 truncate text-center pt-5">
                                        Skills
                                    </div>
                                    <p className="ellipse text-center hover:bg-indigo-300"> HTML</p>
                                    <p className="ellipse text-center hover:bg-indigo-300"> CSS</p>
                                    <p className="ellipse text-center hover:bg-indigo-300"> Bootstrap</p>
                                    <p className="ellipse text-center hover:bg-indigo-300"> React JS </p>
                                    <p className="ellipse text-center hover:bg-indigo-300"> Node</p>
                                </div>
                         </div>
                        </div>
                     </div>
                     
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default StudentProfile;