import {test, expect} from "@playwright/test";
import { ProductsPage } from "../../pages/productspage";
import { CheckoutPage } from "../../pages/checkoutpage";


test("Buy a product via details", async ({page}) => {

//1.Go to the main page and login    
const constructorProducts=new ProductsPage(page)
const constructorCHeckout=new CheckoutPage(page)
await page.goto("/")
await constructorProducts.login(process.env.USER,process.env.PASSWORD)

//2.Select a product on the products page and check if we are redirected to the item details ur
await constructorProducts.verifyInventoryURL()
await constructorProducts.selectproduct()
await expect(page).toHaveURL(/inventory-item\.html/);
//3.Add product to the cart and verify is displayed there
 await constructorProducts.addtocart()
 await constructorProducts.gotocart()
 await expect (constructorProducts.getCartItemName()).toBeVisible()

 //4.Complete the information and checkout
 await constructorCHeckout.completeCheckoutInformation("humberto","qa","95811")
 await constructorCHeckout.verifyTotal()
 await constructorCHeckout.completeOrder()
 await expect(page).toHaveURL("/checkout-complete.html")
 

 

})
