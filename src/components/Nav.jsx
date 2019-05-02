import React, { Component } from 'react';

import './css/Nav.scss';

export default class Nav extends Component {
    componentDidMount() {
        document.getElementById('buttonGroup').classList.add('slideInRight');
    }
    componentWillUpdate() {
        this.styleNav();
    }

    reactiveWindowSize = 680;
    previousScroll = null;
    styleNav() {
        //Nav Sizing
        if (window.innerWidth > this.reactiveWindowSize) {  //Normal Menu
            if (window.scrollY >= 50) {
                document.getElementById('Nav').style.height = '60px';
                document.getElementById('Nav').style.background = 'black';
            }
            else {
                document.getElementById('Nav').style.height = '80px';
                document.getElementById('Nav').style.background = 'transparent';
            }
        }
        else {  //Reactive Menu
            if (window.scrollY < 50) {
                document.getElementById('Nav').style.top = '0px';
                document.getElementById('Nav').style.height = '60px';
                document.getElementById('Nav').style.background = 'transparent';
            }
            else if ((window.scrollY >= 50 && window.scrollY < 150) || (this.previousScroll != null && this.previousScroll > window.scrollY)) {
                document.getElementById('Nav').style.top = '0px';
                document.getElementById('Nav').style.height = '40px';
                document.getElementById('Nav').style.background = 'black';
            }
            else {
                document.getElementById('Nav').style.top = '-40px';
                document.getElementById('Nav').style.height = '40px';
            }
            this.previousScroll = window.scrollY;
        }

        //Nav Highlighting
        if (this.props.skillsLocation === null || this.props.portfolioLocation == null || this.props.aboutLocation === null || this.props.contactLocation === null)
            this.forceUpdate();

        else if (window.innerWidth > this.reactiveWindowSize) {    //Normal Menu
            if (this.props.skillsLocation.top <= window.innerHeight/2 && this.props.skillsLocation.bottom >= window.innerHeight/2)
                document.getElementById('skillsBtn').classList.add('activeBtn');
            else
                document.getElementById('skillsBtn').classList.remove('activeBtn');

            if (this.props.portfolioLocation.top <= window.innerHeight/2 && this.props.portfolioLocation.bottom >= window.innerHeight/2)
                document.getElementById('portfolioBtn').classList.add('activeBtn');
            else
                document.getElementById('portfolioBtn').classList.remove('activeBtn');

            if (this.props.aboutLocation.top <= window.innerHeight/2 && this.props.aboutLocation.bottom >= window.innerHeight/2)
                document.getElementById('aboutBtn').classList.add('activeBtn');
            else
                document.getElementById('aboutBtn').classList.remove('activeBtn');

            if (this.props.contactLocation.top <= window.innerHeight/2 && this.props.contactLocation.bottom >= window.innerHeight/2)
                document.getElementById('contactBtn').classList.add('activeBtn');
            else
                document.getElementById('contactBtn').classList.remove('activeBtn');
        }

        else {  //Reactive Menu
            if (this.props.skillsLocation.top <= window.innerHeight/2 && this.props.skillsLocation.bottom >= window.innerHeight/2)
                document.getElementById('reactiveSkillsBtn').classList.add('activeBtn');
            else
                document.getElementById('reactiveSkillsBtn').classList.remove('activeBtn');

            if (this.props.portfolioLocation.top <= window.innerHeight/2 && this.props.portfolioLocation.bottom >= window.innerHeight/2)
                document.getElementById('reactivePortfolioBtn').classList.add('activeBtn');
            else
                document.getElementById('reactivePortfolioBtn').classList.remove('activeBtn');

            if (this.props.aboutLocation.top <= window.innerHeight/2 && this.props.aboutLocation.bottom >= window.innerHeight/2)
                document.getElementById('reactiveAboutBtn').classList.add('activeBtn');
            else
                document.getElementById('reactiveAboutBtn').classList.remove('activeBtn');

            if (this.props.contactLocation.top <= window.innerHeight/2 && this.props.contactLocation.bottom >= window.innerHeight/2)
                document.getElementById('reactiveContactBtn').classList.add('activeBtn');
            else
                document.getElementById('reactiveContactBtn').classList.remove('activeBtn');
        }
    }

