import React, { useContext, useEffect } from "react";
import "../../App.css";
import { EmployeeContext } from "../../context/EmployeeContext";

export interface ITestSampleChildSubChild1Props{
    
}
export const TestSampleChildSubChild1: React.FC<ITestSampleChildSubChild1Props> = (props): React.ReactElement => {

    const emp = useContext(EmployeeContext);
    
    const onTextChange=(e:any)=>{
       const expecteName = e.target.value;
        emp.changeName(expecteName);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Test Sample Child1 SubChild1</h2>
                     {emp.empid} - {emp.name} -  {emp.salary}
                </div>
            </div>
            <div className="row">
                Change your name <input type="text" onChange={onTextChange} />
            </div>
        </div>
    )
};


 