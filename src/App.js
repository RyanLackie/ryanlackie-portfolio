import React, { Component } from 'react';

import Nav from "./components/Nav";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

import './App.scss';
import './animate.css';

class App extends Component {
    state = {
        topLocation: null,
        skillsLocation: null,
        projectsLocation: null,
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
            aboutLocation: document.getElementById('About').getBoundingClientRect(),
            skillsLocation: document.getElementById('Skills').getBoundingClientRect(),
            projectsLocation: document.getElementById('Projects').getBoundingClientRect(),
            contactLocation: document.getElementById('Contact').getBoundingClientRect()
        });
    }

    // Shared Functions
    willAnimate(id) {
        let topOffSet = window.innerHeight*0.15;
        let topOfScreen = window.scrollY + topOffSet;
        let botOfScreen = topOfScreen + window.innerHeight - topOffSet*1.5;

        let topOfElement = document.getElementById(id).getBoundingClientRect().top + window.scrollY;
        let botOfElement = document.getElementById(id).getBoundingClientRect().bottom + window.scrollY;

        if ((botOfElement >= topOfScreen) && (topOfElement <= botOfScreen)) {
            return true;
        }
        return false;
    }
    inFrame(id) {
        let topOffSet = 60;
        let topOfScreen = window.scrollY + topOffSet;
        let botOfScreen = topOfScreen + window.innerHeight - topOffSet;

        let topOfElement = document.getElementById(id).getBoundingClientRect().top + window.scrollY;
        let botOfElement = document.getElementById(id).getBoundingClientRect().bottom + window.scrollY;

        if ((botOfElement >= topOfScreen) && (topOfElement <= botOfScreen)) {
            return true;
        }
        return false;
    }

    render() {
        return (
            <div className="App">

                <Nav
                    topLocation={this.state.topLocation}
                    aboutLocation={this.state.aboutLocation}
                    skillsLocation={this.state.skillsLocation}
                    projectsLocation={this.state.projectsLocation}
                    contactLocation={this.state.contactLocation}
                />
                <Home/>
                <About willAnimate={this.willAnimate} inFrame={this.inFrame}/>
                <Skills willAnimate={this.willAnimate} inFrame={this.inFrame}/>
                <Projects willAnimate={this.willAnimate} inFrame={this.inFrame}/>
                <Contact willAnimate={this.willAnimate} inFrame={this.inFrame}/>

            </div>
        );
    }
}

export default App;
