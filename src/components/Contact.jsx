import React, { Component } from "react";

import './css/Contact.css';

export default class Portfolio extends Component {
    render() {
        return (
            <div className="Contact section" id='Contact'>

                <div className="sectionLabelContainer">
                    <div className="sectionLabel">
                        Contact
                        <div className="sectionLabelLine"></div>
                    </div>
                </div>

                <div className="message">
                    Want to talk? <br/>
                    I'm always up to get a cup of coffee.
                </div>


                <div className="container-fluid">

                    <div className="row justify-content-center">
                    
                        <div className="col-lg-6 inputCol">
                            <input className='form-control smInput' placeholder="Your Name"></input>

                            <input className='form-control smInput' placeholder="Your Email"></input>

                            <input className='form-control smInput' placeholder="Your Phone #"></input>
                        </div>

                        <div className="col-lg-6 inputCol">
                            <textarea className='form-control lgInput' placeholder="Your Message"></textarea>
                        </div>

                    </div>

                    <div className="buttonContainer">
                        <button className='sendBtn'>Send Message</button>
                    </div>

                </div>

            </div>
        );
    }
}