const http = require('http');

http.createServer((req, resp)=>{
    resp.write(" <h1>Hello this is palak gupta</h1>");
    resp.end();

}).listen(4500);

 