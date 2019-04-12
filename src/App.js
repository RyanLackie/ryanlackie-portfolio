import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Home from "./components/Home";
import Nav from "./components/Nav"
import About from "./components/About";

import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="App">
            
                <Nav></Nav>
                <Home></Home>
                <About></About>
                
                <Home></Home>
                <Home></Home>

            </div>
        );
    }
}

export default App;
