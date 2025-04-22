import SignInPage from "../pom/page/signInPage.js";
const signInPage = new SignInPage();
export async function loginToTrello() {
  await browser.url(signInPage.signInUrl("login"));
  await signInPage.signIn.setEmail("born-swim@aprtds8r.mailosaur.net");
  await signInPage.signIn.loginSumbitButton.click();
  await signInPage.signIn.password.waitForDisplayed({ timeout: 40000 }); // Sometimes I have a big timer when password is displayed
  await signInPage.signIn.setPassword("newPassword_123");
  await signInPage.signIn.loginSumbitButton.click();
  await signInPage.signIn.checkForCodeVerification();
  await browser.waitUntil(
    async () => {
      return (await browser.getTitle()) === "Boards | Trello";
    },
    { timeout: 30000 }
  );
  await expect(signInPage.homeContainer).toBeDisplayed();
}
