exports.handler = async (event) => {
    // Log the event data (optional)
    console.log('Received event:', event);

    // Perform an asynchronous operation, e.g., calling a REST API
    // await someAsyncOperation();

    // Construct the response object
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello from Lambda!',
            input: event,
        }),
    };

    // Return the response
    return response;
};