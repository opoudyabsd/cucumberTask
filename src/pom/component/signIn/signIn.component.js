// import { getVerificationCode } from "../../../utils/emailUtils";
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
    await this.userName.waitForDisplayed();
    await this.userName.setValue(value);
  }
  async setPassword(value) {
    await this.password.waitForDisplayed();
    await this.password.setValue(value);
  }
  async checkForCodeVerification() {
    await browser.pause(2000);
    const isVerificationRequired =
      await this.verificationCodeExist.isExisting();
    console.log(isVerificationRequired);
    console.log("bibij123");
    if (isVerificationRequired) {
      console.log("kukaracha");
      await browser.pause(2000);
      const verificationCode = await getVerificationCode();
      console.log(verificationCode);
      await this.verificationCodeForm.setValue(verificationCode);
    }
  }
}

export default SignInComponent;
