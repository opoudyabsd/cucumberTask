console.log("--- Loading step definitions from signUp_In.js ---");
import SignUpPage from "../pom/page/signUpPage";
import SignInPage from "../pom/page/signInPage";
import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect, $, browser } from "@wdio/globals";
const signUpPage = new SignUpPage();
const signInPage = new SignInPage();
Given("User is on the {string} page", async (url) => {
  await browser.url(signUpPage.signUpUrl(url));
});
When("User enters valid email address", async () => {
  await signUpPage.signUp.enterEmail();
});

When('User clicks on the "Sign Up" button', async () => {
  await signUpPage.signUp.submitButton.click();
  await signUpPage.signUp.handleCaptcha();
});

Then("User should be redirected to the {string} page", async (title) => {
  await browser.waitUntil(async () => {
    return (await browser.getTitle()) === title;
  });
  await expect(browser).toHaveTitle(title);
});

Then("The page should display a {string} message", async (text) => {
  await expect(signUpPage.workSpaceHeader).toHaveText(text);
});

////// Sign IN
Given("User opens the {string} page", async (url) => {
  await browser.reloadSession();
  await browser.url(signInPage.signInUrl(url));
});

When("User enters a valid registered {string}", async (email) => {
  console.log("EMAIL:", email);
  await signInPage.signIn.setEmail(email);
});

When(
  'User clicks on the "Log in" button for openning password field',
  async () => {
    await signInPage.signIn.loginSumbitButton.click();
  }
);

When("User enters a valid {string}", async (password) => {
  console.log("PASSWORD:", password);
  await signInPage.signIn.password.waitForDisplayed({ timeout: 30000 });
  await signInPage.signIn.setPassword(password);
});

When('User clicks on the "Log in" button', async () => {
  await signInPage.signIn.loginSumbitButton.click();
  await signInPage.signIn.checkForCodeVerification();
});

Then("Page should have {string} title", async (title) => {
  await signInPage.homeContainer.waitForDisplayed();
  await expect(browser).toHaveTitle(title);
});
