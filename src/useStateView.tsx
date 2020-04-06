import React from 'react';
import UseStateChild from './UseStateChild'


export default (): JSX.Element => {
    const initCount: number = 1
    return (
        <>
            <UseStateChild initCount={initCount} />
            <p><b>setCount(count - 1)</b>与<b>setCount(a => a - 1)</b> 区别是count-1 会变成合成事件，即，在useEffect中，连续setCount(count - 1)最终只会增加一次，以函数的方式不存在此问题（同setState）</p>
        </>
    );
}
