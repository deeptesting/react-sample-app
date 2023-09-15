import React, { createContext, useCallback, useEffect } from "react";
import "../../App.css";
import { EmployeeContext } from "../../context/EmployeeContext";
import { EmployeeModel } from "../../model/employee.model";
import { TestSampleChild } from "../child-components/TestSampleChild";

export interface ITestSampleProps {

}
export const TestSample: React.FC<ITestSampleProps> = (props): React.ReactElement => {

    const empInitialValue = {
        empid: 102,
        name: "Deepjyoty",
        salary: 35000 
    };

    const [empValue, setEmpValue] = React.useState(empInitialValue);

     const changeName = useCallback((_name:string)=>{
        setEmpValue(prevEmp => ({...prevEmp, name: _name }));
     },[]);


     const changeSalary = useCallback((_salary:number)=>{
        setEmpValue(prevEmp => ({...prevEmp, salary: _salary }));
     },[]);



    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Welcome to Test Sample Page</h2>

                </div>
            </div>
            <div className="row section-border">
                <EmployeeContext.Provider value={
                    {...empValue, changeName, changeSalary }
                }>
                    <TestSampleChild></TestSampleChild>
                </EmployeeContext.Provider>
                
            </div>
        </div>
    )
};


