import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { EmployeeModel } from "../../model/employee.model";
import { Ellipsis } from "../shared-components/Ellipsis";

export interface IEmployeeProps {
    employees: EmployeeModel[],
    children: React.ReactNode
}
export const EmployeeTable: React.FC<IEmployeeProps> = (props): React.ReactElement => {
    return (
        <>
        <div>
            {props.children}
        </div>
            <table border={1}>
                {
                    props.employees.map((emp, index) => (
                        <tr>
                            <td>{emp.empid}</td>
                            <td>
                            <Ellipsis maxCharacterLen={10} isTooltipRequired={true}>{emp.name}</Ellipsis>                                 
                            </td>
                            <td>{emp.salary}</td>
                            <td>
                                <NavLink className="btn btn-primary" to={`/employee/${emp.empid}`} >
                                    Go to <Ellipsis maxCharacterLen={10}>{emp.name}</Ellipsis> 
                                </NavLink>
                            </td>
                        </tr>
                    ))
                }
            </table>
        </>
    )
};


