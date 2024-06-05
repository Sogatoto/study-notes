// const fs = require('fs')

// require('http')
//     .createServer((res, req) => {
//         const urlString = req.urlString

//         switch(urlString) {
//             case '/' :
//                 res.end('hello')
//                 break
//             case '/home':
//                 fs.readFile('./home.html', (err, content) => {
//                     res.end(content)
//                 })

//         }
//     })
//     .listen(8080, () => {
//         console.log('localhost:8080')
//     })
const http = require('http');


const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello, World!');
  res.end(); // 结束响应

  // 尝试在res.end()之后添加更多的响应内容
  res.write('This will not be sent to the client');
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});