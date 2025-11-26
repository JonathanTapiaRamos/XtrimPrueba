import { BasePage } from "./BasePage.js";

export class Zapping extends BasePage {
  constructor(page) {
    super(page);

    // Selectores por XPath
    this.btnModalXtrim = "//span[@class='close']"
    this.btnZapping ="/html/body/div[1]/div/header/div/div/div[1]/div/div[2]/ul/li[2]/a"
    this.btnContrataloAqui = "/html/body/div[1]/div/div[2]/div/div/div/main/article/div/div[7]/div/div/div/div[2]/div[4]/div/div/div[9]/a"
    this.getMas="//div[contains(text(),'Ver más')]"
  }

  async PaginaPrincipal(){
    await this.navigate()
  }

  async modalxtrim(){
    await this.click(this.btnModalXtrim)
  }
 
  async SeccionZapping() {
    await this.click(this.btnZapping);
  }

 
  async ContrataloAqui(){
    await this.click(this.btnContrataloAqui);
  }

  async getContactaMessange(){
    return await this.getText(this.getMas)

  }


}
