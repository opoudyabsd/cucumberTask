import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect, browser } from "@wdio/globals";
import { loginToTrello } from "../utils/authHelper";
import SearchPage from "../pom/page/searchingPage";
const searchPage = new SearchPage();

Given(/^User should be logged in$/, async () => {
  await browser.reloadSession();
  await loginToTrello();
});
Given(/^User should have the "([^"]*)" title on the page$/, async (title) => {
  await expect(browser).toHaveTitle(title);
});

When(/^User clicks on the search form at the navigation section$/, async () => {
  await searchPage.searchForm.click();
});
When(/^Users click on "Advance search" button$/, async () => {
  await searchPage.advanceSeachButton.click();
});
Then(/^User should be on the "([^"]*)" page$/, async (title) => {
  await expect(browser).toHaveTitle(title);
});

When(
  /^User enters existing board "([^"]*)" in seach form$/,
  async (boardName) => {
    await searchPage.search.setValueSearchBoard(boardName);
  }
);
Then(
  /^Corresponding board with "([^"]*)" should be displayed$/,
  async (boardName) => {
    await expect(searchPage.titleBoardSelector(boardName)).toBeDisplayed();
  }
);
Then(
  /^Corresponding board with "([^"]*)" should be accessible$/,
  async (boardName) => {
    await expect(searchPage.titleBoardSelector(boardName)).toBeClickable();
  }
);
