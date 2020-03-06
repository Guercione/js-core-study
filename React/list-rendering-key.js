/* 
Keys in rendering lists
 - Keys help React identify which items have changed, are added, or are removed
 - The best way to pick a key is to use a string that uniquely identifies a list item among its siblings
 - When you don’t have stable IDs for rendered items, you may use the item index as a key as a last resort

 Links: 
 - https://reactjs.org/docs/lists-and-keys.html
*/

/* 1. Example */
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);