import { React } from 'https://unpkg.com/es-react/dev';
import Button from './Button.js';
import CancelButton from './CancelButton.js';
import ToggleButton from './ToggleButton.js';
import CollapsiblePane from './CollapsiblePane.js';

export default function App() {
  return <>
    <CollapsiblePane heading="Instructions">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.</p>
    </CollapsiblePane>

    <Button label="Ok"/>
    <Button label="1"/>
    <Button label="2"/>
    <CancelButton />
    <ToggleButton labelOn="On" labelOff="Off" />
  </>;
}