    menuButtonClicked() {
        document.getElementById('bar1').classList.toggle('closeBar1');
        document.getElementById('bar2').classList.toggle('closeBar2');
        document.getElementById('bar3').classList.toggle('closeBar3');

        if (document.getElementById('bar3').classList.contains('closeBar3')) {
            document.getElementById('reactiveSkillsBtn').classList.remove('closeSkillsBtn');
            document.getElementById('reactiveSkillsBtn').classList.add('openSkillsBtn');

            document.getElementById('reactivePortfolioBtn').classList.remove('closePortfolioBtn');
            document.getElementById('reactivePortfolioBtn').classList.add('openPortfolioBtn');

            document.getElementById('reactiveAboutBtn').classList.remove('closeAboutBtn');
            document.getElementById('reactiveAboutBtn').classList.add('openAboutBtn');

            document.getElementById('reactiveContactBtn').classList.remove('closeContactBtn');
            document.getElementById('reactiveContactBtn').classList.add('openContactBtn');
        }
        else {
            document.getElementById('reactiveSkillsBtn').classList.remove('openSkillsBtn');
            document.getElementById('reactiveSkillsBtn').classList.add('closeSkillsBtn');
            
            document.getElementById('reactivePortfolioBtn').classList.remove('openPortfolioBtn');
            document.getElementById('reactivePortfolioBtn').classList.add('closePortfolioBtn');

            document.getElementById('reactiveAboutBtn').classList.remove('openAboutBtn');
            document.getElementById('reactiveAboutBtn').classList.add('closeAboutBtn');

            document.getElementById('reactiveContactBtn').classList.remove('openContactBtn');
            document.getElementById('reactiveContactBtn').classList.add('closeContactBtn');
        }
    }

    handleButtonClick(location) {
        if (this.props.skillsLocation === null || this.props.portfolioLocation == null || this.props.aboutLocation === null || this.props.contactLocation === null) 
            this.forceUpdate();
        window.scrollTo({
            top: Math.abs(this.props.topLocation.top - location.top),
            behavior: 'smooth'
        });   
    }

    render() {
        return (
            <div className='Nav' id='Nav'>
                <div className="buttonGroup animated" id='buttonGroup'>

                    <div className="centerer"></div>

                    <div className="button unactiveBtn" id='skillsBtn' onClick={this.handleButtonClick.bind(this, this.props.skillsLocation)}>
                        <div className="centerer"></div>
                        <div className="button-text">SKILLS</div>
                    </div>

                    <div className="button unactiveBtn" id='portfolioBtn' onClick={this.handleButtonClick.bind(this, this.props.portfolioLocation)}>
                        <div className="centerer"></div>
                        <div className="button-text">PORTOLIO</div>
                    </div>

                    <div className="button unactiveBtn" id='aboutBtn' onClick={this.handleButtonClick.bind(this, this.props.aboutLocation)}>
                        <div className="centerer"></div>
                        <div className="button-text">ABOUT</div>
                    </div>

                    <div className="button unactiveBtn" id='contactBtn' onClick={this.handleButtonClick.bind(this, this.props.contactLocation)}>
                        <div className="centerer"></div>
                        <div className="button-text">CONTACT</div>
                    </div>

                </div>

                <div className="responsiveMenu">

                    <div className="menu-button" onClick={this.menuButtonClicked}>
                        <div className="bar1" id='bar1'></div>
                        <div className="bar2" id='bar2'></div>
                        <div className="bar3" id='bar3'></div>
                    </div>
                
                    <div className="button unactiveBtn skillsBtn" id='reactiveSkillsBtn' onClick={this.handleButtonClick.bind(this, this.props.skillsLocation)}>
                        <div className="centerer"></div>
                        <div className="button-text">SKILLS</div>
                    </div>

                    <div className="button unactiveBtn portfolioBtn" id='reactivePortfolioBtn' onClick={this.handleButtonClick.bind(this, this.props.portfolioLocation)}>
                        <div className="centerer"></div>
                        <div className="button-text">PORTOLIO</div>
                    </div>

                    <div className="button unactiveBtn aboutBtn" id='reactiveAboutBtn' onClick={this.handleButtonClick.bind(this, this.props.aboutLocation)}>
                        <div className="centerer"></div>
                        <div className="button-text">ABOUT</div>
                    </div>

                    <div className="button unactiveBtn contactBtn" id='reactiveContactBtn' onClick={this.handleButtonClick.bind(this, this.props.contactLocation)}>
                        <div className="centerer"></div>
                        <div className="button-text">CONTACT</div>
                    </div>
                
                </div>
            </div>
        );
    }
}