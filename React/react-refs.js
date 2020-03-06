
/* 
What is Refs
React Refs are a useful feature that act as a means to reference a DOM element or a class component from within a parent component. This then give us a means to read and modify that element, bypassing state updates and re-renders.

 Links: 
 - https://medium.com/@rossbulat/how-to-use-react-refs-4541a7501663
 - https://reactjs.org/docs/refs-and-the-dom.html#dont-overuse-refs
*/

/* 1. Example */
class MyComponent extends React.Component {
    constructor(props) {
      super(props)
      this.myRef = React.createRef();
    }

    handleClick = () => {
        this.myRef.current.focus();
     }

    render() {
      return (
       <div>
         <input       
           name="email"
           onChange={this.onChange}
           ref={this.myRef}
           type="text"
        />
        <button onClick={this.handleClick}>
            Focus Email Input
        </button>
       </div>
      )
    }
}