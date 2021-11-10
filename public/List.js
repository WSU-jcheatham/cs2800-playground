import { React } from 'https://unpkg.com/es-react';
export default function List(props) {
  const {
    items,
    input,
    setInput,
    addItem
  } = props; // same as const items = props.items;
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
    listItems.push( /*#__PURE__*/React.createElement("li", {
      onClick: () => console.log(item)
    }, item));
  }

  function addToList() {
    addItem(input);
    setInput('');
  }

  function handleInputChange(event) {
    const {
      value
    } = event.target; // const compact = value.replace(/-/g, '');
    // const areaCode = compact.slice(0, 3);
    // const exchange = compact.slice(3, 6);
    // const rest = compact.slice(6);
    // setInput(`${areaCode}-${exchange}-${rest}`);

    setInput(value);
  }

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", null, listItems), /*#__PURE__*/React.createElement("label", null, "New item:", /*#__PURE__*/React.createElement("input", {
    onChange: handleInputChange,
    value: input
  })), /*#__PURE__*/React.createElement("button", {
    onClick: addToList
  }, "Add"));
}