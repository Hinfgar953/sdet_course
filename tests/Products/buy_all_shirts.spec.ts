import {test, expect} from "@playwright/test";
import {ProductsPage} from "../../pages/productspage";
import { CheckoutPage } from "../../pages/checkoutpage";

test("Add all the shirts on inventory to the cart and complete checkout",async ({page}) => {

    const constructorProducts=new ProductsPage(page)    
    const constructorCHeckout=new CheckoutPage(page)
    await constructorProducts.gotomainpage()
    await constructorProducts.login("standard_user","secret_sauce")

    //1.Call the buy shirts method where detects all the products tha are shirts and ad those to the cart
    await constructorProducts.buyshirts()

    //2.Go to the cart and verify the items are there
    await constructorProducts.gotocart();
    await expect(constructorProducts.getCartItemName().first()).toContainText("T-Shirt")
    await expect(constructorProducts.getCartItemName().last()).toContainText("T-Shirt")

    //3.Go to the checkout information page and complete with data
    await constructorCHeckout.completeCheckoutInformation("humberto","infante","59516");
   
   

    //4.Verify the checkout overview and complete order
    await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-two.html")
    await expect(constructorProducts.getCartItemName().first()).toContainText("T-Shirt")
    await expect(constructorProducts.getCartItemName().last()).toContainText("T-Shirt")
    await expect(constructorCHeckout.totallabel).toBeVisible()
    await constructorCHeckout.completeOrder()

    //5.Verify order was completed
    await expect(page).toHaveURL("https://www.saucedemo.com/checkout-complete.html")

   

})