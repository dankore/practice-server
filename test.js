let http = require("http");

let server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end("Hello and welcome to my website");
  } else if (req.url === '/about'){
    res.end("Thanks for wanting to know about us");
  } else {
    res.end('I cannot find the page you are looking for')
  }
});
server.listen(3000);
