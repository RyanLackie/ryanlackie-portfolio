import React, { Component } from "react";

import './css/Home.scss';

export default class Home extends Component {
    componentWillUpdate() {
        document.getElementById('hero').style.backgroundPosition = '0px ' + -(window.scrollY*0.1)+'px';
    }

    openLink = (url) => {
        var win = window.open(url, '_blank');
        win.focus();
    }

    scroll = () => {
        window.scrollTo({
            top: document.getElementById('Home').getBoundingClientRect().bottom - document.getElementById('Home').getBoundingClientRect().top,
            behavior: 'smooth'
        });
    }

    render() {
        return (
            <div className="Home" id='Home'>

                <div className="landing"></div>

                <div className="heroContainer">
                    <div className="hero" id='hero'></div>
                </div>

                <div className="center">

                    <div className="text">
                        <b>Full-Stack</b>
                        <br/>
                        <b>Developer</b>
                    </div>

                    <div className="buttons">
                        <div className="button" onClick={this.openLink.bind(this, "https://drive.google.com/open?id=13kX1LcacyBnpHS0BxnEq-Q4OqFdDYtzX")}>
                            Resume
                        </div>
                        <div className="button" onClick={this.scroll}>
                            See More
                        </div>
                    </div>

                </div>

                <div className="icons">
                    <div onClick={this.openLink.bind(this, "https://www.linkedin.com/in/ryanlackie/")} className="fa fa-linkedin"></div>
                    <div onClick={this.openLink.bind(this, "https://github.com/RyanLackie")} className="fa fa-github"></div>
                </div>

            </div>
        );
    }
}