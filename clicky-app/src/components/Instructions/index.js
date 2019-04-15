import React from "react";
import "./style.css";

function Instruct(props) {
  return <p className="instruct">{props.children}</p>;
};

export default Instruct;