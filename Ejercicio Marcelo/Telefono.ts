export class Telefono{
    //Atributos//
    private estaPrendido:boolean;
    private bateriaActual:number; 
    private horaActual:number;
    private compañiaDeTelefono:string;

    //Constructor//
    constructor(encendido:boolean,bateria:number,hora:number,compañia:string){
        this.estaPrendido = encendido;
        this.bateriaActual = bateria;
        this.horaActual = hora;
        this.compañiaDeTelefono = compañia; 
    }

    //Metodos//
    public mandarMensaje(){
        let mensaje:boolean = true;
        if(mensaje==true){
            console.log("Enviado");
        }else{
            console.log("Presione el boton para enviar el mensaje");
        }
    }

    public hacerLlamada(numero:string){
        if(numero.length>=6){
            console.log("Llamando");
        }else{
            console.log("Le faltan digitos al numero");
        }
    }

    public prenderApagar(){
        if(this.estaPrendido == true){
            console.log("El Telefono está encendido");
        }else{
            console.log("El Telefono está apagado");
        }
    }
       
    //Get y Set//
    public setEstaPrendido(e:boolean):void{
        this.estaPrendido=e;
    }

    public getEstaPrendido():boolean{
        return this.estaPrendido;
    }

    public setBateriaActual(b:number):void{
        this.bateriaActual = b;
    }

    public getBateriaActual():number{
        return this.bateriaActual;
    }

    public setHoraActual(h:number):void{
        this.horaActual = h; 
    }

    public getHoraActual():number{
        return this.horaActual;
    }

    public setCompañiaDeTelefono(c:string):void{
        this.compañiaDeTelefono = c;
    }

    public getCompañiaDeTelefono():string{
        return this.compañiaDeTelefono;
    }

}