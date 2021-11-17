import { React } from 'https://unpkg.com/es-react/dev';

export default function Button(props) {
  const { onClick, label, className } = props;

  const classVal = ['button'];
  if (className) {
    classVal.push(className);
  }

  return <button onClick={onClick} className={classVal.join(' ')}>
    {label}
  </button>
}
