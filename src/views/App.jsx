import React, { useState } from 'react';

const App = (props) => {
    const { a, b, c } = props.test
    const [count, counter] = useState(0) 
    const logger = (count) => {
        counter(count + 1)
    }
    return (
    <div>
        <p>If you see this message, you have successfully rendered a sever-side react application.</p>
        <p>The button has been clicked {count} times.</p>
        <p>The value of the variable 'a' is {a}</p>
        <p>The value of the variable 'b' is {b}</p>
        <p>The value of the variable 'c' is {c}</p>
        <button onClick={() => logger(count)}>Click Me</button>
    </div>
    );
}

export default App;