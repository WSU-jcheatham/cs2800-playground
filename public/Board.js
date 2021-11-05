import { React } from 'https://unpkg.com/es-react';
export default function Board(props) {
  const children = [];

  if (props.bouncers) {
    for (const bouncer of props.bouncers) {
      const {
        Bouncer,
        ...props
      } = bouncer;
      children.push( /*#__PURE__*/React.createElement(Bouncer, props));
    }
  }

  const width = 500;
  return /*#__PURE__*/React.createElement("div", {
    className: "board-div",
    style: {
      position: 'relative',
      width: '500px',
      height: '500px',
      border: 'solid 2px'
    }
  }, children);
}