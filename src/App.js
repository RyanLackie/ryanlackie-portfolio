import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Nav from "./components/Nav"
import Home from "./components/Home";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";

import './App.scss';

class App extends Component {
    state = {
        topLocation: null,
        skillsLocation: null,
        portfolioLocation: null
    };

    componentDidMount() {
        this.updateLocations();
        window.addEventListener('scroll', this.updateLocations);
        window.addEventListener('resize', this.updateLocations);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.updateLocations);
        window.removeEventListener('resize', this.updateLocations);
    }

    updateLocations = () => {
        this.setState({
            topLocation: document.getElementById('App').getBoundingClientRect(),
            skillsLocation: document.getElementById('Skills').getBoundingClientRect(),
            portfolioLocation: document.getElementById('Portfolio').getBoundingClientRect()
        });
    }

    render() {
        return (
            <div className="App" id='App'>
            
                <Nav topLocation={this.state.topLocation} skillsLocation={this.state.skillsLocation} portfolioLocation={this.state.portfolioLocation}/>
                <Home/>
                <Skills id='Skills'/>
                <Portfolio id='Portfolio'/>

            </div>
        );
    }
}

export default App;
