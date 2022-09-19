//import http-web-server nodejs core package
const http = require('http');

// create the webserver event handler
const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-Type' : 'Text/html'});
    res.end('<h1>Hello World</h1>');
});

//start the server 
server.listen(3000);


console.log('server running at http://localhost:3000');