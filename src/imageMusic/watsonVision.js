import axios from 'axios'

const getProperties = (url, callback) => {
    const endpoint = 'https://image2music-api.herokuapp.com/api/watson'

    const auth = {
        username: process.env.REACT_APP_USERNAME,
        password: process.env.REACT_APP_PASSWORD,
    }

    const body = {
        'url': url,
    }

    axios.post(endpoint, body, {
        auth: auth,
    }).then(callback).catch((error) => { console.log(error) })
}

export { getProperties }