import axios from 'axios'
import qs from 'query-string'

const getSongs = (properties, callback) => {
    const endpointToken = 'https://cors-anywhere.herokuapp.com/https://accounts.spotify.com/api/token'
    const endpointApi = 'https://api.spotify.com/v1/search'
    const headersToken = {
        'Content-Type': 'application/x-www-form-urlencoded',
    }
    const bodyToken = {
        grant_type: 'client_credentials',
    }
    const auth = {
        username: process.env.REACT_APP_CLIENT_ID,
        password: process.env.REACT_APP_CLIENT_SECRET,
    }
    axios.post(endpointToken,qs.stringify(bodyToken),{
        auth: auth,
        headers: headersToken,
    }).then((resp) => {
        axios.get(endpointApi,{
            headers: { 'Authorization': 'Bearer ' + resp.data.access_token },
            params: { q: properties[0].class, type: 'track' },
        }).then(callback).catch((error) => {console.log(error)})
    }).catch((error) => {console.log(error)})
}

export { getSongs }