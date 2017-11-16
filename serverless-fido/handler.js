'use strict';

const oauth = require('./oauth');
const fido = require('./fido');
const unfurl = require('./unfurl');

module.exports.authorization = (event, context, callback) => {
    const code = event.queryStringParameters.code;

    oauth(code)
    .then(() => {
        const response = {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Authorizing...',
                input: event,
            }),
        };

        callback(null, response);
    })
    .catch((error) => {
        const response = {
            statusCode: 500,
            body: JSON.stringify({
                message: error,
                input: event,
            }),
        };

        callback(null, response);
    });
};

module.exports.fido = (event, context, callback) => {

    fido()
    .then((imageURL) => {
        console.log(imageURL);
        var attachment = unfurl(imageURL);
        const response = {
            statusCode: 200,
            body: JSON.stringify(attachment),
        };

        callback(null, response);
    })
    .catch((error) => {
        console.log(error);
    })
};
