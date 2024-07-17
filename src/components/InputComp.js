import React from 'react'

class InputComp extends React.Component {



    render() {
        const title = this.props.title
        const placeholder = this.props.ph
        return (
            <input type='TEXT' value="Custom Input" />
        )
    }
}

export default InputComp;