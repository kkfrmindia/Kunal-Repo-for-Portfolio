const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("<h1> hello, I am Kunal !<h1>");
  } else if (req.url == "/about") {
    res.write("<h1>About Page!</h1>");
  }
  res.end();
});
server.listen(5000);

console.log("The server is running on 5000 Port! ");
