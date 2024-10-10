exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({ userId: process.env.EMAILJS_USER_ID })
    };
};