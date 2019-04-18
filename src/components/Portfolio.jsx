import React, { Component } from "react";

import './css/Portfolio.css';

import img1 from '../assets/web-icon.png';
import img2 from '../assets/api-icon.png';
import img3 from '../assets/database-icon.png';
import img4 from '../assets/cloud-icon.png';

export default class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    projectClicked(path) {
        alert();
    }

    render() {
        return (
            <div className="Portfolio section" id='Portfolio'>

                <div className="sectionLabelContainer">
                    <div className="sectionLabel">
                        Portfolio
                        <div className="sectionLabelLine"></div>
                    </div>
                </div>

                <div className="container-fluid">

                    <div className="row justify-content-center">

                        <div className="project">
                            <div className="imageContainer" onClick={this.projectClicked.bind(this, 'path')}>
                                <div className='image' style={{backgroundImage: `url(${img1})`}}></div>
                                <div className="overlay"></div>
                            </div>
                            <div className="footer">
                                <div className="title">
                                    OEP Room Rental
                                </div>
                                <div className="about">
                                    About Project 1
                                </div>
                            </div>
                        </div>

                        <div className="project">
                            <div className="imageContainer" onClick={this.projectClicked.bind(this, 'path')}>
                                <div className='image' style={{backgroundImage: `url(${img2})`}}></div>
                                <div className="overlay"></div>
                            </div>
                            <div className="footer">
                                <div className="title">
                                    Trak Nutition Tracker
                                </div>
                                <div className="about">
                                    About Project 2
                                </div>
                            </div>
                        </div>

                        <div className="project">
                            <div className="imageContainer" onClick={this.projectClicked.bind(this, 'path')}>
                                <div className='image' style={{backgroundImage: `url(${img3})`}}></div>
                                <div className="overlay"></div>
                            </div>
                            <div className="footer">
                                <div className="title">
                                    Project 3
                                </div>
                                <div className="about">
                                    About Project 3
                                </div>
                            </div>
                        </div>

                        <div className="project">
                            <div className="imageContainer" onClick={this.projectClicked.bind(this, 'path')}>
                                <div className='image' style={{backgroundImage: `url(${img4})`}}></div>
                                <div className="overlay"></div>
                            </div>
                            <div className="footer">
                                <div className="title">
                                    Project 4
                                </div>
                                <div className="about">
                                    About Project 4
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}