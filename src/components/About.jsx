import React, { Component } from "react";

import './css/About.scss';

export default class Portfolio extends Component {
    componentWillUpdate() {
        this.animationHandler();
    }
    animationHandler() {
        for (var icon = 1; icon <= 2; icon++) {
            if (this.willAnimate('icon' + icon)) {
                document.getElementById('icon' + icon).style.visibility = 'visible';
                document.getElementById('icon' + icon).classList.add('rollIn');
            }
            if (!this.inFrame('icon' + icon)) {
                document.getElementById('icon' + icon).style.visibility = 'hidden';
                document.getElementById('icon' + icon).classList.remove('rollIn');
            }
        }

        for (var text = 1; text <= 3; text++) {
            if (this.willAnimate('text' + text)) {
                document.getElementById('text' + text).style.visibility = 'visible';
                document.getElementById('text' + text).classList.add('fadeInUp');
            }
            if (!this.inFrame('text' + text)) {
                document.getElementById('text' + text).style.visibility = 'hidden';
                document.getElementById('text' + text).classList.remove('fadeInUp');
            }
        }
    }
    willAnimate(id) {
        var topOffSet = window.innerHeight*0.15;
        var topOfScreen = window.scrollY + topOffSet;
        var botOfScreen = topOfScreen + window.innerHeight - topOffSet*1.5;

        var topOfElement = document.getElementById(id).getBoundingClientRect().top + window.scrollY;
        var botOfElement = document.getElementById(id).getBoundingClientRect().bottom + window.scrollY;

        if ((botOfElement >= topOfScreen) && (topOfElement <= botOfScreen))
            return true;
        return false;
    }
    inFrame(id) {
        var topOffSet = 60;
        var topOfScreen = window.scrollY + topOffSet;
        var botOfScreen = topOfScreen + window.innerHeight - topOffSet;

        var topOfElement = document.getElementById(id).getBoundingClientRect().top + window.scrollY;
        var botOfElement = document.getElementById(id).getBoundingClientRect().bottom + window.scrollY;

        if ((botOfElement >= topOfScreen) && (topOfElement <= botOfScreen))
            return true;
        return false;
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
                        I pride myself on having a strong work ethic and always have an eagerness to learn more.
                        I have a strong passion for creation and have been thrilled ever since I started my career in Software Development. 
                        I have had experience in a lot of different aspects in the development life cycle and have worn a lot of hats for a 
                        startup I’ve worked for from Front-end, Back-end, to Dev-ops to get everything working the way it’s supposed to. 
                    </div>

                    <div className="text animated" id='text3'>
                        I have 2+ years of development experience building Full-stack products from scratch, developing and integrating APIs, 
                        and working with databases and cloud platforms.
                    </div>

                </div>

            </div>
        );
    }
}