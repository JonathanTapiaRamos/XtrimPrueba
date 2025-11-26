import { BasePage } from "./BasePage.js";

export class PagaServicio extends BasePage {
  constructor(page) {
    super(page);

    // Selectores por XPath
    this.btnModalXtrim = "//span[@class='close']"
    this.btnPagosRapidos = "(//a[contains(text(),'Pagar Servicio')])[2]"
    this.btnoContinuar = "(//button[span[contains(text(),'Continuar')]])[2]";
    this.getPagos = "//div[span[contains(text(),'Pagos')]]";
  }

  async PaginaPrincipal(){
    await this.navigate()
  }


  async modalxtrim(){
    await this.click(this.btnModalXtrim)
  }
 
 
  async PagosRapidos() {
    await this.click(this.btnPagosRapidos);
  }


   async Continuar() {
    await this.click(this.btnoContinuar);
  }





  async getPagoRapidoMessange(){
    return await this.getText(this.getPagos)

  }

}
