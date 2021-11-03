import { React } from "https://unpkg.com/es-react";

function Circle(props) {
  const position = props.position ?? {};

  return React.createElement("div", {
    style: {
      position: "absolute",
      top: `${position.top}px`,
      left: `${position.left}px`,
      width: "100px",
      height: "100px",
      background: props.color ?? "green",
      borderRadius: "50%",
    },
  });
}

export default Circle;
