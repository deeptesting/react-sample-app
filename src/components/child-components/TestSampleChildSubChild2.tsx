import React, { useContext, useEffect } from "react";
import "../../App.css";
import { EmployeeContext } from "../../context/EmployeeContext";

export interface ITestSampleChildSubChild2Props{
    
}
export const TestSampleChildSubChild2: React.FC<ITestSampleChildSubChild2Props> = (props): React.ReactElement => {

    const emp = useContext(EmployeeContext);

    const onTextChange=(e:any)=>{
        const expecteSalary = parseInt(e.target.value);
         emp.changeSalary(expecteSalary);
     }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Test Sample Child1 SubChild2</h2>
                    {emp.empid} - {emp.name} -  {emp.salary}
                </div>
            </div>
            <div className="row">
                Change your Salary <input type="text" onChange={onTextChange} />
            </div>
        </div>
    )
};


 