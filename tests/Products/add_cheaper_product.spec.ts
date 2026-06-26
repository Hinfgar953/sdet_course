import {test, expect} from "@playwright/test";
import {ProductsPage} from "../../pages/productspage";

test("Add the cheaper product to the cart",async ({page}) => {
    const constructorProd=new ProductsPage(page)



//1.Login and add the lowest price product to cart
    await constructorProd.gotomainpage()
    await constructorProd.login("standard_user","secret_sauce")
    await page.waitForURL("https://www.saucedemo.com/inventory.html")
    await constructorProd.addlowestprice()
//1.1 saved the product name on a variable to compare after on the cart
    const itemName = await constructorProd.getLowestItemName().textContent()
    await expect(page.getByRole("button").getByText("Remove")).toBeVisible()

//2. Go to the user's cart
    await constructorProd.gotocart()

//4. validate the item added is on the cart
    await expect(constructorProd.getCartItemName()).toHaveText(itemName)

   
})