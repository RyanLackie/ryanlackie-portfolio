import React, { Component } from 'react';

import './css/Nav.scss';

export default class Nav extends Component {
    componentWillUpdate() {
        this.styleNav();
    }

    animate = false;
    styleNav() {
        //Nav Animation
        if (!this.animate) {
            document.getElementById('buttonGroup').classList.add('slideInRight');
            this.animate = true;
        }

        //Nav Sizing
        if (window.scrollY >= 50) {
            document.getElementById('Nav').style.height = '60px';
            document.getElementById('Nav').style.background = 'black';
        }
        else {
            document.getElementById('Nav').style.height = '80px';
            document.getElementById('Nav').style.background = 'transparent';
        }

        //Nav Highlighting
        if (this.props.skillsLocation === null || this.props.portfolioLocation == null || this.props.aboutLocation === null || this.props.contactLocation === null)
            this.forceUpdate();

        else if (window.innerWidth > 680) {    //Normal Menu
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

        if (getComputedStyle(document.getElementById('reactiveSkillsBtn'), null).display === 'none')
            document.getElementById('reactiveSkillsBtn').style.display = 'inline-block';
        else
            document.getElementById('reactiveSkillsBtn').style.display = 'none';

        if (getComputedStyle(document.getElementById('reactivePortfolioBtn'), null).display === 'none')
            document.getElementById('reactivePortfolioBtn').style.display = 'inline-block';
        else
            document.getElementById('reactivePortfolioBtn').style.display = 'none';

        if (getComputedStyle(document.getElementById('reactiveAboutBtn'), null).display === 'none')
            document.getElementById('reactiveAboutBtn').style.display = 'inline-block';
        else
            document.getElementById('reactiveAboutBtn').style.display = 'none';

        if (getComputedStyle(document.getElementById('reactiveContactBtn'), null).display === 'none')
            document.getElementById('reactiveContactBtn').style.display = 'inline-block';
        else
            document.getElementById('reactiveContactBtn').style.display = 'none';
        /*
        console.log(getComputedStyle(document.getElementById('reactiveSkillsBtn'), null).top);
        if (getComputedStyle(document.getElementById('reactiveSkillsBtn'), null).top < 0)
            document.getElementById('reactiveSkillsBtn').style.top = '60px';
        else
            document.getElementById('reactiveSkillsBtn').style.top = '-60px';

        if (getComputedStyle(document.getElementById('reactivePortfolioBtn'), null).top < 0)
            document.getElementById('reactiveSkillsBtn').style.top = '120px';
        else
            document.getElementById('reactivePortfolioBtn').style.top = '-60px';

        if (getComputedStyle(document.getElementById('reactiveAboutBtn'), null).top < 0)
            document.getElementById('reactiveSkillsBtn').style.top = '1800px';
        else
            document.getElementById('reactiveAboutBtn').style.top = '-60px';

        if (getComputedStyle(document.getElementById('reactiveContactBtn'), null).top < 0)
            document.getElementById('reactiveSkillsBtn').style.top = '240px';
        else
            document.getElementById('reactiveContactBtn').style.top = '-60px';
        */
    }

    handleButtonClick(location) {
        if (this.props.skillsLocation === null || this.props.portfolioLocation == null || this.props.aboutLocation === null || this.props.contactLocation === null) 
            this.forceUpdate();
        //console.log(this.props.topLocation.top + '  ' + location.top);
        //console.log(this.props.topLocation.top - location.top);
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
                
                    <div className="button unactiveBtn" id='reactiveSkillsBtn' onClick={this.handleButtonClick.bind(this, this.props.skillsLocation)}>
                        <div className="centerer"></div>
                        <div className="button-text">SKILLS</div>
                    </div>

                    <div className="button unactiveBtn" id='reactivePortfolioBtn' onClick={this.handleButtonClick.bind(this, this.props.portfolioLocation)}>
                        <div className="centerer"></div>
                        <div className="button-text">PORTOLIO</div>
                    </div>

                    <div className="button unactiveBtn" id='reactiveAboutBtn' onClick={this.handleButtonClick.bind(this, this.props.aboutLocation)}>
                        <div className="centerer"></div>
                        <div className="button-text">ABOUT</div>
                    </div>

                    <div className="button unactiveBtn" id='reactiveContactBtn' onClick={this.handleButtonClick.bind(this, this.props.contactLocation)}>
                        <div className="centerer"></div>
                        <div className="button-text">CONTACT</div>
                    </div>
                
                </div>
            </div>
        );
    }
}