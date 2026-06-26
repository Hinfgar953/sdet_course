import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/loginpage";

test("Test the login with invalid data",async ({page}) => {
 const loginConstructor=new LoginPage(page)

 //1.Go to the login main page
 await page.goto("/")

 //2.Enter invalid data on the username and validate the error
 await loginConstructor.login("anyuser",process.env.SAUCE_PASSWORD ?? "secret_sauce")

 await expect(loginConstructor.getErrorMessage()).toBeVisible()

 //3.Enter invalid password
 await loginConstructor.login(process.env.SAUCE_USER?? "locked_out_user","secrGRERTHet_sauce")
 await expect(loginConstructor.getErrorMessage()).toBeVisible()

}) 