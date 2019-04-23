import React, { Component } from 'react';

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

    //Shaired Functions
    willAnimate(id) {
        var topOffSet = window.innerHeight*0.15;
        var topOfScreen = window.scrollY + topOffSet;
        var botOfScreen = topOfScreen + window.innerHeight - topOffSet*1.5;

        var topOfElement = document.getElementById(id).getBoundingClientRect().top + window.scrollY;
        var botOfElement = document.getElementById(id).getBoundingClientRect().bottom + window.scrollY;

        if ((botOfElement >= topOfScreen) && (topOfElement <= botOfScreen))
            return true;
        return false;
    }
    inFrame(id) {
        var topOffSet = 60;
        var topOfScreen = window.scrollY + topOffSet;
        var botOfScreen = topOfScreen + window.innerHeight - topOffSet;
        
        var topOfElement = document.getElementById(id).getBoundingClientRect().top + window.scrollY;
        var botOfElement = document.getElementById(id).getBoundingClientRect().bottom + window.scrollY;

        if ((botOfElement >= topOfScreen) && (topOfElement <= botOfScreen))
            return true;
        return false;
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
                <Skills willAnimate={this.willAnimate} inFrame={this.inFrame}/>
                <Portfolio willAnimate={this.willAnimate} inFrame={this.inFrame}/>
                <About willAnimate={this.willAnimate} inFrame={this.inFrame}/>
                <Contact willAnimate={this.willAnimate} inFrame={this.inFrame}/>

            </div>
        );
    }
}

export default App;
