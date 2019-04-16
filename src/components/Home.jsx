import React, { Component } from "react";

import './css/Home.css';

export default class Home extends Component {

    componentWillUpdate() {
        document.getElementById('hero').style.backgroundPosition = '0px ' + -(window.scrollY*0.1)+'px';
    }

    render() {
        return (
            <div className="Home">

                <div className="landing"></div>
                <div className="heroContainer">
                    <div className="hero" id='hero'></div>
                </div>
                <div className="text">
                    <b>Full-Stack</b>
                    <br/>
                    <b>Developer</b>
                </div>

            </div>
        );
    }
}