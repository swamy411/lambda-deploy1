exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda-C! newly updated 4nd time'),
    };
    return response;
};

