const fs = require("fs");
const http = require("http");
const port = 7800;
const localhost = "127.0.0.1";

const server = http.createServer((req, res) => {
  let path = "./Data/";
  if (req.url === "/") {
    path += "index.html";
    res.statusCode = 200;
  } else if (req.url === "/about") {
    path += "about.html";
    res.statusCode = 200;
  } else if (req.url === "/contact") {
    path += "contact.html";
    res.statusCode = 200;
  } else {
    path += "error.html";
    res.statusCode = 404;
    let path = "./Data/";
    if (req.url === "/") {
      path += "index.html";
    } else if (req.url === "/about") {
      path += "about.html";
    } else if (req.url === "contact") {
      path += "contact.html";
    } else {
      path += "error.html";
    }
  }
  fs.readFile(path, (error, data) => {
    if (error) {
      console.log(error);
      res.end();
    } else {
      res.setHeader("content-Type", "text/html");
      res.write(data);
      res.end();
    }
  });
});
server.listen(port, () => {
  console.log(`The server is running at ${localhost}:${port}`);
});
