"use strict";
exports.__esModule = true;
exports.Telefono = void 0;
var Telefono = /** @class */ (function () {
    //Constructor//
    function Telefono(encendido, bateria, hora, compañia) {
        this.estaPrendido = encendido;
        this.bateriaActual = bateria;
        this.horaActual = hora;
        this.compañiaDeTelefono = compañia;
    }
    //Metodos//
    Telefono.prototype.mandarMensaje = function () {
        var mensaje = true;
        if (mensaje == true) {
            console.log("Enviado");
        }
        else {
            console.log("Presione el boton para enviar el mensaje");
        }
    };
    Telefono.prototype.hacerLlamada = function (numero) {
        if (numero.length >= 6) {
            console.log("Llamando");
        }
        else {
            console.log("Le faltan digitos al numero");
        }
    };
    Telefono.prototype.prenderApagar = function () {
        if (this.estaPrendido == true) {
            console.log("El Telefono está encendido");
        }
        else {
            console.log("El Telefono está apagado");
        }
    };
    //Get y Set//
    Telefono.prototype.setEstaPrendido = function (e) {
        this.estaPrendido = e;
    };
    Telefono.prototype.getEstaPrendido = function () {
        return this.estaPrendido;
    };
    Telefono.prototype.setBateriaActual = function (b) {
        this.bateriaActual = b;
    };
    Telefono.prototype.getBateriaActual = function () {
        return this.bateriaActual;
    };
    Telefono.prototype.setHoraActual = function (h) {
        this.horaActual = h;
    };
    Telefono.prototype.getHoraActual = function () {
        return this.horaActual;
    };
    Telefono.prototype.setCompañiaDeTelefono = function (c) {
        this.compañiaDeTelefono = c;
    };
    Telefono.prototype.getCompañiaDeTelefono = function () {
        return this.compañiaDeTelefono;
    };
    return Telefono;
}());
exports.Telefono = Telefono;
