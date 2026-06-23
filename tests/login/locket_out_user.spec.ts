import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/loginpage"
test("Testing the login with a locket out user",async ({page}) => {
const loginconst=new LoginPage(page)

//1.Go to the main page
await loginconst.gotomainpage()

//2.Login with a locked user
await loginconst.login("locked_out_user","secret_sauce")

//Validate the error displayed
await expect(page.getByText("Epic sadface: Sorry, this user has been locked out.")).toBeVisible()
})