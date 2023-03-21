const wakeUp = require('./index.js');

exports.handler = async (event) => {
    // TODO implement

    let response = {
        statusCode: 200,
        body: JSON.stringify('发送成功!'),
    };
    try {
        await wakeUp();
    } catch(err) {
        response = {
            statusCode: 500,
            body: JSON.stringify(err.message)
        }
    }

    return response;
};