import { getVerificationCode } from "../../../utils/emailUtils";
class SignInComponent {
  get userName() {
    return $("#username");
  }
  get password() {
    return $("#password");
  }
  get loginSumbitButton() {
    return $("#login-submit");
  }
  get verificationCodeExist() {
    return $(".css-1pgxbvo");
  }
  get verificationCodeForm() {
    return $('[data-testid="otp-input-index-0"]');
  }
  async setEmail(value) {
    await this.userName.waitForDisplayed({ timeout: 30000 });
    await this.userName.setValue(value);
  }
  async setPassword(value) {
    await this.password.waitForDisplayed();
    await this.password.setValue(value);
  }
  async checkForCodeVerification() {
    // eslint-disable-next-line wdio/no-pause
    await browser.pause(2000);
    const isVerificationRequired =
      await this.verificationCodeExist.isExisting();
    if (isVerificationRequired) {
      // eslint-disable-next-line wdio/no-pause
      await browser.pause(2000);
      const verificationCode = await getVerificationCode();
      await this.verificationCodeForm.setValue(verificationCode);
    }
  }
}

export default SignInComponent;
