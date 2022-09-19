const connect = require('connect');

//instantiate app-server
const app = connect();

//custom middleware
function jSon(req,res,next){
    res.setHeader('Content-Type', 'application/json');
    res.end('{"message":"Hello from NodeJS Application as json"}');
}

function helloFromJSHTML(req,res,next){
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello from NodeJS Application as HTML</h1>');
}

function helloFromJS(req,res,next){
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from NodeJS Application');
}

//

app.use('/html', helloFromJSHTML);
app.use('/json', jSon);
app.use('/', helloFromJS);

//run app ?
app.listen(3000);
console.log('server running at http://localhost:3000');