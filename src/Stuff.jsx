import { React } from 'https://unpkg.com/es-react/dev';

export default function Stuff(props) {
  const { recipes, setRecipes } = props;

  const list = [];
  for (const r of recipes) {
    list.push(<li onClick={() => renderRecipe(r)}>{r.name}</li>);
  }

  function renderRecipe(event) {
    const recipeName = event.target.getAttribute('data-recipe');
    props.renderRecipe(...);
  }

  return <ul>
    {/* {recipes ? recipes.map((r) => <li>...</li>) : null} */}
    <li onClick={() => renderRecipe(recipe)}>Item 1</li>
    <li onClick={function () { renderRecipe(recipe) }}>Item 1</li>
    <li data-recipe={recipe.name} onClick={renderRecipe}>Item 1</li>
    {list}
  </ul>;
}

export async function getData(searchEndpoint, searchString) {
  const params = new URLSearchParams();
  params.set('search', searchString);
  const response = await fetch(searchEndpoint + '?' + params);

  // const response = await fetch(searchEndpoint + '?search=' + params.get('search'));
  // const response = await fetch(searchEndpoint + '?search=' + searchString);
  // https://google.com?search=abcdefg
}
