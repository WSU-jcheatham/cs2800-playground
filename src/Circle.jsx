import { React } from 'https://unpkg.com/es-react';

export default function Circle(props) {
  const position = props.position ?? {};
  const style = {
    position: 'absolute',
    top: `${position.top}px`,
    left: `${position.left}px`,
    width: '100px',
    height: '100px',
    background: props.color ?? 'green',
    borderRadius: '50%',
  };

  return <div style={style} />;
}
