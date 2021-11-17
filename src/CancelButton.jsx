import { React } from 'https://unpkg.com/es-react/dev';
import Button from './Button.js';

// <CancelButton label="foo" onClick={() => console.log('click me')} />

export default function CancelButton(props) {
  const { label, ...rest } = props;
  return (
    <Button {...rest} label={label ?? 'Cancel'} className="cancel-button" />
  );
}
