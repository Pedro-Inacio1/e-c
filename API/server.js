const http = require("http");
const port = process.ENV || 3000;
const app = require("./app")
const server = http.createServer();
server.listen(port); 