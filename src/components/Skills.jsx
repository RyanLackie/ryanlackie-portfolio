import React, { Component } from 'react';

import './css/Skills.scss';

import img1 from '../assets/web-icon.png';
import img2 from '../assets/api-icon.png';
import img3 from '../assets/database-icon.png';
import img4 from '../assets/cloud-icon.png';

//import frontendImage from '../assets/placeholder.png';
//import backEndImage from '../assets/placeholder.png';

export default class Skills extends Component {
    componentWillUpdate() {
        this.animationHandler();
    }

    animationHandler() {
        for (let card = 1; card <= 4; card++) {
            if (this.props.willAnimate('card' + card)) {
                document.getElementById('card' + card).style.visibility = 'visible';
                if (card%2 === 0)
                    document.getElementById('card' + card).classList.add('fadeInRight');
                else
                    document.getElementById('card' + card).classList.add('fadeInLeft');
            }
            if (!this.props.inFrame('card' + card)) {
                document.getElementById('card' + card).style.visibility = 'hidden';
                if (card%2 === 0)
                    document.getElementById('card' + card).classList.remove('fadeInRight');
                else
                    document.getElementById('card' + card).classList.remove('fadeInLeft');
            }
        }

        for (let group = 1; group <= 6; group++) {
            if (this.props.willAnimate('group' + group)) {
                document.getElementById('group' + group).style.visibility = 'visible';
                document.getElementById('group' + group).classList.add('zoomIn');
            }
            if (!this.props.inFrame('group' + group)) {
                document.getElementById('group' + group).style.visibility = 'hidden';
                document.getElementById('group' + group).classList.remove('zoomIn');
            }
        }
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

                <div className="container-fluid description-section">

                    <div className="row justify-content-center">

                        <div className="skillsCard animated" id='card1'>
                            <img src={img1} className='image' alt='Web Application Development Img'></img>
                            <div className="header">
                                Web Application Development
                            </div>
                            <div className="footer">
                                Fast, responsive and intuitive applications with focus to UI UX, mobile first design, and inclusive accessibility.
                            </div>
                        </div>

                        <div className="skillsCard animated" id='card2'>
                            <img src={img2} className='image' alt='API Integration & Development Img'></img>
                            <div className="header">
                                API Integration & Development
                            </div>
                            <div className="footer">
                                Experienced in REST API development and integration for small and large projects with attention to speed and security.
                            </div>
                        </div>

                    </div>

                    <div className="row justify-content-center">

                        <div className="skillsCard animated" id='card3'>
                            <img src={img3} className='image' alt='Database Design & Development Img'></img>
                            <div className="header">
                                Database Design & Development
                            </div>
                            <div className="footer">
                                Background in database architecture for complex table relationships always aiming for performance and scalability. As well as managing database migrations to move over 15.6 million rows of data between legacy and new projects.
                            </div>
                        </div>

                        <div className="skillsCard animated" id='card4'>
                            <img src={img4} className='image' alt='Cloud Integration Img'></img>
                            <div className="header">Cloud Integration</div>
                            <div className="footer">
                                Hosting for apps, APIs, and media storage on linux based cloud platforms utilizing project containerization and continuous integration and development pipelines for fast and reliable releases.
                            </div>
                        </div>

                    </div>

                </div>

                <div className="container-fluid">

                    <div className="skillRow row justify-content-center">

                        <div className="group animated" id='group1'>
                            <div className="header">Languages</div>
                            <div className="info row">
                                <div className="item">JavaScript</div>
                                <div className="item">Python</div>
                                <div className="item">Java</div>
                                <div className="item">C#</div>
                            </div>
                        </div>

                        <div className="group animated" id='group2'>
                            <div className="header">Styling</div>
                            <div className="info row">
                                <div className="item">HTML</div>
                                <div className="item">CSS</div>
                                <div className="item">SCSS</div>
                                <div className="item">Stylus</div>
                                <div className="item">Bootstrap</div>
                                <div className="item">Foundation</div>
                            </div>
                        </div>

                        <div className="group animated" id='group3'>
                            <div className="header">Front-End Technologies</div>
                            <div className="info row">
                                <div className="item">Svelte</div>
                                <div className="item">Vue</div>
                                <div className="item">React</div>
                                <div className="item">jQuery</div>
                            </div>
                        </div>

                        <div className="group animated" id='group4'>
                            <div className="header">Back-End Technologies</div>
                            <div className="info row">
                                <div className="item">Django</div>
                                <div className="item">Flask</div>
                                <div className="item">Node</div>
                                <div className="item">MySQL</div>
                            </div>
                        </div>

                        <div className="group animated" id='group5'>
                            <div className="header">Tools and Services</div>
                            <div className="info row">
                                <div className="item">Docker</div>
                                <div className="item">Linux</div>
                                <div className="item">Git</div>
                                <div className="item">K6</div>
                                <div className="item">Mocha</div>
                                <div className="item">Selenium</div>
                                <div className="item">Jira</div>
                                <div className="item">Postman</div>
                            </div>
                        </div>

                        <div className="group animated" id='group6'>
                            <div className="header">CI/CD and Hosting</div>
                            <div className="info row">
                                <div className="item">Circle CI</div>
                                <div className="item">Heroku</div>
                                <div className="item">AWS</div>
                                <div className="item">Digital Ocean</div>
                            </div>
                        </div>

                    </div>
                </div>


                {/* <div className="container-fluid" id='backend-container'>
                    <div className="type" id='backend'>
                        <div className="centerer"></div>
                        <div className="header">Server Side</div>
                    </div>

                    <div className="skillRow row justify-content-center">

                        <div className="group animated" id='group6'>
                            <div className="header">Languages</div>
                            <div className="info row">
                                <div className="item">JavaScript</div>
                                <div className="item">Python</div>
                                <div className="item">Java</div>
                                <div className="item">C#</div>
                                <div className="item">PHP</div>
                                <div className="item">MySQL</div>
                            </div>
                        </div>

                        <div className="group animated" id='group7'>
                            <div className="header">Frameworks And Runtimes</div>
                            <div className="info row">
                                <div className="item">Express</div>
                                <div className="item">Node</div>
                                <div className="item">Spring Boot</div>
                                <div className="item">Flask</div>
                            </div>
                        </div>

                        <div className="group animated" id='group8'>
                            <div className="header">Tools</div>
                            <div className="info row">
                                <div className="item">npm</div>
                                <div className="item">yarn</div>
                                <div className="item">Babel</div>
                                <div className="item">JSON</div>
                                <div className="item">REST API</div>
                                <div className="item">Mocha</div>
                            </div>
                        </div>

                        <div className="group animated" id='group9'>
                            <div className="header">Server Hosting</div>
                            <div className="info row">
                                <div className="item">AWS</div>
                                <div className="item">CI/CD Pipelines</div>
                                <div className="item">DigitalOcean</div>
                                <div className="item">Docker</div>
                                <div className="item">Linux</div>
                                <div className="item">Nginx</div>
                            </div>
                        </div>

                    </div>
                </div> */}


            </div>
        );
    }
}