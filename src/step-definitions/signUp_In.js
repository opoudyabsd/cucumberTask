import SignUpPage from "../pom/page/signUpPage";
import SignInPage from "../pom/page/signInPage";
import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect, $, browser } from "@wdio/globals";

const signUpPage = new SignUpPage();
const signInPage = new SignInPage();

// Sign Up
Given(/^User is on the "(.*)" page$/, async (url) => {
  await browser.url(signUpPage.signUpUrl(url));
});

When(/^User enters valid email address$/, async () => {
  await signUpPage.signUp.enterEmail();
});

When(/^User clicks on the "Sign Up" button$/, async () => {
  await signUpPage.signUp.submitButton.click();
  await signUpPage.signUp.handleCaptcha();
});

Then(/^User should be redirected to the "(.*)" page$/, async (title) => {
  await browser.waitUntil(
    async () => {
      return (await browser.getTitle()) === title;
    },
    { timeout: 30000 }
  );
  await expect(browser).toHaveTitle(title);
});

Then(/^The page should display a "(.*)" message$/, async (text) => {
  await expect(signUpPage.workSpaceHeader).toHaveText(text);
});

// Sign In
Given(/^User opens the "(.*)" page$/, async (url) => {
  await browser.url(signInPage.signInUrl(url));
});

When(/^User enters a valid registered "(.*)"$/, async (email) => {
  console.log("EMAIL:", email);
  await signInPage.signIn.setEmail(email);
});

When(
  /^User clicks on the "Log in" button for openning password field$/,
  async () => {
    await signInPage.signIn.loginSumbitButton.click();
  }
);

When(/^User enters a valid "(.*)"$/, async (password) => {
  console.log("PASSWORD:", password);
  await signInPage.signIn.password.waitForDisplayed({ timeout: 30000 });
  await signInPage.signIn.setPassword(password);
});

When(/^User clicks on the "Log in" button$/, async () => {
  await signInPage.signIn.loginSumbitButton.click();
  await signInPage.signIn.checkForCodeVerification();
});

Then(/^Page should have "(.*)" title$/, async (title) => {
  await signInPage.homeContainer.waitForDisplayed({ timeout: 30000 });
  await expect(browser).toHaveTitle(title);
});
