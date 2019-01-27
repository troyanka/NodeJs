
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

  if( req.url === '/' ){
    res.writeHead(200, {'Content-Type': 'text/html'});
    var data = fs.createReadStream(__dirname + '/index.html', 'utf8');
    data.pipe(res);
  }

});

server.listen(3002);