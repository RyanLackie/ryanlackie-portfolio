import React, { Component } from 'react';

import './css/Skills.scss';

import img1 from '../assets/web-icon.png';
import img2 from '../assets/api-icon.png';
import img3 from '../assets/database-icon.png';
import img4 from '../assets/cloud-icon.png';

//import frontendImage from '../assets/placeholder.png';
//import backEndImage from '../assets/placeholder.png';

export default class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            handleSkillsLocation: 0
        };
    }

    componentWillUpdate() {
        var top = document.getElementById('Skills').getBoundingClientRect().top;
        this.props.handleSkillsLocation(top);
    }

    render() {
        return (
            <div className='Skills section' id='Skills'>

                <div className="sectionLabelContainer">
                    <div className="sectionLabel">
                        Skills
                        <div className="sectionLabelLine"></div>
                    </div>
                </div>


                <div className="container-fluid">

                    <div className="row justify-content-center">

                        <div className="skillsCard col-sm-12 col-md-4">
                            <img src={img1} className='image' alt='Web Application Development Img'></img>
                            <div className="header">
                                Web Application Development
                            </div>
                            <div className="footer">
                                Fast, responsive and intuitive apps implimenting UI and UX design.
                            </div>
                        </div>

                        <div className="skillsCard col-sm-12 col-md-4">
                            <img src={img2} className='image' alt='API Integration & Development Img'></img>
                            <div className="header">
                                API Integration & Development
                            </div>
                            <div className="footer">
                                REST API uitilization and production for large scale projects using Node.js and Spring Boot.
                            </div>
                        </div>

                    </div>

                    <div className="row justify-content-center">

                        <div className="skillsCard col-sm-12 col-md-4">
                            <img src={img3} className='image' alt='Database Design & Development Img'></img>
                            <div className="header">
                                Database Design & Development
                            </div>
                            <div className="footer">
                                Database architectures in MySQL or Parse Server, always aiming for performance, scale and stability.
                            </div>
                        </div>

                        <div className="skillsCard col-sm-12 col-md-4">
                            <img src={img4} className='image' alt='Cloud Integration Img'></img>
                            <div className="header">Cloud Integration</div>
                            <div className="footer">
                                Deployment of Vue and React, Node.js apps, and databases to cloud platforms.
                            </div>
                        </div>

                    </div>
                    
                </div>


                <div className="container-fluid">
                    <div className="type">
                        <div className="centerer"></div>
                        <div className="header">Front-End</div>
                    </div>

                    <div className="skillRow row justify-content-center">

                        <div className="group col-sm-4 col-md-3">
                            <div className="header">Languages</div>
                            <div className="info row justify-content-center">
                                <div className="col-md-6">HTML</div>
                                <div className="col-md-6">CSS</div>
                                <div className="col-md-6">SCSS</div>
                                <div className="col-md-6">JavaScript</div>
                            </div>
                        </div>

                        <div className="group col-sm-4 col-md-3">
                            <div className="header">Frameworks</div>
                            <div className="info row justify-content-center">
                                <div className="col-md-6">Vue.js</div>
                                <div className="col-md-6">React</div>
                                <div className="col-md-6">Angular 2+</div>
                                <div className="col-md-6">Bootstrap</div>
                            </div>
                        </div>

                        <div className="group col-sm-4 col-md-3">
                            <div className="header">Tools</div>
                            <div className="info row justify-content-center">
                                <div className="col-md-6">Git</div>
                                <div className="col-md-6">jQuery</div>
                                <div className="col-md-6">Webpack</div>
                                <div className="col-md-6">Photoshop</div>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="container-fluid">
                    <div className="type">
                        <div className="centerer"></div>
                        <div className="header">Back-End</div>
                    </div>
                
                    <div className="skillRow row justify-content-center">

                        <div className="group col-sm-4 col-md-3">
                            <div className="header">Languages</div>
                            <div className="info row justify-content-center">
                                <div className="col-md-6">JavaScript</div>
                                <div className="col-md-6">Python</div>
                                <div className="col-md-6">PHP</div>
                                <div className="col-md-6">Java</div>
                            </div>
                        </div>

                        <div className="group col-sm-4 col-md-3">
                            <div className="header">Frameworks</div>
                            <div className="info row justify-content-center">
                                <div className="col-md-6">Express.js</div>
                                <div className="col-md-6">Spring Boot</div>
                            </div>
                        </div>

                        <div className="group col-sm-4 col-md-3">
                            <div className="header">Tools</div>
                            <div className="info row justify-content-center">
                                <div className="col-md-6">Node.js</div>
                                <div className="col-md-6">MySQL</div>
                                <div className="col-md-6">npm</div>
                                <div className="col-md-6">yarn</div>
                                <div className="col-md-6">babel</div>
                                <div className="col-md-6">JSON</div>
                            </div>
                        </div>

                    </div>
                </div>

                
            </div>
        );
    }
}