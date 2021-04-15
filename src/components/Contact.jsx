import React, { Component } from "react";
import feather from 'feather-icons';

import './css/Contact.scss';

import * as api from '../services/api_access';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alertMessage: '',
            alertType: '',
            isLoading: false
        };
    }

    componentDidMount() {
        document.getElementById('messageForm').addEventListener('submit', this.sendMessage);
    }

    sendMessage = async (event) => {
        // Prevent form submit refresh
        event.preventDefault();

        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let phoneNumber = document.getElementById('phoneNumber').value;
        let message = document.getElementById('message').value;

        this.setState({isLoading : true});
        feather.replace();
        const response = await api.sendMessage(name, email, phoneNumber, message);
        this.setState({isLoading : false});

        if (response !== undefined) {
            document.getElementById('alert').style.right = '10px';
            document.getElementById('alert').style.visibility = 'visible';
        }

        if (response.status === 200) {
            this.setState({alertMessage : "Thank you for your message! I'll get back to you as soon as I can"});
            this.setState({alertType : "alert-success"});

            document.getElementById('alert').style.right = '10px';
            document.getElementById('alert').style.visibility = 'visible';

            const tickMark = "<svg width=\"58\" height=\"45\" viewBox=\"0 0 58 45\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#fff\" fill-rule=\"nonzero\" d=\"M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65\"/></svg>";
            document.getElementById('tick').innerHTML = tickMark;
            document.getElementById('button').classList.toggle('button__circle');

            setTimeout(() => {
                document.getElementById('messageForm').classList.remove('was-validated');
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('phoneNumber').value = '';
                document.getElementById('message').value = '';

                document.getElementById('tick').innerHTML = "Submit";
                document.getElementById('button').classList.toggle('button__circle');
            }, 1000);

        } else {
            this.setState({alertMessage : "Sorry there was a problem, you can reach me at RyanWLackie@gmail.com"});
            this.setState({alertType : "alert-danger"});

            document.getElementById('alert').style.right = '10px';
            document.getElementById('alert').style.visibility = 'visible';
        }
    }

    hideAlert() {
        document.getElementById('alert').style.right = '-350px';
        document.getElementById('alert').style.visibility = 'hidden';
    }

    render() {
        return (
            <div className="Contact section" id='Contact'>

                <div className={"alert " + this.state.alertType} id='alert'>
                    <div className="close" onClick={this.hideAlert}>&times;</div>
                    <div className="message">
                        {this.state.alertMessage}
                    </div>
                </div>

                <div className="sectionLabelContainer">
                    <div className="sectionLabel">
                        Contact
                        <div className="sectionLabelLine"></div>
                    </div>
                </div>

                <div className="message">
                    Want to talk?
                </div>

                <form id="messageForm">

                    <div className="container-fluid">

                        <div className="row justify-content-center">

                            <div className="col-lg-6 smInputCol">
                                <input
                                    className='form-control smInput'
                                    placeholder="Your Name"
                                    id='name'
                                    type='text'
                                    required />

                                <input
                                    className='form-control smInput'
                                    placeholder="Your Email"
                                    id='email'
                                    type='email'
                                    required />

                                <input
                                    className='form-control smInput'
                                    placeholder="Your Phone # (Optional)"
                                    id='phoneNumber'
                                    type='text' />
                            </div>

                            <div className="col-lg-6 lgInputCol">
                                <textarea
                                    className='form-control lgInput'
                                    placeholder="Your Message"
                                    id='message'
                                    required />
                            </div>

                        </div>

                        <div className="buttonContainer">
                            <button className='button' id='button' type='submit'>
                                <div className="container">
                                    {this.state.isLoading &&
                                        <div>
                                            <i data-feather="loader" className="loading-icon" />
                                        </div>
                                    }

                                    {!this.state.isLoading &&
                                        <div className="tick" id='tick'>Submit</div>
                                    }
                                </div>
                            </button>
                        </div>

                    </div>

                </form>

            </div>
        );
    }
}