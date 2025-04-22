import SignInComponent from "../component/signIn/signIn.component";
class SignInPage {
  constructor() {
    this.signIn = new SignInComponent();
  }
  get homeContainer() {
    return $(".home-sticky-container");
  }
  signInUrl(value) {
    return `https://id.atlassian.com/${value}?application=trello&continue=https%3A%2F%2Ftrello.com%2Fauth%2Fatlassian%2Fcallback%3Fdisplay%3DeyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%253D%253D%26createMember%3Dtrue&display=eyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%3D%3D`;
  }
}

export default SignInPage;
