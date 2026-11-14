import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login";

test("test", async ({ page }) => {
  const login = new LoginPage(page)
   await login.gotoLoginPage()
 await login.login("malak", "malak1234")
  // page.goto("https://the-internet.herokuapp.com/login");
  //await page.getByRole("textbox", { name: "Username" }).click();
  //await page.getByRole("textbox", { name: "Username" }).fill("malak");
  //await page.getByRole("textbox", { name: "Password" }).click();
  //await page.getByRole("textbox", { name: "Password" }).fill("malak1234");
  //await page.getByRole("button", { name: " Login" }).click();
});