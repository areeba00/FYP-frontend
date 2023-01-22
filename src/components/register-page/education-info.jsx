import React from "react";
import { Outlet, Link } from "react-router-dom";
import displayImage from "../../assets/02.png";
import { InputText } from 'primereact/inputtext';
import { Steps } from 'primereact/steps';
import './register.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";

function EducationInfo() {

    return (
        <React.Fragment>
            <span className="p-float-label">
                <InputText id="username" />
                <label htmlFor="username">Username</label>
            </span>

            <span className="p-float-label">
                <InputText id="username" />
                <label htmlFor="username">Username</label>
            </span>

        </React.Fragment >
    );
}

export default EducationInfo;