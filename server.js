var http = require("http");
const fs = require('fs');


fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Data from welcome.txt:', data);
});

http.createServer(function (request, response) {

    response.writeHead(200, { 'Content-Type': 'html' });

    response.end('<h1>Hello Node!!!!</h1>\n');
}).listen(3000);