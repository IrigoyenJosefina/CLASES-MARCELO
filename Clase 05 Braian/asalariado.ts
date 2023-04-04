export class Asalariado {
    private nombre:string;
    private dni:long;
    private diasDeVacaciones: int;
    protected salarioBase:double;

constructor(pNombre:string,pDni:number,pDiasDeVacaciones:number,pSalarioBase:number){
this.nombre = pNombre;
this.dni = pDni;
this.diasDeVacaciones = pDiasDeVacaciones;
this.salarioBase = pSalarioBase;
}

public getNombre():string{
    return this.nombre;
}
public getDni():number{
    return this.dni;
}
public getDiasDeVacaciones():number{
    return this.diasDeVacaciones;
}

public setNombre(pNombre:string):void{
    this.nombre = pNombre;
}
public setDni(pDni:number):void{
    this.dni = pDni;
}
public setDiasDeVacaciones(pDiasDeVacaciones:number):void{
    this.diasDeVacaciones = pDiasDeVacaciones;
}

public getSalarioBase():void{
    this.salarioBase ++;
    console.log("Su salario es", this.salarioBase);
    
}

}