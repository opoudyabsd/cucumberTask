class CreateListComponent {
  get addListForm() {
    return $(".oe8RymzptORQ7h");
  }
  get listNameForm() {
    return $(".oe8RymzptORQ7h");
  }
  // get createdList() {
  //   return $('[data-testid="list-wrapper"]');
  // }
  get createListButton() {
    return $('[data-testid="list-composer-add-list-button"]');
  }
  async setListName(value) {
    await this.listNameForm.setValue(value);
  }

  checkListName(value) {
    return $(`//h2[@data-testid="list-name" and contains(text(), '${value}')]`);
  }
}
export default CreateListComponent;
