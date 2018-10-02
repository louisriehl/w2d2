const http = require("http");
const PORT = 8080;

// a function which handles requests and sends response
function requestHandler(request, response) {
  if(request.url == '/') {
    response.end("Welcome to the homepage!");
  } else if (request.url == "/about") {
    response.end("<html><body><h1>This is a test server!</h1></body></html>");
  } else {
    response.statusCode = 404;
    response.end("Oops! There's nothing here!");
  }

  response.end(`Requested Path: ${request.url}\nRequest Method: ${request.method}`);
}

var server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});