import React, { Component } from 'react';

import './css/Nav.scss';

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skillsLocation: 0
        };
    }

    componentWillUpdate() {
        if (window.scrollY >= 50) {
            document.getElementById('Nav').style.height = '50px';
            document.getElementById('Nav').style.background = 'black';
        }
        else {
            document.getElementById('Nav').style.height = '80px';
            document.getElementById('Nav').style.background = 'transparent';
        }

        //console.log(this.props.skillsLocation +'  <=  '+ window.innerHeight/2);
        if (this.props.skillsLocation !== null && this.props.skillsLocation <= window.innerHeight/2)
            document.getElementById('btn1').classList.add('activeBtn');
        else
            document.getElementById('btn1').classList.remove('activeBtn');
    }

    handleButtonClick(id) {
        document.getElementById('btn1').classList.remove('activeBtn');
        document.getElementById('btn2').classList.remove('activeBtn');
        document.getElementById('btn3').classList.remove('activeBtn');

        document.getElementById(id).classList.add('activeBtn');
    }

    render() {
        return (
            <div className='Nav' id='Nav'>
                <div className="buttonGroup">

                    <div className="centerer"></div>

                    <div className="button unactiveBtn" id='btn1' onClick={this.handleButtonClick.bind(this, 'btn1')}>
                        <div className="centerer"></div>
                        <div className="button-text">SKILLS</div>
                    </div>

                    <div className="button unactiveBtn" id='btn2' onClick={this.handleButtonClick.bind(this, 'btn2')}>
                        <div className="centerer"></div>
                        <div className="button-text">PORTOLIO</div>
                    </div>

                    <div className="button unactiveBtn" id='btn3' onClick={this.handleButtonClick.bind(this, 'btn3')}>
                        <div className="centerer"></div>
                        <div className="button-text">ABOUT</div>
                    </div>

                </div>
            </div>
        );
    }
}