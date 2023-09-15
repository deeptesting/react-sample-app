import { createContext } from "react";
import { NamedTupleMember } from "typescript";
import { EmployeeModel } from "../model/employee.model";

export interface EmployeeContextModel extends EmployeeModel{

    changeName : (name:string) => void, //Not state related
    changeSalary : (sal:number) => void //Not state related
}

export const EmployeeContext = createContext<EmployeeContextModel>({
    empid: 101,
    name: "Deep",
    salary: 25000,
    changeName: (name:string)=>{},
    changeSalary : (sal:number) =>{}
});