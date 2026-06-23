import { test, expect } from "@playwright/test";
import {LoginPage} from '../../pages/loginpage.js'

test("Test to login successfully", async ({ page }) => {
  const Login = new LoginPage(page);

  //1. Go to home page and verify we are on it, i used the button and header to verify loaded
  Login.gotomainpage()
  await expect (Login.login_button).toBeVisible()
  Login.login("standard_user", "secret_sauce");
  await expect(page.getByText("Products")).toBeVisible();
});