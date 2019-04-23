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
        var top = document.getElementById('frontend-container').getBoundingClientRect().top - window.innerHeight; // Start Effect
        var bottom = document.getElementById('backend-container').getBoundingClientRect().bottom - 500; //End Effect

        var range = bottom - top;
        var amt = -(top / range);
        var rate = 50;
        
        amt = rate * amt;
        amt = Math.max(0, amt);
        amt = Math.min(60, amt);

        document.getElementById('frontend').style.marginBottom = amt+'px';
        document.getElementById('backend').style.marginBottom = amt+'px';

        //console.log('amt ' + amt + '   margin ' + document.getElementById('frontend').style.marginBottom);
        this.animationHandler();

        /*
        var topOffSet = window.innerHeight*0.15;
        document.getElementById('test').style.top = window.scrollY + topOffSet + 'px';
        document.getElementById('test').style.height = window.innerHeight - topOffSet*1.2 + 'px';
        */
    }

    animationHandler() {
        for (var card = 1; card <= 4; card++) {
            if (this.willAnimate('card' + card)) {
                document.getElementById('card' + card).style.visibility = 'visible';
                if (card%2 === 0)
                    document.getElementById('card' + card).classList.add('fadeInRight');
                else
                    document.getElementById('card' + card).classList.add('fadeInLeft');
            }
            if (!this.inFrame('card' + card)) {
                document.getElementById('card' + card).style.visibility = 'hidden';
                if (card%2 === 0)
                    document.getElementById('card' + card).classList.remove('fadeInRight');
                else
                    document.getElementById('card' + card).classList.remove('fadeInLeft');
            }
        }

        for (var group = 1; group <= 6; group++) {
            if (this.willAnimate('group' + group)) {
                document.getElementById('group' + group).style.visibility = 'visible';
                document.getElementById('group' + group).classList.add('zoomIn');
            }
            if (!this.inFrame('group' + group)) {
                document.getElementById('group' + group).style.visibility = 'hidden';
                document.getElementById('group' + group).classList.remove('zoomIn');
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

    render() {
        return (
            <div className='Skills section' id='Skills'>

                <div className="sectionLabelContainer">
                    <div className="sectionLabel">
                        Skills
                        <div className="sectionLabelLine"></div>
                    </div>
                </div>

                <div className="test" id='test'></div>
                
                <div className="container-fluid">

                    <div className="row justify-content-center">

                        <div className="skillsCard animated" id='card1'>
                            <img src={img1} className='image' alt='Web Application Development Img'></img>
                            <div className="header">
                                Web Application Development
                            </div>
                            <div className="footer">
                                Fast, responsive and intuitive apps implimenting UI and UX design.
                            </div>
                        </div>

                        <div className="skillsCard animated" id='card2'>
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

                        <div className="skillsCard animated" id='card3'>
                            <img src={img3} className='image' alt='Database Design & Development Img'></img>
                            <div className="header">
                                Database Design & Development
                            </div>
                            <div className="footer">
                                Database architectures in MySQL or Parse Server, always aiming for performance, scale and stability.
                            </div>
                        </div>

                        <div className="skillsCard animated" id='card4'>
                            <img src={img4} className='image' alt='Cloud Integration Img'></img>
                            <div className="header">Cloud Integration</div>
                            <div className="footer">
                                Deployment of Vue and React, Node.js apps, and databases to cloud platforms.
                            </div>
                        </div>

                    </div>
                    
                </div>

                <div className="container-fluid" id='frontend-container'>
                    <div className="type" id='frontend'>
                        <div className="centerer"></div>
                        <div className="header">Front-End</div>
                    </div>

                    <div className="skillRow row justify-content-center">

                        <div className="group animated" id='group1'>
                            <div className="header">Languages</div>
                            <div className="info row">
                                <div className="item">HTML</div>
                                <div className="item">CSS</div>
                                <div className="item">SCSS</div>
                                <div className="item">JavaScript</div>
                            </div>
                        </div>

                        <div className="group animated" id='group2'>
                            <div className="header">Frameworks</div>
                            <div className="info row">
                                <div className="item">Vue.js</div>
                                <div className="item">React</div>
                                <div className="item">Angular 2+</div>
                                <div className="item">Bootstrap</div>
                            </div>
                        </div>

                        <div className="group animated" id='group3'>
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


                <div className="container-fluid" id='backend-container'>
                    <div className="type" id='backend'>
                        <div className="centerer"></div>
                        <div className="header">Back-End</div>
                    </div>
                
                    <div className="skillRow row justify-content-center">

                        <div className="group animated" id='group4'>
                            <div className="header">Languages</div>
                            <div className="info row">
                                <div className="item">JavaScript</div>
                                <div className="item">Python</div>
                                <div className="item">PHP</div>
                                <div className="item">Java</div>
                            </div>
                        </div>

                        <div className="group animated" id='group5'>
                            <div className="header">Frameworks</div>
                            <div className="info row">
                                <div className="item">Express.js</div>
                                <div className="item">Spring Boot</div>
                            </div>
                        </div>

                        <div className="group animated" id='group6'>
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