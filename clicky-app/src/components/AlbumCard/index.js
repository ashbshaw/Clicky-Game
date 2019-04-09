// HOW DO I GET THE ALBUM JSON INTO HERE?

import React from "react";
import "./style.css";

function AlbumCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Album:</strong> {props.name}
          </li>
          <li>
            <strong>Artist:</strong> {props.artist}
          </li>
          <li>
            <strong>Year Released:</strong> {props.year}
          </li>
          <li>
            <strong>Genre:</strong> {props.genre}
          </li>
        </ul>
      </div>
      <span onClick={() => props.removeAlbum(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default AlbumCard;
