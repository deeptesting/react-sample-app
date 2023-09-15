import React, { memo, useEffect } from "react";
import { NavLink } from "react-router-dom";
 
const expensiveCalculation = (num: number) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
};


export interface ITest1ChildProps{
    data: string;
    displayData: (data: string)=>void;
}
const Test1Child: React.FC<ITest1ChildProps> = (props): React.ReactElement => {

    const [count , setCount]= React.useState<number>(0);
    const clickPlus=()=>{
        setCount(count+1);
    }
    const clickMinus=()=>{
        setCount(count-1);
    }
    const onClickShowData = ()=>{
        props.displayData(props.data);
    }

    const onClickShowData1 = React.useCallback(()=>{
        props.displayData(props.data);
    },[props.data])

    //const data = expensiveCalculation(count);

    const data = 10; 
    // React.useMemo(()=> 
    //     expensiveCalculation(count)
    // ,[count]);

    console.log("child render data = "+data);
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                     
                     <h2>Test1 Child count ={count}  data ={data} </h2>
                     <button className="btn btn-secondary" onClick={onClickShowData}>SHOW DATA</button>
                
                     <button className="btn btn-success" onClick={clickPlus}>PLUS</button>
                    <button className="btn btn-primary" onClick={clickMinus}>MINUS</button>
                </div>
            </div>
            
        </div>
    )
};
export default memo(Test1Child);


 