import { Televisor } from "./Televisor";
export class SmartTV extends Televisor {
  private netflixOn: boolean;
    static SmartTV: any;
  public constructor() {
    super();
    this.netflixOn = false;
  };
  public setNetflixOn() {
    this.netflixOn = !this.netflixOn;
  }
  public getInfo() {
    if (this.estaPrendido)
      console.log(`
    --------------------
            Info
    --------------------
    Canal:   ${this.canalActual}
    Volumen: ${this.volumenActual}
    Netflix: ${this.netflixOn ? "encendido" : "apagado"}
    `);
  }
};