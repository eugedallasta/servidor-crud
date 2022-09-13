"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var persona_route_1 = __importDefault(require("../routes/persona.route"));
var connection_1 = __importDefault(require("../db/connection"));
var cors_1 = __importDefault(require("cors"));
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
        this.port = process.env.PORT || '4000';
        this.middlewares();
        this.routes();
        this.conectarDB();
    }
    Server.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log('Server running on port', _this.port);
        });
    };
    Server.prototype.routes = function () {
        this.app.use('/api/personas', persona_route_1.default);
    };
    Server.prototype.middlewares = function () {
        this.app.use(express_1.default.json());
        this.app.use(cors_1.default());
    };
    Server.prototype.conectarDB = function () {
        connection_1.default.connect(function (err) {
            if (err)
                throw err;
            console.log('Connected to database');
        });
    };
    return Server;
}());
exports.default = Server;
