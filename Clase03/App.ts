import { Televisor } from "./Televisor";
import { Electro } from "./Electro";
import { SmartTV } from "./smartTv";


const tele = new SmartTV.SmartTV();
const oldTv = new Televisor();
oldTv.setIsOn();
oldTv.getInfo();
tele.setIsOn();
tele.getInfo();
const deviceX = new Electro();
console.log(deviceX instanceof SmartTV.SmartTV);
console.log(deviceX instanceof Televisor);
console.log(deviceX instanceof Electro);

