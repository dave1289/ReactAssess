### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is a javascript library for creating reusable front end components.  Extremely useful for parts of an application's UI that you will use over and over again.

- What is Babel?
Babel is essentially a javascript translator (or compiler) it takes new javascript and converts it into javascript that is browser compatible.

- What is JSX?
JSX is basically a mix of HTML and javascript for writing code that is used in react.

- How is a Component created in React?
Components can be created by class or by function.  We learned to use the function creation which allows us to return an HTML element with dynamic values that we control.

- What are some difference between state and props?
Props are passed in when the component is initially rendered by the parent.  State is data that is stored within the component and is alterable without re-rendering the entire component/parents.

- What does "downward data flow" refer to in React?
Downward data flow refers to the ability to pass props and functions down from parent components to their children.

- What is a controlled component?
A controlled component has its state and functionality controlled by the parent component.

- What is an uncontrolled component?
An uncontrolled component internally manages it's own data and functionality.

- What is the purpose of the `key` prop when rendering a list of components?
The key prop lets us keep track of each individual component with a unique key.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
Does not uniquely identify your elements when an array is sorted or when the array is altered.

- Describe useEffect.  What use cases is it used for in React components?
useEffect is used to alter parts of a component when a specific value changes after rendering.  For instance if you update a shopping list you can have useEffect notice the change in the list and adjust it.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
useRef allows you to create a shortcut to a DOM element within your react code and is not lost with rerendering.

- When would you use a ref? When wouldn't you use one?
You can use a ref when you want to be able to easily access a static part of your web page or if you want to update values without rerendering the component.

- What is a custom hook in React? When would you want to write one?
A custom hook is essentially a reusable chunk of code kept in a separate "hooks" directory (generally).  You can create things such as useState toggling functionality, useEffect updates, and pretty much anything you can imagine.  You would use Hooks when your component code is getting a little wordy/long/complicated.
