import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/loginpage";

test("Test the login with invalid data",async ({page}) => {
 const loginConstructor=new LoginPage(page)

 //1.Go to the login main page
 await loginConstructor.gotomainpage()

 //2.Enter invalid data on the username and validate the error
 await loginConstructor.login("userinfante","secret_sauce")
 await expect(loginConstructor.getErrorMessage()).toBeVisible()

 //3.Enter invalid password
 await loginConstructor.login("standard_user","password")
 await expect(loginConstructor.getErrorMessage()).toBeVisible()

}) 