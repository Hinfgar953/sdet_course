import { expect } from "@playwright/test";
const ERRORS = {
  invalidCredentials: "Epic sadface: Username and password do not match any user in this service",
  lockedUser: "Epic sadface: Sorry, this user has been locked out.",
  emptyUser: "Epic sadface: Username is required",
  emptyPassword: "Epic sadface: Password is required"
}
export class LoginPage {
  constructor(page) {
    this.page = page;
    this.email_textbox = page.getByPlaceholder("Username");
    this.password_textbox = page.getByPlaceholder("Password");
    this.login_button = page.getByRole("button").getByText("Login");
  }

  async login(username, password) {
    await this.email_textbox.fill(username);
    await this.password_textbox.fill(password);
    await this.login_button.click();
  }
  
  async verifyLoginSuccess(){
    await expect(this.page.getByText("Products")).toBeVisible();
  }
 

  getErrorMessage() {
  return this.page.getByText(ERRORS.invalidCredentials)
  }

  getLockedMessage(){
  return this.page.getByText(ERRORS.lockedUser)
  }

  getEmptyUserError(){
  return this.page.getByText(ERRORS.emptyUser)
  }

  getEmptyPasswordError(){
  return this.page.getByText(ERRORS.emptyPassword)
  }



};
