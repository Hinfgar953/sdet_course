import {test, expect} from "@playwright/test";
import {ProductsPage} from "../../pages/productspage";
import { CheckoutPage } from "../../pages/checkoutpage";

test("Add all the shirts on inventory to the cart and complete checkout",async ({page}) => {

    const constructorProducts=new ProductsPage(page)    
    const constructorCHeckout=new CheckoutPage(page)
    await page.goto("/")
    await constructorProducts.login(process.env.USER,process.env.PASSWORD)

    //1.Call the buy shirts method where detects all the products tha are shirts and ad those to the cart
    await constructorProducts.buyshirts()

    //2.Go to the cart and verify the items are there
    await constructorProducts.gotocart();
    await constructorProducts.verifyAllItemsAreShirts()

    //3.Go to the checkout information page and complete with data
    await constructorCHeckout.completeCheckoutInformation("humberto","infante","59516");
   
   

    //4.Verify the checkout overview and complete order
    await expect(page).toHaveURL("/checkout-step-two.html")
    await constructorProducts.verifyAllItemsAreShirts()
    await constructorCHeckout.verifyTotal()
    await constructorCHeckout.completeOrder()

    //5.Verify order was completed
    await expect(page).toHaveURL("/checkout-complete.html")
   

   

})