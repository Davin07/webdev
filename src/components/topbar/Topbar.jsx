import React from "react";
import "./topbar.scss"

export default function Topbar(){
    return(
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Classroom Management</a>
                </div>
                <div className="right">
                    <button className="btn Home">Home</button>
                    <a href="#signup" style={{'text-decoration': 'none', color: 'inherit'}}><button className="btn Contact">SignUp</button></a>
                    <a href="#signupteacher" style={{'text-decoration': 'none', color: 'inherit'}}><button className="btn Features">SignUppp</button></a>
                    <button className="btn HowTo">How To</button>
                </div>
            </div>
        </div>
    )
}