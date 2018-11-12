const http = require('http');
const clc = require('cli-color');

const PORT  = process.env.PORT || 3030;
const HOST = process.env.HOST || 'locallhost';

const server = http.createServer((req, res)=>{
    let content;
    let statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')

    switch(req.url){
        case '/': 
         content = 'Welcome to the home page';
         break;
        case '/users': 
         content = 'Welcome to Users page';
         break;
        default:
        res.statusCode  = 404;
    }

    console.log(req.method, req.url);
    res.end(content);
});

server.listen(PORT, ()=> console.log(`Listen to port ${PORT}...`))