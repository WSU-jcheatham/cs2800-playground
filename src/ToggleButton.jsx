import { React, useState } from 'https://unpkg.com/es-react/dev';
import Button from './Button.js';

export default function ToggleButton(props) {
  const [on, setOn] = useState(true);
  const { labelOn, labelOff, ...rest } = props;

  return (
    <Button
      {...rest}
      label={on ? labelOn : labelOff}
      className={'toggle ' + (on ? 'toggle-on' : 'toggle-off')}
      onClick={() => setOn(!on)}
    />
  );
}
