import { React } from 'https://unpkg.com/es-react/dev';
import { render, fireEvent } from '@testing-library/react';
import InputForm from './InputForm.jsx';

test('InputForm renders', () => {
  const setValue = () => undefined;

  const { container } = render(<InputForm setValue={setValue} />);
  expect(container.querySelectorAll('input')).toHaveLength(1);
  expect(container.querySelectorAll('button')).toHaveLength(1);
  expect(container.querySelector('label')).toHaveTextContent('Name');
  expect(container).toMatchSnapshot();
});

test('InputForm saves its input', () => {
  const setValue = () => undefined;
  const saveName = jest.fn();

  const { container } = render(
    <InputForm saveName={saveName} value="foo" />
  );

  expect(saveName).not.toHaveBeenCalled();

  const button = container.querySelector('button');
  fireEvent.click(button);

  expect(saveName).toHaveBeenCalledTimes(1);
  expect(saveName).toHaveBeenCalledWith('foo');
});
