"use strict";
exports.__esModule = true;
exports.Asalariado = void 0;
var Asalariado = /** @class */ (function () {
    function Asalariado(pNombre, pDni, pDiasDeVacaciones, pSalarioBase) {
        this.nombre = pNombre;
        this.dni = pDni;
        this.diasDeVacaciones = pDiasDeVacaciones;
        this.salarioBase = pSalarioBase;
    }
    Asalariado.prototype.getNombre = function () {
        return this.nombre;
    };
    Asalariado.prototype.getDni = function () {
        return this.dni;
    };
    Asalariado.prototype.getDiasDeVacaciones = function () {
        return this.diasDeVacaciones;
    };
    Asalariado.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Asalariado.prototype.setDni = function (pDni) {
        this.dni = pDni;
    };
    Asalariado.prototype.setDiasDeVacaciones = function (pDiasDeVacaciones) {
        this.diasDeVacaciones = pDiasDeVacaciones;
    };
    Asalariado.prototype.getSalarioBase = function () {
        this.salarioBase++;
        console.log("Su salario es", this.salarioBase);
    };
    return Asalariado;
}());
exports.Asalariado = Asalariado;
