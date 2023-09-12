import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useFetchGetRequest } from "../../utilities/hook/FetchHook";
import { useSignal } from "../../utilities/hook/SignalHook";
import { Highlight } from "../shared-components/Highlight";

export interface IAboutUsProps{
    
}
export const AboutUs: React.FC<IAboutUsProps> = (props): React.ReactElement => {

    const [colorValue] = useSignal(5000);

    const { data, loading, error } = useFetchGetRequest("https://sv443.net/jokeapi/v2/joke/Programming?type=single");



    
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Welcome to AboutUs Page</h2>
                    <NavLink className="btn btn-primary" to="/old-application" >
                        Go to Application
                    </NavLink>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h2>loading {loading.toString()}</h2>
                    <p> {
                        !loading && data!==null &&
                          <> {JSON.stringify(data)}</>
                        } 
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. <Highlight>It has survived not only five centuries</Highlight> , but also the leap into
                         electronic typesetting, remaining essentially unchanged. It was popularised in 
                         the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                         and more recently with desktop publishing software like Aldus PageMaker
                          including versions of Lorem Ipsum</p>
                </div>
            </div>



            <div className="row">
                <div className="col">
                     <h2 style={{color:colorValue}}>Check my Color</h2>
                     <span style={{backgroundColor:colorValue, borderRadius:"25px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </div>
            </div>
        </div>
    )
};


 