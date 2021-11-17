import { React, useState } from 'https://unpkg.com/es-react/dev';

export default function CollapsiblePane(props) {
  const { heading } = props;
  const [expanded, setExpanded] = useState();
  // const [toggled, setToggled] = useState();
  // const [hidden, setHidden] = useState();
  const arr = [1, 2, 3];

  arr.push(4);

  // const expandedStuff = useState();
  // const expanded = expandedStuff[0];
  // const setExpanded = expandedStuff[1];

  const classes = ['collapsible-pane'];
  if (expanded) {
    classes.push('collapsible-pane-expanded');
  }

  const arrow = !expanded ? '▶' : '▼ ';

  return (
    <div className={classes.join(' ')}>
      <h4 onClick={() => setExpanded(!expanded)}>
        <span className="arrow">{arrow}</span> {heading}
      </h4>
      {props.children}
    </div>
  );
}
