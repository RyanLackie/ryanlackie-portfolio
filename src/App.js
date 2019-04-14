import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Home from "./components/Home";
import Nav from "./components/Nav"
import Skills from "./components/Skills";

import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="App">
            
                <Nav></Nav>
                <Home></Home>
                <Skills></Skills>

            </div>
        );
    }
}

export default App;
