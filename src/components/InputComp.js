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

    // useEffect(callbackFn, dependencides(array))
    // useEffect(Fn, []) => componentDidMount

    //  It goes crazy and executes at each update (render)
    // useEffect(() => {
    //     console.log('TEST')
    // })

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