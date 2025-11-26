export class BasePage {
  constructor(page) {
    this.page = page;

   
    this.page.setDefaultTimeout(50000);            
    this.page.setDefaultNavigationTimeout(50000);   
  }

  async click(xpath) {
    const element = this.page.locator(`xpath=${xpath}`);
    await element.waitFor({ state: "visible" });
    await element.click();
  }

  async type(xpath, text) {
    const element = this.page.locator(`xpath=${xpath}`);
    await element.waitFor({ state: "visible" });
    await element.fill("");     // limpiar primero
    await element.fill(text);   // escribir
  }

  async getText(xpath) {
    const element = this.page.locator(`xpath=${xpath}`);
    await element.waitFor({ state: "visible" });
    return (await element.textContent()).trim();
  }

  async navigate(url = "/") {
    await this.page.goto(url);
  }
}
