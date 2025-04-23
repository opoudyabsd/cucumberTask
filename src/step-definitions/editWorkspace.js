import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect, $, browser } from "@wdio/globals";
import { loginToTrello } from "../utils/authHelper";
import WorkspacePage from "../pom/page/workspacePage";
import { Before } from "@wdio/cucumber-framework";
Before(async () => {
  await browser.reloadSession(); // Clean session before every scenario
});
const workspacePage = new WorkspacePage();

Given("User is logged in", async () => {
  await loginToTrello();
});
Given("User is on the boards section", async () => {
  await workspacePage.openHomePage();
});

When('User clicks on the "Editing" button next to workspace name', async () => {
  await workspacePage.editButton.click();
});
Then("The workspace editing form should be displayed", async () => {
  await expect(workspacePage.workspaceEdit.editForm).toBeDisplayed();
});

When('User clicks on the "Name" form', async () => {
  await workspacePage.workspaceEdit.displayName.click();
});

When('User enters a new {string} in the "Name" form', async (name) => {
  await workspacePage.workspaceEdit.editUsername(name);
});
When('User clicks on the "Save" button', async () => {
  await workspacePage.workspaceEdit.saveButton.click();
});
Then("Forms shoudn't be visible", async () => {
  await expect(workspacePage.workspaceEdit.editForm).not.toBeDisplayed();
});
Then("Workspace name should be visible", async () => {
  await expect(workspacePage.usernameHeader).toBeDisplayed();
});
Then("Name of workspace changed to the new {string}", async (name) => {
  await expect(workspacePage.usernameHeader).toHaveText(name);
});
