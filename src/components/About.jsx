import React, { Component } from "react";

import './css/About.scss';

export default class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
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

                <div className="container-fluid">

                    <div className="text">
                        Hi, my name is Ryan Lackie and I am a full stack developer.<br/>
                    </div>

                    <div className="text">
                        I pride myself on having a strong work ethic and always have an eagerness to learn more.
                        I have a strong passion for creation and have been thrilled ever since I started my career in Software Development. 
                        I have had experience in a lot of different aspects in the development life cycle and have worn a lot of hats for a 
                        startup I’ve worked for from Front-end, Back-end, to Dev-ops to get everything working the way it’s supposed to. 
                    </div>

                    <div className="text">
                        I have 2+ years of development experience building Full-stack products from scratch, developing and integrating APIs, 
                        and working with databases and cloud platforms.
                    </div>

                </div>

            </div>
        );
    }
}