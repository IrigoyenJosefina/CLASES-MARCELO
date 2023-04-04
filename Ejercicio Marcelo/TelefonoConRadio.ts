import { Telefono } from "./Telefono";

export class TelefonoConRadio extends Telefono{
    private frecuenciaActual:number;

    public verFrecuenciaActual():number{
        return this.frecuenciaActual
    }
}

