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
        if (window.scrollY >= 15) {
            document.getElementById('Nav').style.position = 'fixed';
        }
        else {
            document.getElementById('Nav').style.position = 'absolute';
        }
    }

    run() {
        alert('test');
    }

    render() {
        return (
            <div className='Nav' id='Nav'>
                <div className="buttonGroup">
                    <div className="button" onClick={this.run}>
                        About
                        <div className='textUnderline'></div>
                    </div>
                    <div className="button" onClick={this.run}>
                        Projects
                        <div className='textUnderline'></div>
                    </div>
                    <div className="button" onClick={this.run}>
                        Contact
                        <div className='textUnderline'></div>
                    </div>
                </div>
            </div>
        );
    }
}