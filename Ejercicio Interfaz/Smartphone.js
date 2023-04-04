"use strict";
exports.__esModule = true;
var smartPhone = /** @class */ (function () {
    function smartPhone(e, f) {
        this.estaPrendido = e;
        this.capturarFoto = f;
    }
    smartPhone.prototype.prenderApagar = function () {
        if (this.estaPrendido == false) {
            console.log("Encender");
        }
        else {
            console.log("Apagar");
        }
    };
    smartPhone.prototype.llamar = function (n) {
        console.log("Llamando a ".concat(n));
    };
    smartPhone.prototype.sacarFoto = function (f) {
        if (f == true) {
            console.log("Sacar foto");
        }
        else {
            console.log("Presionar boton");
        }
    };
    return smartPhone;
}());
var celu01 = new smartPhone(false, true);
console.log(celu01);
