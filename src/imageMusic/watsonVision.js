import axios from 'axios'
import qs from 'query-string'

const getProperties = (url, callback) => {
    const endpointApi = 'https://gateway.watsonplatform.net/visual-recognition/api/v3/classify'
    const endpointToken = 'https://cors-anywhere.herokuapp.com/https://iam.bluemix.net/identity/token'

    const headersToken = {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json",
    }

    const requestData = {
        grant_type: "urn:ibm:params:oauth:grant-type:apikey",
        apikey: process.env.REACT_APP_IBM_API,
    }

    const paramsApi = {
        version: '2018-03-19',
        url: url,
    }

    axios.post(endpointToken, qs.stringify(requestData), {
        headers: headersToken,
    })
        .then((resp) => {
            axios.get(endpointApi, {
                headers: {
                    'Authorization': 'Bearer ' + resp.data.access_token,
                    'Accept-Language': 'en',
                },
                params: paramsApi
            }).then(callback).catch((error) => { console.log(error) })
        }).catch((error) => { console.log(error) })
}

export { getProperties }