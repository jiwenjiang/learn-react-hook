import React, { useState, useEffect } from 'react';

type stateProps = {
    initCount: number;
}

export default ({ initCount = 1 }: stateProps) => {
    const [count, setCount] = useState<number>(initCount);
    useEffect(() => {
        // setCount(count - 1)
        // setCount(a => a + 1)
        // setCount(a => a + 1)
        setCount(count + 1)
        setCount(count + 1)
    }, [])
    return (
        <React.Fragment>
            Count: {count} <br />
            <button onClick={() => setCount(1)}>Reset223</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(a => a + 1)}>+</button>
        </React.Fragment>
        // <div></div>
    );
}