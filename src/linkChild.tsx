import React, { Children, ReactElement, ReactNode } from 'react';

type childType = ReactElement | ReactElement[]
type contentType = {
    children: childType
}

function ChildContent({ children }: contentType) {
    const childNumber: number = Children.count(children)
    console.log('child', children)
    const cloneEl = (c: ReactElement) => React.cloneElement(c, { onClick: () => { console.log(888) } })
    const createEl = (c: ReactElement) => React.createElement("div")
    // console.log('create', React.createElement(React.Fragment, {}, children))
    const creatEl = React.createElement(React.Fragment, {}, children)
    if (childNumber === 1 && Children.only(children).type === 'a') {
        return <>{children}</>
        // return (<div onClick={console.log(888)}>{children}44</div>)
    } else {
        console.log('qq', Children.toArray(children))
        console.log('o', Children.map(children, (v) => {
            console.log('v', v)
            return v
        }))
        return <>{creatEl}</>
    }
    // return {!href?}
}

function LinkChild() {
    return (
        <>
            <div>
                <ChildContent>
                    <>
                        <span style={{ color: 'red' }} className="aaaa">1334</span>
                        <span>1334</span>
                    </>
                </ChildContent>
            </div>
        </>
    );
}

export default LinkChild;

// TypeError: Cannot assign to read only property 'props' of object '#<Object>'
// TypeError: Cannot add property a, object is not extensible
