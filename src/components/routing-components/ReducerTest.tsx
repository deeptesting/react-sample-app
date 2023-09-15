import React, { useEffect } from "react";
import { ReducerCount } from "../../reducer/ReducerCount";


export interface IReducerTestProps{
}

export const ReducerTest: React.FC<IReducerTestProps> = (props): React.ReactElement => {

    //const [count , setCount]= React.useState<number>(0);
    const [value, dispatch] = React.useReducer(ReducerCount,{
        count: 0,
        name: "Deep"
    })
    
    
    const clickPlus= React.useCallback(()=>{
        //setCount(count+1);
        dispatch({type:'INCREASE', payload: 1})
    },[value])

    const clickMinus= React.useCallback(()=>{
        //setCount(count-1);
        dispatch({type:'DECREASE', payload: 1})
    },[value])

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Welcome to ReducerTest</h2>
                    <h2>Name= {value.name}</h2>
                    <h2>Count= {value.count}</h2>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button className="btn btn-success" onClick={clickPlus}>PLUS</button>
                    <button className="btn btn-primary" onClick={clickMinus}>MINUS</button>
                </div>
            </div>
             
        </div>
    )
};


 