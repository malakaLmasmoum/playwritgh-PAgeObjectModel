 exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameField = page.getByRole("textbox", { name: "Username" });
        this.passwordField = page.getByRole("textbox", { name: "Password" });
        this.loginButton = page.getByRole("button", { name: " Login" });
     }
     async gotoLoginPage() {
        await this.page.goto("https://the-internet.herokuapp.com/login");
    }
    async login(username, password) {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }
}