import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
export interface IAddress{
    City: string;
    Street: string;
    PinCode: number;
    RoadName?: string ;//nullable
}

 
export const Address: React.FC<IAddress>  = (props) : React.ReactElement =>{
    var data  = props.City;   
   return(<div></div>)
}
