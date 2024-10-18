const http = require("http");
const PORT = 3032;
const HOSTNAME = "localhost";
const server = http.createServer((req, res) => {
  // Home page
  // About page
  // Contact page
  // Product page
  // Rest... > Error
  if (req.url == "/") {
    res.statusCode = 200;
    res.setHeader("content-Type", "text/plain");
    res.end("welcome to Kunal's Node.js Server!");
  } else if (req.url == "/home") {
    res.statusCode = 200;
    res.setHeader("content-Type", "text/plain");
    res.end("Home Page!");
  } else if (req.url == "/about") {
    res.statusCode = 200;
    res.setHeader("content-Type", "text/plain");
    res.end("About Page!");
  } else if (req.url == "/contact") {
    res.statusCode = 200;
    res.setHeader("content-Type", "text/plain");
    res.end("Contact Page!");
  } else if (req.url == "/product") {
    const options = {
      hostname: "fakestoreapi.com",
      path: "/products/2",
      method: "GET",
    };

    const apiReq = http.request(options, (apiRes) => {
      apiRes.on("data", (data) => {
        res.statusCode = 200;
        res.setHeader("content-Type", "application/json");
        res.end(data.toString());
      });
    });
    apiReq.on("error", () => {
      console.log(e);
    });
    apiReq.end();
  } else {
    res.statusCode = 500;
    res.setHeader("content-type", "application/json");
    res.end(JSON.stringify({ error: "server error!" }));
  }
});

server.listen(PORT, () => {
  console.log(`Server running at ${HOSTNAME}:${PORT}`);
});
