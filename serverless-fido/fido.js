const request = require('request-promise');

module.exports = () => {    
    const url = 'http://dog.ceo/api/breeds/image/random';
    
    const options = {
        url: url,
        json: true
    };

    return request(options)
        .then((response) => {
            console.log(response['message']);
            return response['message'];
        })
        .catch((error) => {
            console.log(error);
            return error;
        })
    }
