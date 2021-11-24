import { React } from 'https://unpkg.com/es-react/dev';

/**
 * A form that has a labeled input and can save a text value.
 *
 * Takes 3 props:
 *   - value - the current input value
 *   - setValue - a function that takes a new input value (a string)
 *   - saveName - a function that takes no arguments that is called when the
 *   user wants to save the current input value
 */
export default function InputForm(props) {
  const { value, setValue, saveName } = props;

  return (
    <form className="input-form">
      <label>
        Name{' '}
        <input value={value} onChange={(event) => setValue(event.target.value)} />
      </label>
      <button type="button" onClick={() => saveName(value)}>Submit</button>
    </form>
  );
}
