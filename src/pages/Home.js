import React from 'react'
import axios from 'axios'
import CONFIG from '../config.json'
import { faSpinner, faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './global.scss'

//To use fontawesome icons do this in terminal :
//npm i @fortawesome/react-fontawesome
//AND
//npm i @fortawesome/free-solid-svg-icons
// link : https://www.npmjs.com/package/@fortawesome/react-fontawesome
// link :

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            user: {},
            error: null
        }
        this.getProducts = this.getProducts.bind(this)
        this.createUser = this.createUser.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    async componentDidMount() {
        this.getProducts()
    }

    async getProducts() {
        try {
            // setTimeout(async () => { // Set Time Out just to demonstrate the loading
            await axios.get(`${CONFIG.api_server}/api/product/prod?price=${25}`)
                .then(response => {
                    if (response.data.status === 200) {
                        this.setState({ products: response.data.products })
                    } else {
                        this.setState({ error: response.data.message })
                    }
                })
            // }, 5000)
        } catch (e) {
            if (e.code === 'ECONNABORTED') {
                this.setState({ error: 'Request took too long please refresh' })
            }
        }
    }

    async createUser() {
        //Dummy Data / Test Data
        const user = {
            username: 'seif',
            age: '22',
            email: 's3if@s.com',
        }
        await axios.post(`${CONFIG.api_server}/api/user/add_user`, user)
            .then(response => {
                console.log(response)
                if (response.data.status === 200) {
                    this.setState({ user: response.data.user })
                } else {
                    this.setState({ error: response.data.message })
                }
            })

    }

    handleChange(name, value) {
        this.setState({
            user: {
                ...this.state.user,
                [name]: value
            }
        })
    }

    async handleSubmit() {
        await axios.post(`${CONFIG.api_server}/api/user/add_user`, this.state.user).then(response => {
            console.log(response)
        })
    }

    render() {
        const { products, user, error } = this.state
        console.log(user)
        return (
            <div>
                <h2>Hoooome</h2>

                <form>
                    <input name="username" onChange={(e) => this.handleChange("username", e.target.value)} />
                    <input name="age" onChange={(e) => this.handleChange("age", e.target.value)} />
                    <input name="email" onChange={(e) => this.handleChange("email", e.target.value)} />


                    <button onClick={this.handleSubmit}>Submit</button>
                </form>

                <button className='btn' onClick={() => this.createUser()}>CREATE USER</button>

                {!!user ? <p>{user.username}</p> : <p>Not Yet Created</p>}

                {products && products.length > 0 ?
                    <ul>
                        {products.map(item => (
                            <li key={item._id}>{item.name} {item.stocked ? 'IN STOCK' : 'SOLD OUT'}</li>
                        ))}
                    </ul> :
                    <FontAwesomeIcon icon={faSpinner} className='fa-spin spin_icon' color='#000' />
                }
            </div>
        )
    }

}
export default Home