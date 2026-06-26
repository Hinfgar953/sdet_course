const { expect } = require("@playwright/test");
const { LoginPage } = require("./loginpage.js");
exports.ProductsPage = class ProductsPage extends LoginPage {
  constructor(page) {
    super(page);
    this.page = page;
    this.lowest_button = page.locator(".btn.btn_primary.btn_small.btn_inventory").first();
    this.lowest_item = page.locator("[data-test='inventory-item-name']").first();
    this.activefilter = page.getByRole("combobox");
    this.carticon = page.locator("span.shopping_cart_badge");
    this.shirtsbutton = page.locator('[id*="t-shirt"]');

    
  }

  async addlowestprice() {
    await this.activefilter.click();
    await this.activefilter.selectOption({ value: "lohi" });
    await this.lowest_button.click();
  }

  async gotocart() {
    await this.carticon.click();
  }

   getLowestItemName() {
    return this.lowest_item;
  }

   getCartItemName() {
    return this.page.locator("[data-test='inventory-item-name']");
  }

  async buyshirts() {
    const allTshirts = await this.shirtsbutton.all();
    for (const shirt of allTshirts) {
      const idShirt = await shirt.getAttribute("id");
       await shirt.click();
      
    }
  
   
     
  }
  



};
