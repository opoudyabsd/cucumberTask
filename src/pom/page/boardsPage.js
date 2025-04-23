import CreateBoardComponent from "../component/boards/createBoard.component";
import CreateListComponent from "../component/boards/createList.component";
import CreateCardComponent from "../component/boards/createCard.component";
import SortingComponent from "../component/boards/sorting.component";
class BoardsPage {
  constructor() {
    this.createBoard = new CreateBoardComponent();
    this.createList = new CreateListComponent();
    this.createCard = new CreateCardComponent();
    this.sortingCard = new SortingComponent();
  }
  // Url
  get pageUrl() {
    return `/w/userworkspace49374411/home`;
  }
  get existingBoardUrl() {
    return "/b/gmbgXtLk/newtitlename";
  }
  // Create a Board
  get boardMenuButton() {
    return $(".board-tile.mod-add");
  }
  get boardNameDisplay() {
    return $(".HKTtBLwDyErB_o");
  }

  // Create a list

  get addListButton() {
    return $('[data-testid="list-composer-button"]');
  }
  get list() {
    return $('[data-testid="list"]');
  }

  // Create a card
  get card() {
    return $('[data-testid="list-wrapper"]');
  }
  get addCardButton() {
    return $('[data-testid="list-add-card-button"]');
  }

  get cardName() {
    return $('[data-testid="card-name"]');
  }
  get newCard() {
    return $(".amUfYqLTZOvGsn");
  }

  // Sorting cards
  get pageWithCards(){
    return "/b/ttFih5hH/my-trello-board"
  }
  get cardsList() {
    return $('[data-testid="list-cards"]');
  }
  get listName() {
    return $('[data-testid="list-name"]');
  }
  get listEditMenuButton() {
    return $('[data-testid="list-edit-menu-button"]');
  }
  get sortedMessage() {
    return $(".QMKgZFIlTLiEJN");
  }
}

export default BoardsPage;
