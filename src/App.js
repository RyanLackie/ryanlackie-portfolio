import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";

import './App.scss';
import './animate.css';

class App extends Component {
    state = {
        topLocation: null,
        skillsLocation: null,
        portfolioLocation: null,
        aboutLocation: null,
        contactLocation: null
    };

    componentDidMount() {
        this.update();
        window.addEventListener('scroll', this.update);
        window.addEventListener('resize', this.update);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.update);
        window.removeEventListener('resize', this.update);
    }

    update = () => {
        this.setState({
            topLocation: document.getElementById('Home').getBoundingClientRect(),
            skillsLocation: document.getElementById('Skills').getBoundingClientRect(),
            portfolioLocation: document.getElementById('Portfolio').getBoundingClientRect(),
            aboutLocation: document.getElementById('About').getBoundingClientRect(),
            contactLocation: document.getElementById('Contact').getBoundingClientRect()
        });
    }

    test = () => {
        
    }

    render() {
        return (
            <div className="App">
            
                <Nav
                    topLocation={this.state.topLocation}
                    skillsLocation={this.state.skillsLocation}
                    portfolioLocation={this.state.portfolioLocation}
                    aboutLocation={this.state.aboutLocation}
                    contactLocation={this.state.contactLocation}
                />
                <Home/>
                <Skills/>
                <Portfolio/>
                <About/>
                <Contact/>

            </div>
        );
    }
}

export default App;
