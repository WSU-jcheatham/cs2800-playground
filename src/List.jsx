import { React } from 'https://unpkg.com/es-react';

export default function List(props) {
  const { items, input, setInput, addItem } = props;
  // same as const items = props.items;

  // const listItems = items.map((item) => <li>{item}</li>);
  //
  // is the same as
  //
  // const listItems = items.map((item) => {
  //   return <li>{item}</li>;
  // });
  //
  // is the same as
  //
  // const listItems = items.map(function (item) {
  //   return <li>{item}</li>;
  // });

  const listItems = [];
  for (const item of items) {
    listItems.push(<li onClick={() => console.log(item)}>{item}</li>);
  }

  function addToList() {
    addItem(input);
    setInput('');
  }

  function handleInputChange(event) {
    const { value } = event.target;
    // const compact = value.replace(/-/g, '');
    // const areaCode = compact.slice(0, 3);
    // const exchange = compact.slice(3, 6);
    // const rest = compact.slice(6);
    // setInput(`${areaCode}-${exchange}-${rest}`);
    setInput(value);
  }

  return (
    <div>
      <ul>
        {/*items.map((item) => <li>{item}</li>)*/}
        {listItems}
      </ul>

      <label>
        New item:
        <input onChange={handleInputChange} value={input} />
      </label>

      <button onClick={addToList}>Add</button>
    </div>
  );
}
