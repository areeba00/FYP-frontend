import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom";
import { ProgressBar } from 'primereact/progressbar';
import displayImage from "../../assets/education.png";
import { BreadCrumb } from 'primereact/breadcrumb';
import './student.css'


class Messages extends Component {
    state = {
        items: [
            { label: 'Messages' },
        ],
        home: { icon: 'pi pi-home', url: 'http://localhost:3000/' },
    }
    render() {

        return (
            <React.Fragment>
                <div class="container mx-auto sm:px-4">
                    <BreadCrumb model={this.state.items} home={this.state.home} />
                    {/* <div class="flex flex-wrap "> */}
                        <div class="sm pr-4 pl-4">
                            <div class="self-center text-2xl font-semibold whitespace-nowrap text-start text-gray-900 pt-8"> Messages </div>
                            <div className="container mx-auto mt-4">
                            <div class="grid gap-y-4 mb-6 ml-2 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-1">
                    <Link to="/">
                        <figure class="rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                        <div className="text-md font-medium text-gray-700 truncate pt-1 pb-1">
                                            <i className="pi pi-star pr-2 pl-2 pt-1"></i>
                                            Devsinc - This is to inform you that you have been selected for the position of Senior Software Engineer.
                                        </div>
                        </figure>
                    </Link>
                    <Link to="/">
                        <figure class="rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                        <div className="text-md font-medium text-gray-700 truncate ">
                                            <i className="pi pi-star pr-2 pl-2 pt-1"></i>
                                            Devsinc - This is to inform you that you have been selected for the position of Senior Software Engineer.
                                        </div>
                        </figure>
                    </Link>


                    <div class="pb-8"></div>

                </div>
                                </div>


                        </div>
                     
                        {/* </div> */}
                    </div>

            </React.Fragment>
        );
    }
}

export default Messages;










                <div class="container mx-auto sm:px-4">
                    <BreadCrumb model={this.state.items} home={this.state.home} />
                    {/* <div class="flex flex-wrap "> */}
                        <div class="sm pr-4 pl-4">
                            <div class="self-center text-2xl font-semibold whitespace-nowrap text-start text-gray-900 pt-8"> Messages </div>
                            <div className="container mx-auto mt-4">
                            <div class="grid gap-y-4 mb-6 ml-2 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-1">
                    <Link to="/">
                        <figure class="rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                        <div className="text-md font-medium text-gray-700 truncate pt-1 pb-1">
                                            <i className="pi pi-star pr-2 pl-2 pt-1"></i>
                                            Devsinc - This is to inform you that you have been selected for the position of Senior Software Engineer.
                                        </div>
                        </figure>
                    </Link>
                    <Link to="/">
                        <figure class="rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                        <div className="text-md font-medium text-gray-700 truncate ">
                                            <i className="pi pi-star pr-2 pl-2 pt-1"></i>
                                            Devsinc - This is to inform you that you have been selected for the position of Senior Software Engineer.
                                        </div>
                        </figure>
                    </Link>

                    <Link to="/">
                        <figure class="rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                        <div className="text-md font-medium text-gray-700 truncate">
                                            <i className="pi pi-star pr-2 pl-2 pt-1"></i>
                                            Devsinc - This is to inform you that you have been selected for the position of Senior Software Engineer.
                                        </div>
                        </figure>
                    </Link>

                    <Link to="/">
                        <figure class="rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                        <div className="text-md font-medium text-gray-700 truncate">
                                            <i className="pi pi-star pr-2 pl-2 pt-1"></i>
                                            Devsinc - This is to inform you that you have been selected for the position of Senior Software Engineer.
                                        </div>
                        </figure>
                    </Link>

                    <div class="pb-8"></div>

                </div>
                                </div>


                        </div>
                     
                        {/* </div> */}
                    </div>