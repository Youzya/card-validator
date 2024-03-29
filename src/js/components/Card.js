export default class Card {
  constructor(cardName, cardClass) {
    this.cardName = cardName;
    this.cardClass = cardClass;
    this.cardElement = null;
    this.startWithNums = null;
    this.numLength = null;

    this.validLength = false;
    this.validStartNums = false;

    this.identifyCardParam();
    this.renderCard();
  }

  identifyCardParam() {
    if (this.cardName === 'Visa') {
      this.startWithNums = ['4'];
      this.numLength = ['13', '16', '19'];
    } else if (this.cardName === 'MasterCard') {
      this.startWithNums = ['51', '52', '53', '54', '55', '222100', '272099'];
      this.numLength = ['16'];
    } else if (this.cardName === 'American Express') {
      this.startWithNums = ['34', '37'];
      this.numLength = ['15'];
    } else if (this.cardName === 'MIR') {
      this.startWithNums = ['2'];
      this.numLength = ['16'];
    }
  }

  renderCard() {
    const cards = document.querySelector('.cards');
    const li = document.createElement('li');
    const card = document.createElement('span');

    card.classList.add('card', this.cardClass);
    card.title = this.cardName;

    li.appendChild(card);
    cards.appendChild(li);

    this.cardElement = card;
  }
}
