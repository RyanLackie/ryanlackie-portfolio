import React, { Component } from 'react';

import './css/Skills.scss';

import img1 from '../assets/placeholder.png';
import img2 from '../assets/placeholder.png';
import img3 from '../assets/placeholder.png';
import img4 from '../assets/placeholder.png';

//import frontendImage from '../assets/placeholder.png';
//import backEndImage from '../assets/placeholder.png';

export default class Skills extends Component {
    render() {
        return (
            <div className='Skills'>

                <div className="sectionLabelContainer">
                    <div className="sectionLabel">
                        Skills
                        <div className="sectionLabelLine"></div>
                    </div>
                </div>


                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="row justify-content-center">

                                <div className="skillsCard col-sm-6 col-md-3">
                                    <img src={img1} className='image' alt='Web Application Development Img'></img>
                                    <div className="header">
                                        Web Application Development
                                    </div>
                                    <div className="footer">
                                        Fast, responsive and intuitive apps implimenting UI and UX design that keep the user engaged.
                                    </div>
                                </div>

                                <div className="skillsCard col-sm-6 col-md-3">
                                    <img src={img2} className='image' alt='API Integration & Development Img'></img>
                                    <div className="header">
                                        API Integration & Development
                                    </div>
                                    <div className="footer">
                                        REST API uitilization and production for large scale projects using Node.js and Spring Boot.
                                    </div>
                                </div>

                                <div className="skillsCard col-sm-6 col-md-3">
                                    <img src={img3} className='image' alt='Database Design & Development Img'></img>
                                    <div className="header">
                                        Database Design & Development
                                    </div>
                                    <div className="footer">
                                        Database architectures in MySQL or Parse Server, always aiming for performance, scale and stability.
                                    </div>
                                </div>

                                <div className="skillsCard col-sm-6 col-md-3">
                                    <img src={img4} className='image' alt='Cloud Integration Img'></img>
                                    <div className="header">Cloud Integration</div>
                                    <div className="footer">
                                        Deployment of Vue and React, Node.js apps, and databases to cloud platforms.
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="skillRow row justify-content-center">

                                <div className="type col-sm-12 col-md-3">
                                    <div className="centerer"></div>
                                    <div className="header">Front-End</div>
                                </div>

                                <div className="group col-sm-4 col-md-3">
                                    <div className="header">Languages</div>
                                    <div className="info row justify-content-center">
                                        <div className="col-md-6">HTML</div>
                                        <div className="col-md-6">CSS</div>
                                        <div className="col-md-6">SCSS</div>
                                        <div className="col-md-6">JavaScript</div>
                                        <div className="col-md-6">TypeScript</div>
                                    </div>
                                </div>

                                <div className="group col-sm-4 col-md-3">
                                    <div className="header">Frameworks</div>
                                    <div className="info row justify-content-center">
                                        <div className="col-md-6">Vue.js</div>
                                        <div className="col-md-6">React</div>
                                        <div className="col-md-6">Angular 2+</div>
                                    </div>
                                </div>

                                <div className="group col-sm-4 col-md-3">
                                    <div className="header">Tools</div>
                                    <div className="info row justify-content-center">
                                        <div className="col-md-6">Bootstrap</div>
                                        <div className="col-md-6">jQuery</div>
                                        <div className="col-md-6">Webpack</div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                {/*
                <div className="skillColContainer container">
                    <div className="row justify-content-center">
                    
                        <div className="skillCol leftCol col-xs-12 col-sm-5 col-md-4">

                            <div className="topSection">
                                <div className="imageContainer">
                                    <img src={frontendImage} className='image' alt='Front-End Img'></img>
                                </div>
                                <div className="header">Front-End</div>
                                <div className="content">
                                    This is the content for the Front-End header
                                </div>
                            </div>

                            <div className="section">
                                <div className="header">Languages</div>
                                <div className="contentContainer container-fluid">
                                    <div className="row justify-content-center">
                                        <div className="content col-sm-6 col-md-6 col-lg-4">HTML</div>
                                        <div className="content col-sm-6 col-md-6 col-lg-4">CSS</div>
                                        <div className="content col-sm-6 col-md-6 col-lg-4">SCSS</div>
                                        <div className="content col-sm-6 col-md-6 col-lg-4">JavaScript</div>
                                        <div className="content col-sm-6 col-md-6 col-lg-4">TypeScript</div>
                                    </div>
                                </div>
                            </div>

                            <div className="section">
                                <div className="header">Frameworks</div>
                                <div className="contentContainer container-fluid">
                                    <div className="row justify-content-center">
                                        <div className="content col-sm-6 col-md-6 col-lg-4">Vue.js</div>
                                        <div className="content col-sm-6 col-md-6 col-lg-4">React</div>
                                        <div className="content col-sm-6 col-md-6 col-lg-4">Angular 2+</div>
                                    </div>
                                </div>
                            </div>

                            <div className="section">
                                <div className="header">Tools</div>
                                <div className="contentContainer container-fluid">
                                    <div className="row justify-content-center">
                                        <div className="content col-sm-6 col-md-6 col-lg-4">Bootstrap</div>
                                        <div className="content col-sm-6 col-md-6 col-lg-4">jQuery</div>
                                        <div className="content col-sm-6 col-md-6 col-lg-4">Webpack</div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="skillCol midCol col-xs-12 col-sm-5 col-md-4">
                            <div className="innerSection">

                                <div className="topSection">
                                    <div className="imageContainer">
                                        <img src={backEndImage} className='image' alt='Back-End Img'></img>
                                    </div>
                                    <div className="header">Back-End</div>
                                    <div className="content">
                                        This is the content for the Back-End header
                                    </div>
                                </div>

                                <div className="section">
                                    <div className="header">Languages</div>
                                    <div className="contentContainer container-fluid">
                                        <div className="row justify-content-center">
                                            <div className="content col-sm-6 col-md-6 col-lg-4">JavaScript</div>
                                            <div className="content col-sm-6 col-md-6 col-lg-4">TypeScript</div>
                                            <div className="content col-sm-6 col-md-6 col-lg-4">Python</div>
                                            <div className="content col-sm-6 col-md-6 col-lg-4">Java</div>
                                            <div className="content col-sm-6 col-md-6 col-lg-4">MySQL</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="section">
                                    <div className="header">Frameworks</div>
                                    <div className="contentContainer container-fluid">
                                        <div className="row justify-content-center">
                                            <div className="content col-sm-6 col-md-6 col-lg-4">Express.js</div>
                                            <div className="content col-sm-6 col-md-6 col-lg-4">Django</div>
                                            <div className="content col-sm-6 col-md-6 col-lg-4">Spring Boot</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="section">
                                    <div className="header">Tools</div>
                                    <div className="contentContainer container-fluid">
                                        <div className="row justify-content-center">
                                            <div className="content col-sm-6 col-md-6 col-lg-4">Node.js</div>
                                            <div className="content col-sm-6 col-md-6 col-lg-4">MVC Pattern</div>
                                            <div className="content col-sm-6 col-md-6 col-lg-4">REST API</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="skillCol rightCol col-xs-12 col-sm-10 col-md-4">
                            <div className="innerSection">
                            
                            </div>
                        </div>

                    </div>
                </div>
                */}
                
            </div>
        );
    }
}