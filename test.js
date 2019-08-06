let http = require("http");

let server = http.createServer((req, res)=> {
  res.end("Hello and welcome to my website");
})
server.listen(3000);
