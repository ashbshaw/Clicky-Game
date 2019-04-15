import React, { Component } from "react"
import "./style.css"

class Navigation extends Component {

    renderMessage(correct, gameWon, clear = false) {
        let message, className
        if(clear) {
            className = ""
        }
        else if (correct === undefined) {
            message = "Click an image to begin"
            className = "click"
        } else {
            message = gameWon ? "You won!" : (correct ? "Correct!" : "Oops! Try Again.")
            className = correct ? "correct" : "incorrect"
        };

        return <li key={Math.random()} className={className}>{message}</li>
    };

    render() {
        return (
            <nav className="navbar">
                <div>
                    <ul className="center navList">
                        <li className="logo">Music Clicky Game</li>
                        {this.renderMessage(this.props.correct, this.props.gameWon)}
                        <li className="score">Score: {this.props.score} | High Score: {this.props.highScore}</li>
                    </ul>
                </div>
            </nav>
        );
    };
};

export default Navigation
