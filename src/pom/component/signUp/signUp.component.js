import { faker } from "@faker-js/faker";

class SignUpComponent {
  get email() {
    return $("#email");
  }
  get submitButton() {
    return $("#signup-submit");
  }
  get captchaElement() {
    return $(".css-165xmen");
  }

  async handleCaptcha() {
    // eslint-disable-next-line wdio/no-pause
    await browser.pause(5000);
    if (await this.captchaElement.isExisting()) {
      // eslint-disable-next-line wdio/no-pause
      await browser.pause(40000);
      await this.submitButton.click();
    }
  }
  async enterEmail() {
    const newEmail = faker.internet.email();
    await this.email.setValue(newEmail);
    await expect(this.email).toHaveValue(newEmail);
  }
}

export default SignUpComponent;
