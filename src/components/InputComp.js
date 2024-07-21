import React, { useEffect, useState } from 'react'



export const AnotherComp = () => {

    return (
        <p>Another Compo</p>
    )
}


export const TestComp = () => {

    return (
        <p>Test Compo</p>
    )
}


const InputComp = (props) => {

    const { pHolder, initialValue } = props

    const [value, setValue] = useState(initialValue)
    const [xValue, setXValue] = useState(0)

    const changeHandler = (event) => {
        setValue(event.target.value)
    }

    const handleXChange = (e) => {
        setXValue(e.target.value)
    }

    //SYNTAX:  useEffect(callbackFn, dependencides(array))

    //1.
    // useEffect(Fn, []) => if dep array empty => componentDidMount => Meaning: triggers only at first when the component mounts

    //2.
    //  useEffect(Fn) => No Dep => ComponentDidUpdate but for all kinds of changes => Meaning: It goes crazy and executes at each update of props/state
    // useEffect(() => {
    //     console.log('TEST')
    // })

    //3.
    // useEffect(Fn, [...dep]) => Have dependencies => ComponentDidUpdate but only if the specific values in the dep array changes

    useEffect(() => {
        console.log("value = ", value)
    }, [value])

    useEffect(() => {
        console.log("xValue =", xValue)
    }, [xValue])

    return (
        <div>
            {/* <AnotherComp /> */}
            <input
                key="1"
                type="text"
                placeholder={pHolder}
                value={value}
                onChange={changeHandler}
            />
            <input
                key="2"
                type="text"
                placeholder={pHolder}
                value={xValue}
                onChange={handleXChange}
            />
        </div>
    )
}

export default InputComp