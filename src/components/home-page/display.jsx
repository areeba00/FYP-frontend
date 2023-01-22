import React from "react";
import displayImage from "../../assets/01.png";

function Display
    () {
    return (
        <React.Fragment>
            <div class=" bg-cover bg-center" >
                <img src={displayImage} alt="Logo" />
            </div>
        </React.Fragment>
    );
}

export default Display