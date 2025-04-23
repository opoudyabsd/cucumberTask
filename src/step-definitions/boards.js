import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect, $, browser } from "@wdio/globals";
import { loginToTrello } from "../utils/authHelper";
import BoardsPage from "../pom/page/boardsPage";
const boardsPage = new BoardsPage();
Given("User is logged in", async () => {
  await browser.reloadSession();
  await loginToTrello();
});
Given("User in the {string} page", async (title) => {
  await browser.url(boardsPage.pageUrl);
  await expect(browser).toHaveTitle(title);
});
When('User clicks on the "Create new board" button', async () => {
  await boardsPage.boardMenuButton.click();
});
Then('Pop-up "Create board" menu should be displayed', async () => {
  await expect(boardsPage.createBoard.menu).toBeDisplayed();
});

When(
  'User enters a board {string} into "Board title" form',
  async (titleBoard) => {
    await boardsPage.createBoard.newBoard(titleBoard);
  }
);
When('User clicks on the "Create" button', async () => {
  await boardsPage.createBoard.createButton.click();
});
Then(
  'User should be redirected to the "{string} | Trello" page',
  async (titleBoard) => {
    await expect(browser).toHaveTitle(`${titleBoard} | Trello`);
  }
);
Then(
  "New board with specified {string} should be created",
  async (titleBoard) => {
    await expect(boardsPage.boardNameDisplay).toHaveText(titleBoard);
  }
);
////// List
Given("User is on the existing board page", async () => {
  await browser.url(boardsPage.existingBoardUrl);
});
When('User clicks on the "Add a list" button', async () => {
  await boardsPage.addListButton.click();
});
Then('"Enter a list name" form should be displayed', async () => {
  await expect(boardsPage.createList.addListForm).toBeDisplayed();
});

When("User enters a valid list {string}", async (name) => {
  await boardsPage.createList.setListName(name);
});
When('User clicks on the "Add list" button', async () => {
  await boardsPage.createList.createListButton.click();
});
Then(
  "New list with specified list {string} should be created",
  async (name) => {
    await expect(boardsPage.createList.checkListName(name)).toBeDisplayed();
  }
);
Then(
  "Corresponding list with specified list {string} should be displayed on the board window",
  async (name) => {
    await expect(boardsPage.createList.checkListName(name)).toHaveText(name);
  }
);

/// Card

When("User on the existing board page", async () => {
  await browser.url(boardsPage.existingBoardUrl);
});
Then("The empty list is created", async () => {
  await expect(boardsPage.card).toBeDisplayed();
});

When('User clicks on the "Add a card" button under existing list', async () => {
  await boardsPage.addCardButton.click();
});
Then(
  '"Enter a title or paste a link" form inside the list should be visible',
  async () => {
    await expect(boardsPage.createCard.addCardForm).toBeDisplayed();
  }
);

When("User enter a valid {string} in form", async (name) => {
  await boardsPage.createCard.newCard(name);
});
When('User clicks on the "Add card" button', async () => {
  await boardsPage.createCard.createCardButton.click();
});
Then(
  "New card with specified list {string} should be created and displayed",
  async (name) => {
    await expect(boardsPage.cardName).toHaveText(name);
    await expect(boardsPage.newCard).toBeDisplayed();
  }
);
// Sortring

When("User is on the existing board", async () => {
  await browser.url(boardsPage.pageWithCards);
});
Then("The list with few card is created", async () => {
  await expect(boardsPage.list).toBeDisplayed();
  await expect(boardsPage.cardsList.$$("li")).toBeElementsArrayOfSize(7);
});

When('User clicks on the "List actions" button in list window', async () => {
  await boardsPage.listEditMenuButton.click();
});
Then('The "List actions" menu should be displayed', async () => {
  await expect(boardsPage.sortingCard.listActions).toBeDisplayed();
});

When('User clicks on the "Sort by" button', async () => {
  await boardsPage.sortingCard.byButton.click();
});
Then('"Sort list" menu should be displayed', async () => {
  await expect(boardsPage.sortingCard.listTitle).toBeDisplayed();
});

When('User clicks on the "Card name alphabetically" button', async () => {
  await boardsPage.sortingCard.byCardNameButton.click();
});
Then("Cards in list should be sorted", async () => {
  const cardName = await boardsPage.sortingCard.getDisplayedCardNames();
  await expect(cardName[0]).toEqual("A");
});
