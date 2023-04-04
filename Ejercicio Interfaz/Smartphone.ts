import { iTelefono } from "./Interfaz";

class smartPhone implements iTelefono{
   private estaPrendido:boolean;
   private capturarFoto:boolean;

   public constructor(e:boolean,f:boolean){
    this.estaPrendido = e;
    this.capturarFoto = f;
   }

   public prenderApagar(): void {
     if(this.estaPrendido == false){
        console.log("Encender");
     }else{
        console.log("Apagar");
     }
   }

   public llamar(n: string): void {
       console.log(`Llamando a ${n}`);
   }

   public sacarFoto(f:boolean): void {
    if(f==true){
        console.log("Sacar foto")
    }else{
        console.log("Presionar boton")
    }
   }


}

let celu01:smartPhone = new smartPhone(false,true);
console.log(celu01);
