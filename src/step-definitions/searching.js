import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect, $, browser } from "@wdio/globals";
import { loginToTrello } from "../utils/authHelper";
import SearchPage from "../pom/page/searchingPage";
import { Before } from "@wdio/cucumber-framework";
Before(async () => {
  await browser.reloadSession(); // Clean session before every scenario
});
const searchPage = new SearchPage();

Given("User should be logged in", async () => {
  await loginToTrello();
});
Given("User is on the {string} page", async (title) => {
  await expect(browser).toHaveTitle(title);
});

When("User clicks on the search form at the navigation section", async () => {
  await searchPage.searchForm.click();
});
When('Users click on "Advance search" button', async () => {
  await searchPage.advanceSeachButton.click();
});
Then("User should be on the {string} page", async (title) => {
  await expect(browser).toHaveTitle(title);
});

When("User enters existing board {string} in seach form", async (boardName) => {
  await searchPage.search.setValueSearchBoard(boardName);
});
Then(
  "Corresponding board with {string} should be displayed",
  async (boardName) => {
    await expect(searchPage.titleBoardSelector(boardName)).toBeDisplayed();
  }
);
Then(
  "Corresponding board with {string} should be accessible",
  async (boardName) => {
    await expect(searchPage.titleBoardSelector(boardName)).toBeClickable();
  }
);
