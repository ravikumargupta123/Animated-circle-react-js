import React, { Component } from "react";
import cn from "classnames";
import "./App.css";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showCircle: false,
            showMessage: false,
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ showCircle: true });
            document.addEventListener("transitionend", this.showMessage);
        }, 0);
    }

    showMessage = () => {
        this.setState({ showMessage: true });
    };

    render() {
        const { showMessage, showCircle } = this.state;
        return (
            <div className="container">
                <div
                    className={cn("circle", "message", {
                        showCircleClass: showCircle,
                    })}
                >
                    {showMessage ? "Hello Word" : ""}
                </div>
            </div>
        );
    }
}
