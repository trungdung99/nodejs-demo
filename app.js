// Bước 1: include thư viện http
const http = require('http');

// Bước 2: khởi tạo server
const server = http.createServer((request, response) =>{
    //console.log(request.url);
    if (request.url === '/'){
        response.setHeader("Content-Type","text/html");
        response.write("<h1>Home Page</h1>")
        response.end();
    }
    if (request.url === '/products'){
        response.setHeader("Content-Type","text/html");
        response.write("<h1>Product Page</h1>")
        response.end();
    }
    if (request.url === '/news'){
        response.setHeader("Content-Type","text/html");
        response.write("<h1>News Page</h1>")
        response.end();
    }
});

// Bước 3: lắng nghe cổng thực thi 
const port = 3001;
server.listen(port, () => {
    console.log(`server is running on ${port}`);
});

