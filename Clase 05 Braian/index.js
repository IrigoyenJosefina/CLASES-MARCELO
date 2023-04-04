"use strict";
exports.__esModule = true;
var empleadoDistr_1 = require("./empleadoDistr");
var empleadoProd_1 = require("./empleadoProd");
var empleado1 = new empleadoProd_1.EmpleadoProd("Chanchito", 23658924, 15, 500, "mañana");
var empleado2 = new empleadoDistr_1.EmpleadoDistr("ChanchoFeliz", 45893457, 7, 300, "Tarde");
console.log(empleado1.getSalarioBase());
console.log(empleado2.getSalarioBase());
