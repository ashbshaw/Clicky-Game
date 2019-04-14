
import React, { Component } from "react";
import AlbumCard from "./components/AlbumCard";
import Wrapper from "./components/Wrapper";
import Instruct from "./components/Instructions";
import albums from "./albums.json";
import Navbar from "./components/Navbar";
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
// import "font-awesome/css/font-awesome.css";

class App extends Component {
  // Setting this.state.albums to the albums json array
  // Something is off here. Not sure how to connect the album with the click handler
  state = {
    albums,
    clicked: [],
    score: 0,
    highScore: 0,
    correct: undefined,
    gameWon: false
  };

  // Obtained through research - need to talk through it
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
            gameWon: score === this.state.icons.length
        })
    } else {
        this.setState({
            albums: this.state.albums.sort(this.randomize),
            clicked: [],
            score: 0,
            correct: false,
            gameWon: false
        })
    }
}

  // Map over this.state.albums and render a AlbumCard component for each album object
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
            />
          ))}
        </Wrapper>
      </React.Fragment>
    );
  }
}

export default App;
