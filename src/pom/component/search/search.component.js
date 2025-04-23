class SearchComponent {
  get advanceSeachField() {
    return $('[data-testid="advanced-search-input"]');
  }
  async setValueSearchBoard(value) {
    await this.advanceSeachField.setValue(value);
  }
}
export default SearchComponent;
