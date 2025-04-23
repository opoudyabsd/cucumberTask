class WorkspaceEditComponent {
  get editForm() {
    return $('[aria-label="OrganizationDetailForm"]');
  }
  get displayName() {
    return $("#displayName");
  }
  get saveButton() {
    return $('[type="submit"]');
  }
  async editUsername(newName) {
    await this.displayName.setValue(newName);
    await this.saveButton.click();
  }
}
export default WorkspaceEditComponent;
