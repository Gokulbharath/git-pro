javascript
Copy code
const http = require('http');

const port = 3000;
const requestHandler = (request, response) => {
    console.log(request.url);
    response.end('Hello from Node.js CI/CD Pipeline!');
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        return console.log('Something went wrong', err);
    }
    console.log(`Server is listening on port ${port}`);
});