import React, { Component } from 'react';

import './css/About.scss';

import designImg from '../assets/placeholder.png';
import dynamicImg from '../assets/placeholder.png';
import fastImage from '../assets/placeholder.png';
import architectureImage from '../assets/placeholder.png';

import frontendImage from '../assets/placeholder.png';
import backEndImage from '../assets/placeholder.png';

export default class About extends Component {
    render() {
        return (
            <div className='About'>

                <div className="startSectionBackground"></div>

                <div className="sectionLabelContainer">
                    <div className="sectionLabel">
                        About
                        <div className="sectionLabelLine"></div>
                    </div>
                </div>


                <div className="aboutCardContainer container-fluid">
                    <div className="row justify-content-md-center">
                        
                        <div className="aboutCard col-xs-6 col-sm-6 col-md-3">
                            <div className="aboutCard-imageContainer">
                                <img src={designImg} className='aboutCard-image' alt='Design Img'></img>
                            </div>
                            <div className="aboutCard-header">Design</div>
                            <div className="aboutCard-footer">
                                Responsive with Intuitive design - Good UI and UX design need both.
                            </div>
                        </div>

                        <div className="aboutCard col-xs-6 col-sm-6 col-md-3">
                            <div className="aboutCard-imageContainer">
                                <img src={dynamicImg} className='aboutCard-image' alt='Dynamic Img'></img>
                            </div>
                            <div className="aboutCard-header">Dynamic</div>
                            <div className="aboutCard-footer">
                                Websites and applications can come to life and immerse the user.
                            </div>
                        </div>

                        <div className="aboutCard col-xs-6 col-sm-6 col-md-3">
                            <div className="aboutCard-imageContainer">
                                <img src={fastImage} className='aboutCard-image' alt='Fast Img'></img>
                            </div>
                            <div className="aboutCard-header">Fast</div>
                            <div className="aboutCard-footer">
                                Optimized to be as light as possible on the front-end and back-end - No one wants to wait.
                            </div>
                        </div>

                        <div className="aboutCard col-xs-6 col-sm-6 col-md-3">
                            <div className="aboutCard-imageContainer">
                                <img src={architectureImage} className='aboutCard-image' alt='Architecture Img'></img>
                            </div>
                            <div className="aboutCard-header">Architecture</div>
                            <div className="aboutCard-footer">
                                Stay connected and use custom built microservices to interact with databases and more.
                            </div>
                        </div>
                        
                    </div>
                </div>


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
                
            </div>
        );
    }
}