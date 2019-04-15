import React from "react";
import "./style.css";

function AlbumCard(props) {
  return (
    <div className="card" onClick={() => props.handleClick(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            {props.name}
          </li>
          <li>
            {props.artist}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AlbumCard;
