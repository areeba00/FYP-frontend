import React, { Component } from 'react';
import {useState} from "react";
import { Outlet, Link } from "react-router-dom";
import displayImage from "../../assets/02.png";
import { Steps } from 'primereact/steps';
import './register.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";

class RegisterLayout extends Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.items = [
            {
                label: 'Personal info',
            },
            {
                label: 'Education info',
            },
            {
                label: 'CV upload'
            },
        ];

    }
    render() { 
        return ( 
            <React.Fragment>

            <div class="flex items-center min-h-screen bg-gray-50">
                <div class="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
                    <div class="flex flex-col md:flex-row">
                        <div class="h-32 md:h-auto md:w-1/2">
                            <img class="object-cover w-full h-full" src={displayImage}
                                alt="register image" />
                        </div>
                        <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                            <div class="w-full">
                                <h1 class="mb-4 text-2xl font-bold text-center text-gray-900">
                                    Sign up
                                </h1>
                                <p class="mb-4 font-light text-center text-gray-900">
                                    Register to explore a world full of possibiltiies
                                </p>

                                <div className="steps">
                                    <Steps model={this.items} 
					                activeIndex={this.state.activeIndex}
                                    onSelect={(e) => this.setState({ activeIndex: e.index })} 
                                    readOnly={false}
                                        />
                                </div>
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment >
         );
    }
}
 
export default RegisterLayout;


// function RegisterLayout() {
    // const items = [
    //     {
    //         label: 'Personal info',
    //     },
    //     {
    //         label: 'Education info',
    //     },
    //     {
    //         label: 'CV upload'
    //     },
    // ];
//     const state = {};
//     return (
        // <React.Fragment>

        //     <div class="flex items-center min-h-screen bg-gray-50">
        //         <div class="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
        //             <div class="flex flex-col md:flex-row">
        //                 <div class="h-32 md:h-auto md:w-1/2">
        //                     <img class="object-cover w-full h-full" src={displayImage}
        //                         alt="register image" />
        //                 </div>
        //                 <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
        //                     <div class="w-full">
        //                         <h1 class="mb-4 text-2xl font-bold text-center text-gray-900">
        //                             Sign up
        //                         </h1>
        //                         <p class="mb-4 font-light text-center text-gray-900">
        //                             Register to explore a world full of possibiltiies
        //                         </p>

        //                         <div className="steps">
        //                             <Steps model={items} 
        //                                 />
        //                         </div>
        //                         <Outlet />
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        // </React.Fragment >
//     );
// }

// export default RegisterLayout;