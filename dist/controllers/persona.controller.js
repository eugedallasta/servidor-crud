"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var connection_1 = __importDefault(require("../db/connection"));
exports.getPersonas = function (req, res) {
    connection_1.default.query("SELECT * FROM persona", function (err, data) {
        if (err)
            throw err;
        res.json(data);
    });
};
exports.getPersona = function (req, res) {
    var id = req.params.id;
    connection_1.default.query("SELECT * FROM persona WHERE id = ?", id, function (err, data) {
        if (err)
            throw err;
        res.json(data[0]);
    });
};
exports.deletePersona = function (req, res) {
    var id = req.params.id;
    connection_1.default.query("DELETE FROM persona WHERE id = ?", id, function (err, data) {
        if (err)
            throw err;
        res.json({ message: "Persona eliminada correctamente" });
    });
};
exports.postPersona = function (req, res) {
    var body = req.body;
    connection_1.default.query("INSERT INTO persona set ?", [body], function (err, data) {
        if (err)
            throw err;
        res.json({ message: "Persona creada correctamente" });
    });
};
exports.putPersona = function (req, res) {
    var body = req.body;
    var id = req.params.id;
    connection_1.default.query("UPDATE persona set ? WHERE id = ?", [body, id], function (err, data) {
        if (err)
            throw err;
        res.json({ message: "Persona actualizada correctamente" });
    });
};
