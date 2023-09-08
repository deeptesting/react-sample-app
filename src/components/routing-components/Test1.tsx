import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import  Test1Child from "../child-components/Test1Child";
import Test2Child from "../child-components/Test2Child";
 

export interface ITest1Props{
    
}
export const Test1: React.FC<ITest1Props> = (props): React.ReactElement => {

    const [count , setCount]= React.useState<number>(0);
    const [count1 , setCount1]= React.useState<number>(0);

    const clickPlus= React.useCallback(()=>{
        setCount(count+1);
    },[])

    const clickMinus= React.useCallback(()=>{
        setCount(count-1);
    },[])

    const onDisplay = React.useCallback(  (data:string)=>{
        alert(data);
        setCount(count+1);
    }, [])


    console.log("parent render");
    

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Count= {count}</h2>
                     
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button className="btn btn-success" onClick={clickPlus}>PLUS</button>
                    <button className="btn btn-primary" onClick={clickMinus}>MINUS</button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                     <Test1Child data="abcd" displayData={onDisplay}></Test1Child>
                     {/* <Test2Child data="abcd"></Test2Child> */}
                </div>
            </div>
        </div>
    )
};


 