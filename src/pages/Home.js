import React from 'react'
import axios from 'axios'
import CONFIG from '../config.json'

class Home extends React.Component {


    async componentDidMount() {
        await axios.get(`${CONFIG.api_server}/api/product/prod?price=${25}`).then(res => {
            console.log(res.data)
        })
    }

    render() {
        return (
            <div>Hoooome</div>
        )
    }

}
export default Home