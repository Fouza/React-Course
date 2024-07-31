import React from 'react'
import axios from 'axios'
import CONFIG from '../config.json'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './global.css'

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
            error: null
        }
    }


    async componentDidMount() {
        try {
            // setTimeout(async () => { // Set Time Out just to demonstrate the loading
            await axios.get(`${CONFIG.api_server}/api/product/prod?price=${25}`, { timeout: 1000 }).then(response => {
                console.log(response)
                if (response.data.status === 200) {
                    this.setState({ products: response.data.products })
                } else {
                    this.setState({ error: 'No response from server' })
                }
            })
            // }, 1000)
        } catch (e) {
            if (e.code === 'ECONNABORTED') {
                this.setState({ error: 'Request took too long please refresh' })
            }

        }
    }

    render() {
        const { products, error } = this.state
        return (
            <div>
                <h2>Hoooome</h2>
                <FontAwesomeIcon icon={faSpinner} className='fa-spin spin_icon' color='#000' />

                {!error && products && products.length > 0 ? <ul>
                    {products.map(product => (
                        <li key={product._id}>{product.name}</li>
                    ))}
                </ul> : !error ?
                    <FontAwesomeIcon icon={faSpinner} className='fa-spin spin_icon' color='#000' />
                    :
                    <p>{error}</p>
                }
            </div>
        )
    }

}
export default Home