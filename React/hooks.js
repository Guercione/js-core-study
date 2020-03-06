/* 
What are Hooks
Hooks are a type of function that enable the execution of custom code in a base code. In React, Hooks are special functions that allow us to “hook into” its core features.
React Hooks provide an alternative to writing class-based components by allowing us to easily handle state management from functional components.
*/

/* 1. Example */
function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}