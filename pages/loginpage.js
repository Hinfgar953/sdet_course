exports.LoginPage = class LoginPage {
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
  async gotomainpage() {
    await this.page.goto("https://www.saucedemo.com/");
  }

  getErrorMessage() {
  return this.page.getByText("Epic sadface: Username and password do not match any user in this service")
  }

  getLockedMessage(){
  return this.page.getByText("Epic sadface: Sorry, this user has been locked out.")
  }

  getEmptyUserError(){
  return this.page.getByText("Epic sadface: Username is required")
  }

  getEmptyPasswordError(){
  return this.page.getByText("Epic sadface: Password is required")
  }



};
