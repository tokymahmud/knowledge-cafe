import React from 'react';
import "./BlogQA.css"

const BlogQA = () => {
    return (
        <div className='BLogQAContainer'>
            <h2>Props vs state</h2>
             <p>Props allow one to pass data from one component to other components as an argument. State holds information about the components.Props are owned and read only by a parent. On the other hand The state is owned locally, and the component itself updates it. Props can be changed only if an upstream shift is caused by a callback function passed on to the child.A prop can be passed on to the child in the state of a parent. They apply to the same value but can only be updated by the parent variable.

</p>
            <h2>How does useState work?
</h2>
<p>UseState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it.It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.</p>
            <h2>Purpose of useEffect other than fetching data.
</h2>
<p>UseEffect hook will make a network request on component render.In react js it allows one to perform side effects in your components. The react useEffect examples of side effects include retrieving data, direct DOM updates, and timers. </p>
            <h2>How Does React work?
</h2>
<p>React is a free and open-source front-end JavaScript library. It lets you put components together, but it doesn't prescribe how to do routing and data fetching.ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            
        </div>
    );
};

export default BlogQA;