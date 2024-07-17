import React from 'react'


const TextComp = (props) => {



    const { color, size, title, margin } = props

    console.log(margin)
    return (
        <h2 style={{
            color: "#FFF",
            backgroundColor: color,
            fontSize: size,
            margin: margin,
        }}>{title}</h2>
    )
}

export default TextComp