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
            
        };
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

                        <div className="skillsCard">
                            <img src={img1} className='image' alt='Web Application Development Img'></img>
                            <div className="header">
                                Web Application Development
                            </div>
                            <div className="footer">
                                Fast, responsive and intuitive apps implimenting UI and UX design.
                            </div>
                        </div>

                        <div className="skillsCard">
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

                        <div className="skillsCard">
                            <img src={img3} className='image' alt='Database Design & Development Img'></img>
                            <div className="header">
                                Database Design & Development
                            </div>
                            <div className="footer">
                                Database architectures in MySQL or Parse Server, always aiming for performance, scale and stability.
                            </div>
                        </div>

                        <div className="skillsCard">
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

                        <div className="group">
                            <div className="header">Languages</div>
                            <div className="info row">
                                <div className="item">HTML</div>
                                <div className="item">CSS</div>
                                <div className="item">SCSS</div>
                                <div className="item">JavaScript</div>
                            </div>
                        </div>

                        <div className="group">
                            <div className="header">Frameworks</div>
                            <div className="info row">
                                <div className="item">Vue.js</div>
                                <div className="item">React</div>
                                <div className="item">Angular 2+</div>
                                <div className="item">Bootstrap</div>
                            </div>
                        </div>

                        <div className="group">
                            <div className="header">Tools</div>
                            <div className="info row">
                                <div className="item">Git</div>
                                <div className="item">jQuery</div>
                                <div className="item">Webpack</div>
                                <div className="item">Photoshop</div>
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

                        <div className="group">
                            <div className="header">Languages</div>
                            <div className="info row">
                                <div className="item">JavaScript</div>
                                <div className="item">Python</div>
                                <div className="item">PHP</div>
                                <div className="item">Java</div>
                            </div>
                        </div>

                        <div className="group">
                            <div className="header">Frameworks</div>
                            <div className="info row">
                                <div className="item">Express.js</div>
                                <div className="item">Spring Boot</div>
                            </div>
                        </div>

                        <div className="group">
                            <div className="header">Tools</div>
                            <div className="info row">
                                <div className="item">Node.js</div>
                                <div className="item">MySQL</div>
                                <div className="item">npm</div>
                                <div className="item">yarn</div>
                                <div className="item">babel</div>
                                <div className="item">JSON</div>
                            </div>
                        </div>

                    </div>
                </div>        

                
            </div>
        );
    }
}