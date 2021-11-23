import { React } from 'https://unpkg.com/es-react/dev';

export default function InputForm(props) {
  const { value, setValue, saveName } = props;

  return (
    <form className="input-form">
      <label>
        Name{' '}
        <input value={value} onChange={(event) => setValue(event.target.value)} />
      </label>
      <button type="button" onClick={saveName}>Submit</button>
    </form>
  );
}
