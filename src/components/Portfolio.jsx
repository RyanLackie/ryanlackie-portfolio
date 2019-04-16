import React, { Component } from "react";

import './css/Portfolio.css';

export default class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            handlePortfolioLocation: 0
        };
    }

    componentWillUpdate() {
        var top = document.getElementById('Portfolio').getBoundingClientRect().top;
        this.props.handlePortfolioLocation(top);
    }

    render() {
        return (
            <div className="Portfolio section" id='Portfolio'>

                <div className="sectionLabelContainer">
                    <div className="sectionLabel">
                        Portfolio
                        <div className="sectionLabelLine"></div>
                    </div>
                </div>

            </div>
        );
    }
}