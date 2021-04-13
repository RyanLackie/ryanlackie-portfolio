import React, { Component } from "react";

import './css/Projects.scss';

import cookingAppImg from '../assets/cooking-app.png';
import currencyConverter from '../assets/currency-converter.png';
import cellGame from '../assets/cell-game.jpg';

export default class Projects extends Component {
    componentWillUpdate() {
        this.animationHandler();
    }
    animationHandler() {
        for (var project = 1; project <= 3; project++) {
            if (this.props.willAnimate('project' + project)) {
                document.getElementById('project' + project).style.visibility = 'visible';
                document.getElementById('project' + project).classList.add('fadeIn');
            }
            if (!this.props.inFrame('project' + project)) {
                document.getElementById('project' + project).style.visibility = 'hidden';
                document.getElementById('project' + project).classList.remove('fadeIn');
            }
        }
    }

    openLink = (url) => {
        var win = window.open(url, '_blank');
        win.focus();
    }
    alert = (message) => {
        alert(message);
    }

    render() {
        return (
            <div className="Projects section" id='Projects'>

                <div className="sectionLabelContainer">
                    <div className="sectionLabel">
                        Personal Projects
                        <div className="sectionLabelLine"></div>
                    </div>
                </div>

                <div className="container-fluid">

                    <div className="row justify-content-center">

                        <div className="project animated" id='project1'>
                            <div className="imageContainer">
                                <div className='image' style={{backgroundImage: `url(${cookingAppImg})`, backgroundPosition: 'top center'}}></div>
                                <div className="overlay">
                                    <div className="buttonContainer">
                                        <button className="inactiveLinkBtn">
                                            Demo On Request
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="footer">
                                <div className="title">
                                    Cooking App
                                </div>
                                <div className="tools">
                                    HTML, CSS/SCSS, JavaScript, Python, Svelte, Django, MySQL, Docker
                                </div>
                                <div className="about">
                                    A recipe management app (beta) that lets users follow and view each other's recipes. Mostly made to have fun with Django and cooking :)
                                </div>
                            </div>
                        </div>

                        <div className="project animated" id='project2'>
                            <div className="imageContainer">
                                <div className='image' style={{backgroundImage: `url(${currencyConverter})`, backgroundPosition: 'top center'}}></div>
                                <div className="overlay">
                                    <div className="buttonContainer">
                                        {/* <button className="linkBtn" onClick={this.openLink.bind(this, "http://159.89.238.244")}>
                                            See Live
                                        </button> */}
                                        <button className="linkBtn" onClick={this.openLink.bind(this, "https://github.com/RyanLackie/CurrencyConverter")}>
                                            See Code
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="footer">
                                <div className="title">
                                    Currency Converter
                                </div>
                                <div className="tools">
                                    HTML, CSS/SCSS, JavaScript, Python, Vue, Express, Node, Flask, Docker
                                </div>
                                <div className="about">
                                    A currency converter that uses exchangerate-api to convert money in both a Node and a Flask server that the client side can switch bettween using.
                                </div>
                            </div>
                        </div>

                        <div className="project animated" id='project3'>
                            <div className="imageContainer">
                                <div className='image' style={{backgroundImage: `url(${cellGame})`, backgroundPosition: 'top right'}}></div>
                                <div className="overlay">
                                    <div className="buttonContainer">
                                        {/* <button className="linkBtn" onClick={this.openLink.bind(this, "http://165.22.179.173")}>
                                            See Live
                                        </button> */}
                                        <button className="linkBtn" onClick={this.openLink.bind(this, "https://github.com/RyanLackie/CellGame")}>
                                            See Code
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="footer">
                                <div className="title">
                                    Cell Game
                                </div>
                                <div className="tools">
                                    HTML, CSS/SCSS, JavaScript, Vue, Express, Node
                                </div>
                                <div className="about">
                                    A fun but not so well named web game (beta) where two users can battle their group of computer controlled agar.io like blobs until one side eats all of the other team's blobs.
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}
