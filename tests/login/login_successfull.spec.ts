import { test, expect } from "@playwright/test";
import {LoginPage} from '../../pages/loginpage.js'

test("Test to login successfully", async ({ page }) => {
  const constructorLogin = new LoginPage(page);

  //1. Go to home page and verify we are on it, i used the button and header to verify loaded
  await page.goto("/")
  await constructorLogin.login(process.env.USER, process.env.PASSWORD);
  await constructorLogin.verifyLoginSuccess()
});