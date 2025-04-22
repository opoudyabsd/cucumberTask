import EditProfileComponent from "../component/editProfile/editProfile.component";
class EditProfilePage {
  constructor() {
    this.editProfile = new EditProfileComponent();
  }
  get avatarMenuButton() {
    return $('[data-testid="header-member-menu-avatar"]');
  }
  get avatarMenu() {
    return $('[data-testid="header-member-menu-popover"]');
  }
  get profileButton() {
    return $('//span[text()="Profile and visibility"]');
  }
  get savedMessage() {
    return $(".a4ZvSL0pjeULBU");
  }
  get h1Header() {
    return $("h1.mkAua9Q8fCTcEM");
  }
}

export default EditProfilePage;
