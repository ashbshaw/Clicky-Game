
import React, { Component } from "react";
import AlbumCard from "./components/AlbumCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import albums from "./albums.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    albums
  };

  removeAlbum = id => {
    // Filter this.state.albums for albums with an id not equal to the id being removed
    const albums = this.state.albums.filter(albums => albums.id !== id);
    // Set this.state.albums equal to the new albums array
    this.setState({ albums });
  };

  // Map over this.state.albums and render a AlbumCard component for each album object
  render() {
    return (
      <Wrapper>
        <Title>Ashley's Favorite Albums in the Whole Wide World</Title>
        {this.state.albums.map(album => (
          <AlbumCard
            removeAlbum={this.removeAlbum}
            id={album.id}
            key={album.id}
            name={album.name}
            image={album.image}
            occupation={album.year}
            location={album.genre}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
