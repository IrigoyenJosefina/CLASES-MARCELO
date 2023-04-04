import { Asalariado } from "./asalariado";


export class EmpleadoProd extends Asalariado{
private turno:string;

constructor(pNombre:string,pDni:number,pDiasDeVacaciones:number,pSalarioBase:number,pTurno:string){
super(pNombre,pDni,pDiasDeVacaciones,pSalarioBase);
this.turno = pTurno;
}

public getTurno():string{
    return this.turno;
}

public setTurno(pTurno:string):void{
    this.turno = pTurno;
}


public getSalarioBase():void{
    this.salarioBase ++;
    console.log("Su salario es", this.salarioBase);
    
}


}