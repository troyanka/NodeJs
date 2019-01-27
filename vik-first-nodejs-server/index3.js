const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.write('Hellow world!');
        res.end();
    }

    if(req.url == '/about'){
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        let data = fs.createReadStream(__dirname + '/about.html', 'utf8');
        data.pipe(res);
    }

    if(req.url == '/contact'){
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        let data = fs.createReadStream(__dirname + '/contact.html', 'utf8');
        data.pipe(res);
    }
});

server.listen(5000, () => {
    console.log('server runs on: 5000');
});