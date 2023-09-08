import React, { memo, useEffect } from "react";
import { NavLink } from "react-router-dom";
 

export interface ITest2ChildProps{
    data: string;
}
const Test2Child: React.FC<ITest2ChildProps> = (props): React.ReactElement => {

     
    console.log("child2 render");
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                     
                     <h2>Test2 Child </h2>
                     
                </div>
            </div>
            
        </div>
    )
};
export default memo(Test2Child);


 