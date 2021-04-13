import React, { Component } from "react";

import './css/About.scss';

export default class About extends Component {
    componentWillUpdate() {
        this.animationHandler();
    }
    animationHandler() {
        for (let icon = 1; icon <= 2; icon++) {
            if (this.props.willAnimate('icon' + icon)) {
                document.getElementById('icon' + icon).style.visibility = 'visible';
                document.getElementById('icon' + icon).classList.add('rollIn');
            }
            if (!this.props.inFrame('icon' + icon)) {
                document.getElementById('icon' + icon).style.visibility = 'hidden';
                document.getElementById('icon' + icon).classList.remove('rollIn');
            }
        }

        for (let text = 1; text <= 3; text++) {
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
        let win = window.open(url, '_blank');
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
                        Hi, my name is Ryan Lackie and I am a Full Stack Software Engineer.
                    </div>

                    <div className="text animated" id='text2'>
                        I am a results-oriented problem solver with attention to detail focused on the end user’s experience. I have a background in fast paced ever-changing startups where both independently and with a team I have created full-scale applications from the ground up.
                    </div>

                    <div className="text animated" id='text3'>
                        Aside from coding, I also love cooking and spending time out in nature during hikes.
                    </div>
                </div>

            </div>
        );
    }
}
