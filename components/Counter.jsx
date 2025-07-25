import React, { useState, useEffect } from 'react';

export function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Count updated: ${count}`);
    }, [count]); // Runs whenever `count` changes

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}
