import React, { Component } from "react";

import './css/Home.css';

export default class Home extends Component {

    render() {
        return (
            <div className="Home">

                <div className="landing"></div>
                <div className="hero" id='hero'></div>
                <div className="text">
                    Full-Stack
                    <br></br>
                    Developer
                </div>

            </div>
        );
    }
}