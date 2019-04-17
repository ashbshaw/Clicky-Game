import React, { Component } from "react";
import AlbumCard from "./components/AlbumCard";
import Wrapper from "./components/Wrapper";
import Instruct from "./components/Instructions";
import albums from "./images";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    albums,
    clicked: [],
    score: 0,
    highScore: 0,
    correct: undefined,
    gameWon: false
  };

  randomize = () => Math.random() > .5 ? -1 : 1

  clickHandler = picture => {
    if (this.state.clicked.indexOf(picture) === -1) {
        let score = this.state.clicked.length + 1,
            clicked = score === this.state.albums.length ? [] : [...this.state.clicked, picture]

        this.setState({
            albums: this.state.albums.sort(this.randomize),
            clicked: clicked,
            score: score,
            highScore: Math.max(this.state.highScore, score),
            correct: true,
            gameWon: score === this.state.albums.length
        });
    } else {
        this.setState({
            albums: this.state.albums.sort(this.randomize),
            clicked: [],
            score: 0,
            correct: false,
            gameWon: false
        });
    };
};

  render() {
    return (
      <React.Fragment>
        <Navbar correct={this.state.correct} gameWon={this.state.gameWon} score={this.state.score} highScore={this.state.highScore} />
        <Wrapper>
          <Instruct>Choose one of Ashley's favorite albums, but don't pick the same one twice!</Instruct>
          {this.state.albums.map(album => (
            <AlbumCard
              id={album.id}
              key={album.id}
              name={album.name}
              image={album.image}
              artist={album.artist}
              handleClick={this.clickHandler}
            />
          ))};
        </Wrapper>
      </React.Fragment>
    );
  };
};

export default App;
