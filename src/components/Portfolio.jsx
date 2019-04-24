import React, { Component } from "react";

import './css/Portfolio.css';

import img1 from '../assets/OEP.png';
import img2 from '../assets/trak.png';
import img3 from '../assets/rpg.png';
import img4 from '../assets/cell.png';

export default class Portfolio extends Component {
    componentWillUpdate() {
        this.animationHandler();
    }
    animationHandler() {
        for (var project = 1; project <= 6; project++) {
            if (this.props.willAnimate('project' + project)) {
                document.getElementById('project' + project).style.visibility = 'visible';
                document.getElementById('project' + project).classList.add('fadeIn');
            }
            if (!this.props.inFrame('project' + project)) {
                document.getElementById('project' + project).style.visibility = 'hidden';
                document.getElementById('project' + project).classList.remove('fadeIn');
            }
        }
    }

    openLink = (url) => {
        var win = window.open(url, '_blank');
        win.focus();
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

                        <div className="project animated" id='project1'>
                            <div className="imageContainer">
                                <div className='image' style={{backgroundImage: `url(${img1})`, backgroundPosition: 'top center'}}></div>
                                <div className="overlay">
                                    <div className="buttonContainer">
                                        <button className="linkBtn" onClick={this.openLink.bind(this, "")}>See Live</button>
                                        <button className="linkBtn" onClick={this.openLink.bind(this, "https://github.com/RyanLackie/OneEpicPlace-WebsiteSchedulingExtension")}>See Code</button>
                                    </div>
                                </div>
                            </div>
                            <div className="footer">
                                <div className="title">
                                    OEP Room Rental
                                </div>
                                <div className="about">
                                    HTML, CSS, JavaScript, Vue.js, Express.js, Node.js, MySQL
                                </div>
                            </div>
                        </div>

                        <div className="project animated" id='project2'>
                            <div className="imageContainer">
                                <div className='image' style={{backgroundImage: `url(${img2})`, backgroundPosition: 'top left'}}></div>
                                <div className="overlay">
                                    <div className="buttonContainer">
                                        <button className="linkBtn" onClick={this.openLink.bind(this, "")}>See Live</button>
                                        <button className="linkBtn" onClick={this.openLink.bind(this, "https://github.com/RyanLackie/WebProgramming-FinalProject")}>See Code</button>
                                    </div>
                                </div>
                            </div>
                            <div className="footer">
                                <div className="title">
                                    Trak Nutition Tracker
                                </div>
                                <div className="about">
                                    HTML, CSS, JavaScript, Vue.js, Express.js, Node.js, MySQL
                                </div>
                            </div>
                        </div>

                        <div className="project animated" id='project3'>
                            <div className="imageContainer">
                                <div className='image' style={{backgroundImage: `url(${img3})`, backgroundPosition: 'top center'}}></div>
                                <div className="overlay">
                                    <div className="buttonContainer">
                                        <button className="linkBtn" onClick={this.openLink.bind(this, "")}>See Live</button>
                                        <button className="linkBtn" onClick={this.openLink.bind(this, "https://github.com/RyanLackie/Android-TurnBasedGame")}>See Code</button>
                                    </div>
                                </div>
                            </div>
                            <div className="footer">
                                <div className="title">
                                    Turn Based Game
                                </div>
                                <div className="about">
                                    Java, XML, Gradle, LibGDX
                                </div>
                            </div>
                        </div>

                        <div className="project animated" id='project4'>
                            <div className="imageContainer">
                                <div className='image' style={{backgroundImage: `url(${img4})`}}></div>
                                <div className="overlay">
                                    <div className="buttonContainer">
                                        <button className="linkBtn" onClick={this.openLink.bind(this, "")}>See Live</button>
                                        <button className="linkBtn" onClick={this.openLink.bind(this, "https://github.com/RyanLackie/Android-CellGame")}>See Code</button>
                                    </div>
                                </div>
                            </div>
                            <div className="footer">
                                <div className="title">
                                    Cell Game
                                </div>
                                <div className="about">
                                    Java, XML, Gradle, LibGDX
                                </div>
                            </div>
                        </div>

                        <div className="project animated" id='project5'>
                            <div className="imageContainer">
                                <div className='image' style={{backgroundImage: `url(${img4})`}}></div>
                                <div className="overlay">
                                    <div className="buttonContainer">
                                        <button className="linkBtn" onClick={this.openLink.bind(this, "")}>See Live</button>
                                        <button className="linkBtn" onClick={this.openLink.bind(this, "")}>See Code</button>
                                    </div>
                                </div>
                            </div>
                            <div className="footer">
                                <div className="title">
                                    Jailbird
                                </div>
                                <div className="about">
                                    Java
                                </div>
                            </div>
                        </div>

                        <div className="project animated" id='project6'>
                            <div className="imageContainer">
                                <div className='image' style={{backgroundImage: `url(${img4})`}}></div>
                                <div className="overlay">
                                    <div className="buttonContainer">
                                        <button className="linkBtn" onClick={this.openLink.bind(this, "")}>See Live</button>
                                        <button className="linkBtn" onClick={this.openLink.bind(this, "")}>See Code</button>
                                    </div>
                                </div>
                            </div>
                            <div className="footer">
                                <div className="title">
                                    Snake
                                </div>
                                <div className="about">
                                    Java, Python
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}