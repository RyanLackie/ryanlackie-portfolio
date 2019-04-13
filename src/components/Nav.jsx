import React, { Component } from 'react';

import './css/Nav.scss';

export default class Nav extends Component {
    componentDidMount() {
        this.handlePageMovement();
        window.addEventListener('scroll', this.handlePageMovement);
        window.addEventListener('resize', this.handlePageMovement);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handlePageMovement);
        window.removeEventListener('resize', this.handlePageMovement);
    }

    handlePageMovement() {
        if (window.scrollY >= 50) {
            document.getElementById('Nav').style.height = '50px';
            document.getElementById('Nav').style.background = 'black';
        }
        else {
            document.getElementById('Nav').style.height = '80px';
            document.getElementById('Nav').style.background = 'transparent';
        }
    }

    render() {
        return (
            <div className='Nav' id='Nav'>
                <div className="buttonGroup">

                    <div className="centerer"></div>

                    <div className="button">
                        <div className="centerer"></div>
                        <div className="button-text">WHAT I DO</div>
                    </div>

                    <div className="button">
                        <div className="centerer"></div>
                        <div className="button-text">PORTOLIO</div>
                    </div>

                    <div className="button">
                        <div className="centerer"></div>
                        <div className="button-text">ABOUT</div>
                    </div>

                </div>
            </div>
        );
    }
}