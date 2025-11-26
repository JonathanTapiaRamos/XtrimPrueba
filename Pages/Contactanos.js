import { BasePage } from "./BasePage.js";

export class contactanos extends BasePage {
  constructor(page) {
    super(page);

    // Selectores por XPath
    this.btnModalXtrim = "//span[@class='close']"
    this.btnoTellamamos = "//a[@title[contains(.,'Te llamamos')]]";
    this.inputNombres = "//div[label[contains(text(),'Nombres')]]//input";
    this.inputIdentifiacion = "//div[label[contains(text(),'Cédula')]]//input"
    this.inputTelefono = "//div[label[contains(text(),'Teléfono')]]//input"
    this.inputEmail ="//div[label[contains(text(),'Correo')]]//input"
    this.checkAutorizar="//input[@type='checkbox']"
    this.btnEnviar  = "//button[@data-submit-text='Enviar']";
    this.aRegresarInicio = "//a[@title='Home']";
  }

  async PaginaPrincipal(){
    await this.navigate()
  }

  async modalxtrim(){
    await this.click(this.btnModalXtrim)
  }
 
  async SeccionTeLlamamos() {
    await this.click(this.btnoTellamamos);
  }

  async SeccionContactos(nombres,identifacion,telefono,email){
    await this.type(this.inputNombres,nombres)
    await this.type(this.inputIdentifiacion,identifacion)
    await this.type(this.inputTelefono,telefono)
    await this.type(this.inputEmail,email)
    await this.click(this.checkAutorizar)
    await this.click(this.btnEnviar)

  }

  async getContactaMessange(){
    return await this.getText(this.aRegresarInicio)

  }

  async getErrorMessage() {
    return await this.getText(this.labelError);
  }
}
