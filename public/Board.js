import { React } from "https://unpkg.com/es-react";

function Board(props) {
  const children = [];

  if (props.bouncerType && props.bouncers) {
    for (const bouncer of props.bouncers) {
      children.push(
        React.createElement(props.bouncerType, bouncer),
      );
    }
  }

  return React.createElement("div", {
    style: {
      position: "relative",
      width: "500px",
      height: "500px",
      border: "solid 2px",
    },
  }, children);
}

export default Board;

