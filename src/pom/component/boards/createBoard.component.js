class CreateBoardComponent {
  get menu() {
    return $(".q2PzD_Dkq1FVX3.pt-0");
  }
  get titleForm() {
    return $('[data-testid="create-board-title-input"]');
  }
  get createButton() {
    return $('[data-testid="create-board-submit-button"]');
  }
  async newBoard(title) {
    await this.titleForm.waitForDisplayed({ timeout: 30000 });
    await this.titleForm.setValue(title);
  }
}

export default CreateBoardComponent;
