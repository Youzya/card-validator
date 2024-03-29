import Card from './Card';

export default class Validator {
  constructor() {
    this.cards = [];
  }

  addCard(cardName, cardClass) {
    this.cards.push(new Card(cardName, cardClass));
  }

  checkStartWithNum(value) {
    this.cards.forEach((card) => {
      const { startWithNums } = card;
      card.validStartNums = startWithNums.some((num) => value.startsWith(num));
    });
  }

  checkNumLength(value) {
    this.cards.forEach((card) => {
      const { numLength } = card;
      card.validLength = numLength.some((num) => +num === value.length);
    });
  }

  static checkCheckDigit(value) {
    const payload = value
      .slice(0, value.length - 1)
      .split('')
      .reverse();
    const checkDigit = payload.reduce((acc, num, index) => {
      num = +num;

      if (index % 2 === 0) {
        num *= 2;

        if (num >= 10) {
          const numArr = [...num.toString()].map(Number);
          num = numArr.reduce((sum, item) => sum + item);
        }
      }

      return acc + num;
    }, 0);

    return +value[value.length - 1] === 10 - (checkDigit % 10);
  }
}
