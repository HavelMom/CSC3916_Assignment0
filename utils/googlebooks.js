const axios = require('axios')

module.exports = async (phrase) => {
    const results = await axios.get('https://www.googleapis.com/books/v1/volumes', {
        params: {
            format: 'json',
            q: `${phrase}`
        }
    })

    //TODO: return a formattedObj, already done, formatted obj is alreayd there
    var formattedObj = {
        data: results.data,
        status: results.status,
        statusText: results.statusText,
        headers: results.headers,
        requestHeader: results.config.headers
    }

    //TODO: return the formattedObject, just need to return th object, omit the json.stringify
    //return JSON.stringify(results.data);
    return formattedObj;
}
