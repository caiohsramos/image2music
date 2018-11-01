import axios from 'axios'

const getSongs = (properties, callback) => {
    const endpoint = 'https://image2music-api.herokuapp.com/api/spotify'
    const auth = {
        username: process.env.REACT_APP_USERNAME,
        password: process.env.REACT_APP_PASSWORD,
    }

    const body = {
        query: properties[0].class,
    }

    axios.post(endpoint, body, {
        auth: auth,
    }).then(callback).catch((error) => { console.log(error) })
}

export { getSongs }