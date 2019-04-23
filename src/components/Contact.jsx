import React, { Component } from "react";

import './css/Contact.scss';

import * as api from '../services/api_access';

export default class Contact extends Component {
    componentDidMount() {
        document.getElementById('messageForm').addEventListener('submit', this.sendMessage);
    }

    sendMessage(event) {
        //Prevent form submit refresh
        event.preventDefault();

        const tickMark = "<svg width=\"58\" height=\"45\" viewBox=\"0 0 58 45\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#fff\" fill-rule=\"nonzero\" d=\"M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65\"/></svg>";
        document.getElementById('tick').innerHTML = tickMark;
        document.getElementById('button').classList.toggle('button__circle');

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phoneNumber = document.getElementById('phoneNumber').value;
        var message = document.getElementById('message').value;
        api.sendMessage(name, email, phoneNumber, message).then(
            emailResponce => {
                
            }
        );
        setTimeout(function() {
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('phoneNumber').value = '';
            document.getElementById('message').value = '';
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            document.getElementById('alert').style.right = '10px';
            document.getElementById('alert').style.visibility = 'visible';
        }, 300);
        setTimeout(function() {
            document.getElementById('tick').innerHTML = "Submit";
            document.getElementById('button').classList.toggle('button__circle');
        }, 1500);
    }

    hideAlert() {
        document.getElementById('alert').style.right = '-350px';
        document.getElementById('alert').style.visibility = 'hidden';
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

                <div className="message">
                    Want to talk? <br/>
                    I'm always up to get a cup of coffee.
                </div>

                <form id="messageForm">

                    <div className="container-fluid">

                        <div className="row justify-content-center">
                        
                            <div className="col-lg-6 smInputCol">
                                <input className='form-control smInput' placeholder="Your Name" id='name' required></input>

                                <input className='form-control smInput' placeholder="Your Email" id='email' required></input>

                                <input className='form-control smInput' placeholder="Your Phone # (Optional)" id='phoneNumber'></input>
                            </div>

                            <div className="col-lg-6 lgInputCol">
                                <textarea className='form-control lgInput' placeholder="Your Message" id='message' required></textarea>
                            </div>

                        </div>

                        <div className="buttonContainer">
                            <button className='button' id='button' type='submit'>
                                <div className="container">
                                    <div className="tick" id='tick'>Submit</div>
                                </div>
                            </button>
                        </div>

                    </div>

                </form>

                <div className="alert alert-success" id='alert'>
                    <div className="close" onClick={this.hideAlert}>&times;</div>
                    <div className="message">
                        Thank you for your message! <br/>
                        I'll get back to you as soon as I can
                    </div>
                </div>

            </div>
        );
    }
}