import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

export interface IEmployeeProps{
    
}
export const Employee: React.FC<IEmployeeProps> = (props): React.ReactElement => {
    const params = useParams();
    
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Welcome to Employee Page</h2>
                    <h3>Hi Employee {params.empId}</h3>
                </div>
            </div>
        </div>
    )
};


 