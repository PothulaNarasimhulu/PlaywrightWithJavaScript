class LoginPage {

  constructor(page) {
    this.page = page;
    this.username = '//input[@name="email"]';
    this.password = '//input[@type="password"]';
    this.loginBtn = '//span[text()="Log in"]';
    this.loginerror ="//span[text()='The password you\\'ve entered is incorrect.']"
  }

  async login(user, pass) {
    await this.page.fill(this.username, user);
    await this.page.fill(this.password, pass);
    await this.page.click(this.loginBtn);
  }

async loginError(){
  let error=await this.page.textContent();
  console.log("Error is -- "+error);
}

}

module.exports = LoginPage;