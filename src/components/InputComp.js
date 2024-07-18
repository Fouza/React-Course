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

    const changeHandler = (event) => {
        setValue(event.target.value)
    }
    console.log(value)

    // const secondChangeHandler = (e) => {
    //     setValue(e.target.value)
    // }

    return (
        <div>
            <AnotherComp />
            <input
                key="1"
                type="text"
                placeholder={pHolder}
                value={value}
                onChange={changeHandler}
            />

            {/* <input
                key="2"
                type="text"
                value={value}
                onChange={secondChangeHandler}
            /> */}
        </div>
    )
}

export default InputComp