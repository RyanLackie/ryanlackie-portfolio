import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Home from "./components/Home";
import Nav from "./components/Nav"
import Skills from "./components/Skills";

import './App.scss';

class App extends Component {
    state = {
        scroll: 0,

        skillsLocation: 0
    };

    componentDidMount() {
        this.handlePageMovement();
        window.addEventListener('scroll', this.handlePageMovement);
        window.addEventListener('resize', this.handlePageMovement);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handlePageMovement);
        window.removeEventListener('resize', this.handlePageMovement);
    }

    handlePageMovement = () => {
        this.setState({
            scroll: window.scrollY
        });
    }

    handleSkillsLocation = (location) => {
        if (this.state.skillsLocation !== location)
            this.setState({skillsLocation: location});
    }

    render() {
        return (
            <div className="App">
            
                <Nav scroll={this.state.scroll} skillsLocation={this.state.skillsLocation}/>
                <Home scroll={this.state.scroll}/>
                <Skills handleSkillsLocation={this.handleSkillsLocation}/>

            </div>
        );
    }
}

export default App;
