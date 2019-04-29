import React, { Component } from "react";

import './css/About.scss';

export default class About extends Component {
    componentWillUpdate() {
        this.animationHandler();
    }
    animationHandler() {
        for (var icon = 1; icon <= 2; icon++) {
            if (this.props.willAnimate('icon' + icon)) {
                document.getElementById('icon' + icon).style.visibility = 'visible';
                document.getElementById('icon' + icon).classList.add('rollIn');
            }
            if (!this.props.inFrame('icon' + icon)) {
                document.getElementById('icon' + icon).style.visibility = 'hidden';
                document.getElementById('icon' + icon).classList.remove('rollIn');
            }
        }

        for (var text = 1; text <= 3; text++) {
            if (this.props.willAnimate('text' + text)) {
                document.getElementById('text' + text).style.visibility = 'visible';
                document.getElementById('text' + text).classList.add('fadeInUp');
            }
            if (!this.props.inFrame('text' + text)) {
                document.getElementById('text' + text).style.visibility = 'hidden';
                document.getElementById('text' + text).classList.remove('fadeInUp');
            }
        }
    }

    openLink = (url) => {
        var win = window.open(url, '_blank');
        win.focus();
    }

    render() {
        return (
            <div className="About section" id='About'>

                <div className="sectionLabelContainer">
                    <div className="sectionLabel">
                        About
                        <div className="sectionLabelLine"></div>
                    </div>
                </div>

                <div className="icons">
                    <div onClick={this.openLink.bind(this, "https://www.linkedin.com/in/ryanlackie/")}
                    className="fa fa-linkedin animated" id='icon1'></div>

                    <div onClick={this.openLink.bind(this, "https://github.com/RyanLackie")}
                    className="fa fa-github animated" id='icon2'></div>
                </div>

                <div className="container-fluid">

                    <div className="text animated" id='text1'>
                        Hi, my name is Ryan Lackie and I am a full stack developer.<br/>
                    </div>

                    <div className="text animated" id='text2'>
                        I have a strong passion for creation and have been thrilled ever since I started my career in Software Development.
                        I pride myself on having a strong work ethic and always have an eagerness to learn more. 
                        While working with a startup I have had experience many different aspects in the development 
                        life cycle and have worn a lot of hats from Front-end, Back-end, to Dev-ops.
                    </div>

                    <div className="text animated" id='text3'>
                        I have 2+ years of development experience building Full-stack products from the ground up, 
                        developing and integrating APIs, and working with databases and cloud platforms.
                    </div>

                </div>

            </div>
        );
    }
}