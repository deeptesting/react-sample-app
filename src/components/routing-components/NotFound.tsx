import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export const NotFound: React.FC = (props): React.ReactElement => {

    const navigate = useNavigate();

    React.useEffect(()=>{
        setTimeout(() => {
            navigate("/");
        }, 5000);
    },[])

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Sorry, Your page is not found </h2>
                    <h1>404</h1>
                    <NavLink className="btn btn-warning" to="/" >
                        Go to Application Home Page
                    </NavLink>
                </div>
            </div>
        </div>
    )
};


 