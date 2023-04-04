import { Asalariado } from "./asalariado";
import { EmpleadoDistr } from "./empleadoDistr";
import { EmpleadoProd } from "./empleadoProd";

let empleado1:EmpleadoProd = new EmpleadoProd("Chanchito",23658924,15,500,"mañana" );
let empleado2:EmpleadoDistr = new EmpleadoDistr("ChanchoFeliz",45893457,7,300,"Tarde");

console.log(empleado1.getSalarioBase());
console.log(empleado2.getSalarioBase());


