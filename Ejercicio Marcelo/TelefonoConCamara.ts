import {Telefono} from "./Telefono"

export class TelefonoConCamara extends Telefono{
    private camara:string;
    private flash:boolean;
    private temporizador:number;

    constructor(camara:string,flash:boolean,temp:number){
        super(true,23,11,"movistar")
        this.camara = camara;
        this.flash = flash;
        this.temporizador = temp;
    }

   public setCamara(c:string):void{
      this.camara=c;
   }


    public sacarFoto():string{
        let click:boolean=true;
        if(click == true){
           return "Sacar foto";
        }else{
            return "Presionar el boton";
            
        }
    }

    
}


