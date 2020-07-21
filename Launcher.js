"use strict";
exports.__esModule = true;
var Server_1 = require("./Server");
var Launher = /** @class */ (function () {
    function Launher() {
        this.server = new Server_1.Server();
    }
    Launher.prototype.launchApp = function () {
        console.log('started app');
        this.server.createServer();
        this.server.somePrivateLogic();
    };
    return Launher;
}());
new Launher().launchApp();
