import React from 'react'

class TextComp extends React.Component {
    constructor(props) {
        super(props) //super(props) executes the parent's constructor function (React.Component)
        //Without her we don't have access to the functions of Component class of React

        this.state = {//Here we can declare any state we want of any type
            count: 0,
            listEmployees: []
        }

        // Let's blame JavaScript for what happens in this next line
        // Because of how the 'this' works in JavaScript
        // Each time we declare a new function in Class Component we need to bind it to the 'this'
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        //It triggers when the component has mounted
        // console.log('MOUNT')
        this.setState({ count: this.state.count + 1 })
    }

    componentDidUpdate() {
        //It triggers at each update
        // console.log("UPDATE")
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     //Triggers after update of props or/and state and decides whether the component should update or not
    //     // console.log(nextProps, nextState)
    //     // console.log('SHOULD')
    //     return true
    // }

    componentWillUnmount() {
        // Triggers when the component unmounts from DOM. For example when we leave the page
        console.log("UNMOUNT")
        alert("Are you sure you want to leave ?");
    }

    // handleClick(event) {
    handleClick() {//Here we don't need the event so no need to call it in params of the function
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