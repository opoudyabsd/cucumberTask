import SearchComponent from "../component/search/search.component";
class SearchPage {
  constructor() {
    this.search = new SearchComponent();
  }

  get searchForm() {
    return $('[placeholder="Search"]');
  }
  get advanceSeachButton() {
    return $("[data-test-id='search-dialog-advanced-search-link']");
  }
  titleBoardSelector(value) {
    return $(`//div[@role="presentation"]//*[text()="${value}"]`);
  }
}

export default SearchPage;
