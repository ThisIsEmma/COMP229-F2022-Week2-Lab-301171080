//const connect = require('connect');  WE DELETED CONNECTED AND ALSO require() is under commonJS. NOw we will be using ES6 therefore see below

import express from 'express'; //This is what we should have under ES6 in order to import
                                // Also if using ES6, make sure to add "type":"module",  in package.json (can go anywhere but added below main)
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from 'express-session';

// ES Modules fix for __dirname
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));


//instantiate app-server
const app = express();

//Set up ViewEngine EJS
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(_dirname,'../public')));
app.use(session({
    secret: 'MySecret',
    saveUninitialized: false,
    resave: false
}))

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