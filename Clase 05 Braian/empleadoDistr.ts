import { Asalariado } from "./asalariado";

export class EmpleadoDistr extends Asalariado  {
private zona:string;

constructor(pNombre:string,pDni:number,pDiasDeVacaciones:number,pSalarioBase:number,pZona:string){
    super(pNombre,pDni,pDiasDeVacaciones,pSalarioBase);
this.zona = pZona;
}

public getZona():string{
    return this.zona;
}
public setZona(pZona:string):void{
    this.zona = pZona;
}


public getSalarioBase():void{
    this.salarioBase ++;
    console.log("Su salario es", this.salarioBase);
    
}
}
