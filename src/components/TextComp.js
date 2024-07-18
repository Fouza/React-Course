import React from 'react'

class TextComp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        //It triggers when the component has mounted
        this.setState({ count: this.state.count + 1 })
    }

    componentDidUpdate() {
        //It triggers at each update
        console.log("UPDATE")
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, nextState)
        return true
    }

    componentWillUnmount() {
        alert("The component named Header is about to be unmounted.");
    }

    handleClick(event) {
        // console.log(event.target)
        this.setState({
            count: this.state.count + 1
        })
    }


    render() {
        const v = this.props

        return (
            <div>
                <h2>{v.title}</h2>
                <p>{this.state.count}</p>
                <button onClick={this.handleClick}>Add +1</button>
                {/* <button onClick={(event) => { this.handleClick(event) }}>Add +1</button> */}
            </div>
        )
    }
}

export default TextComp