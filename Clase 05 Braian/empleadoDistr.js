"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.EmpleadoDistr = void 0;
var asalariado_1 = require("./asalariado");
var EmpleadoDistr = /** @class */ (function (_super) {
    __extends(EmpleadoDistr, _super);
    function EmpleadoDistr(pNombre, pDni, pDiasDeVacaciones, pSalarioBase, pZona) {
        var _this = _super.call(this, pNombre, pDni, pDiasDeVacaciones, pSalarioBase) || this;
        _this.zona = pZona;
        return _this;
    }
    EmpleadoDistr.prototype.getZona = function () {
        return this.zona;
    };
    EmpleadoDistr.prototype.setZona = function (pZona) {
        this.zona = pZona;
    };
    EmpleadoDistr.prototype.getSalarioBase = function () {
        this.salarioBase++;
        console.log("Su salario es", this.salarioBase);
    };
    return EmpleadoDistr;
}(asalariado_1.Asalariado));
exports.EmpleadoDistr = EmpleadoDistr;
