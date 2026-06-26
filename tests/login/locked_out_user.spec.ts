import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/loginpage"
test("Testing the login with a locked out user",async ({page}) => {
const loginconst=new LoginPage(page)

//1.Go to the main page
await page.goto("/")

//2.Login with a locked user
await loginconst.login(process.env.SAUCE_LOCKED_USER?? "locked_out_user",process.env.SAUCE_PASSWORD ?? "secret_sauce")


//Validate the error displayed
await expect(loginconst.getLockedMessage()).toBeVisible()
})