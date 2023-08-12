import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { employeesData } from "../../data/employee-data";
import { EmployeeTable } from "../modules/EmployeeTable";

export interface IHomeProps{
    
}
export const Home: React.FC<IHomeProps> = (props): React.ReactElement => {

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Welcome to Home Page</h2>
                    <NavLink className="btn btn-primary" to="/old-application" >
                        Go to Application
                    </NavLink>
                </div>
            </div>
            <div className="row">
                <EmployeeTable employees={employeesData} >
                    <span style={{backgroundColor:"greenyellow"}}>
                      This is employees data
                    </span>
                </EmployeeTable>
            </div>
        </div>
    )
};


 