import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/loginpage";

test("login with empty email", async ({ page }) => {
 const loginConst=new LoginPage(page)

  //1.Go to login page
  await page.goto("/")

  //2.Try to submit login with empty username field
  await loginConst.login("","anypassword")

  //3.Validate the error displayed
  await expect (loginConst.getEmptyUserError()).toBeVisible()
  });

test("login with empty password",async ({page}) => {
  const loginConst=new LoginPage(page)

  //1.Go to login page
  await page.goto("/")

  //2.Try to submit login with an empty password
  await loginConst.login("anyuser","")

  //3 verify the error displayed
  await expect (loginConst.getEmptyPasswordError()).toBeVisible()
   
})
  
  


