import React, { useEffect } from "react";
import "../../App.css";
import { TestSampleChildSubChild1 } from "./TestSampleChildSubChild1";
import { TestSampleChildSubChild2 } from "./TestSampleChildSubChild2";

export interface ITestSampleChildProps{
    
}
export const TestSampleChild: React.FC<ITestSampleChildProps> = (props): React.ReactElement => {

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Test Sample Child1</h2>
                   
                </div>
            </div>
            <div className="row section-border">
                <TestSampleChildSubChild1></TestSampleChildSubChild1>
                 
            </div>
            <div className="row section-border">
                <TestSampleChildSubChild2></TestSampleChildSubChild2>
            </div>
        </div>
    )
};


 