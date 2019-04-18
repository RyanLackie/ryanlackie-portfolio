import React, { Component } from "react";

import './css/Contact.css';

export default class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <div className="Contact section" id='Contact'>

                <div className="sectionLabelContainer">
                    <div className="sectionLabel">
                        Contact
                        <div className="sectionLabelLine"></div>
                    </div>
                </div>

                <div className="inputContainer">
                
                    <div className="inputCol">
                        <input className='form-control input'></input>

                        <input className='form-control input'></input>

                        <input className='form-control input'></input>
                    </div>

                    <div className="inputCol">
                        <textarea className='form-control input'></textarea>
                    </div>

                </div>

            </div>
        );
    }
}