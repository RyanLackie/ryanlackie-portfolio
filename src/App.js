import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Nav from "./components/Nav"
import Home from "./components/Home";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";

import './App.scss';

class App extends Component {
    state = {
        scroll: 0,

        skillsLocation: null,
        portfolioLocation: null
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
    handlePortfolioLocation = (location) => {
        if (this.state.portfolioLocation !== location)
            this.setState({portfolioLocation: location});
    }

    render() {
        return (
            <div className="App">
            
                <Nav skillsLocation={this.state.skillsLocation} portfolioLocation={this.state.portfolioLocation}/>
                <Home/>
                <Skills handleSkillsLocation={this.handleSkillsLocation}/>
                <Portfolio handlePortfolioLocation={this.handlePortfolioLocation}/>

            </div>
        );
    }
}

export default App;
