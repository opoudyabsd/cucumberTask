class SortingComponent {
  get listActions() {
    return $('[title="List actions"]');
  }
  get byButton() {
    return $('//span[text()="Sort by…"]');
  }
  get listTitle() {
    return $('[title="Sort list"]');
  }
  get byCardNameButton() {
    return $(".js-sort-by-card-name");
  }
  get cardNameElements() {
    return $$('[data-testid="card-name"]');
  }
  async getDisplayedCardNames() {
    const cardNames = [];
    const cards = await $$('[data-testid="card-name"]');

    for (const card of cards) {
      const name = await card.getText();
      cardNames.push(name);
    }
    cardNames.sort();
    console.log(`${cardNames} DEBIIIIIIIIIIIIIIIIIIIIIIIIIL`);
    await browser.pause(1000);
    return cardNames;
  }
}
export default SortingComponent;
