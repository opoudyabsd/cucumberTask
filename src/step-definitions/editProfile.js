import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect, browser } from "@wdio/globals";
import { loginToTrello } from "../utils/authHelper";
import EditProfilePage from "../pom/page/editProfilePage";

const editProfilePage = new EditProfilePage();
Given(/^User is already logged in$/, async () => {
  await browser.reloadSession(); // Clean session before every scenario
  await loginToTrello();
});
Then(/^User already on the "(.*)" page$/, async (title) => {
  await expect(browser).toHaveTitle(title);
});

When(/^User clicks on the avatar button$/, async () => {
  await editProfilePage.avatarMenuButton.click();
});
Then(/^A pop-up menu should be displayed$/, async () => {
  await editProfilePage.avatarMenu.waitForDisplayed();
  await expect(editProfilePage.avatarMenu).toBeDisplayed();
});

When(/^User clicks on "Profile and visibility" button$/, async () => {
  await editProfilePage.profileButton.click();
});
Then(/^User redirected to the "(.*)" page$/, async (title) => {
  await expect(browser).toHaveTitle(title);
});
Then(/^"(.*)" header is displayed$/, async (header) => {
  await expect(editProfilePage.h1Header).toHaveText(header);
});

When(
  /^User changes the existing username to a new free username$/,
  async () => {
    await editProfilePage.editProfile.changeUsername();
  }
);
When(/^User clicks on the save button$/, async () => {
  await editProfilePage.editProfile.profileSaveButton.click();
});
Then(/^"(.*)" message should be displayed$/, async (text) => {
  await expect(editProfilePage.savedMessage).toBeDisplayed();
  await expect(editProfilePage.savedMessage).toHaveText(text);
});
