import { expect } from "@playwright/test";
export class CheckoutPage{
  constructor(page) {
    this.firstnameinput = page.locator('[data-test="firstName"]');
    this.lastnameinput = page.locator('[data-test="lastName"]');
    this.zipcodeinput = page.locator('[data-test="postalCode"]');
    this.finishbutton = page.locator("#finish");
    this.totallabel = page.locator('[data-test="total-label"]');
    this.checkoutbutton = page.locator("#checkout");
    this.continuebutton=page.locator('[data-test="continue"]')
  }

  async completeCheckoutInformation(firstname,lastname,zipcode){
    await this.checkoutbutton.click()
    await this.firstnameinput.fill(firstname);
    await this.lastnameinput.fill(lastname);
    await this.zipcodeinput.fill(zipcode);
    await this.continuebutton.click();
   
  }

async completeOrder(){
    await this.finishbutton.click()  
}

async verifyTotal(){
    await expect(this.totallabel).toBeVisible();

}
}
