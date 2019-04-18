import React, { Component } from 'react';

import './css/Nav.scss';

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topLocation: 0,
            skillsLocation: 0,
            portfolioLocation: 0,
            aboutLocation: 0
        };
    }

    componentWillUpdate() {
        this.styleNav();
    }

    styleNav() {
        //Nav Apperence
        if (window.scrollY >= 50) {
            document.getElementById('Nav').style.height = '60px';
            document.getElementById('Nav').style.background = 'black';
        }
        else {
            document.getElementById('Nav').style.height = '80px';
            document.getElementById('Nav').style.background = 'transparent';
        }

        //Nav Link
        if (this.props.skillsLocation !== null && this.props.skillsLocation.top <= window.innerHeight/2 && this.props.skillsLocation.bottom >= window.innerHeight/2)
            document.getElementById('skillsBtn').classList.add('activeBtn');
        else
            document.getElementById('skillsBtn').classList.remove('activeBtn');

        if (this.props.portfolioLocation !== null && this.props.portfolioLocation.top <= window.innerHeight/2 && this.props.portfolioLocation.bottom >= window.innerHeight/2)
            document.getElementById('portfolioBtn').classList.add('activeBtn');
        else
            document.getElementById('portfolioBtn').classList.remove('activeBtn');

        if (this.props.aboutLocation !== null && this.props.aboutLocation.top <= window.innerHeight/2 && this.props.aboutLocation.bottom >= window.innerHeight/2)
            document.getElementById('aboutBtn').classList.add('activeBtn');
        else
            document.getElementById('aboutBtn').classList.remove('activeBtn');
    }

    handleButtonClick(location) {
        window.scrollTo({
            top: Math.abs(this.props.topLocation.top - location.top) - 60,
            behavior: 'smooth'
        });   
    }

    render() {
        return (
            <div className='Nav' id='Nav'>
                <div className="buttonGroup">

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

                    <div className="button unactiveBtn" id='contactBtn' onClick={this.handleButtonClick.bind(this, 'contactBtn')}>
                        <div className="centerer"></div>
                        <div className="button-text">CONTACT</div>
                    </div>

                </div>
            </div>
        );
    }
}