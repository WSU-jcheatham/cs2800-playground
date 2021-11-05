import { React } from 'https://unpkg.com/es-react';

export default function Board(props) {
  const children = [];

  if (props.bouncers) {
    for (const bouncer of props.bouncers) {
      const { Bouncer, ...props } = bouncer;
      children.push(<Bouncer {...props}/>);
    }
  }

  const width = 500;

  return (
    <div
      className="board-div"
      style={{
        position: 'relative',
        width: '500px',
        height: '500px',
        border: 'solid 2px',
      }}
    >
      {children}
    </div>
  );
}
