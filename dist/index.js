"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketServer = void 0;
require = require("esm")(module);
const http = require("http");
class SocketServer {
    constructor(port) {
        this.port = port;
        http
            .createServer()
            .on("request", (request, socket) => {
            console.log(request.headers);
        })
            .listen(this.port);
        console.log("server start on port: ", this.port);
    }
}
exports.SocketServer = SocketServer;
new SocketServer(8080);
