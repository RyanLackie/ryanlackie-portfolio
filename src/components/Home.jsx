import React, { Component } from "react";

import './css/Home.css';

export default class Home extends Component {
    componentDidMount() {
        this.handlePageMovement();
        window.addEventListener('scroll', this.handlePageMovement);
        window.addEventListener('resize', this.handlePageMovement);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handlePageMovement);
        window.removeEventListener('resize', this.handlePageMovement);
    }

    handlePageMovement() {
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