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

        else {
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
            </div>
        );
    }
}