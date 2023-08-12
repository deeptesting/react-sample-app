import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

export interface IContactUsProps{
    
}
export const ContactUs: React.FC<IContactUsProps> = (props): React.ReactElement => {

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Welcome to ContactUs Page</h2>
                    <NavLink className="btn btn-primary" to="/old-application" >
                        Go to Application
                    </NavLink>
                </div>
            </div>
        </div>
    )
};


 