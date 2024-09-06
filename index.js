var http = require("http");
var url = require("url");
var fs = require("fs");

http
  .createServer(function (req, res) {
    const myURL = url.parse(req.url, true);

    const filename =
      myURL.pathname === "/" ? "./index.html" : "." + myURL.pathname + ".html";

    fs.readFile(filename, function (err, data) {
      if (err) {
        fs.readFile("./404.html", (err, data) => {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.write(data);
          res.end();
        });
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  })
  .listen(8080);
