export default class Render {
  constructor(formId, validator) {
    this.form = document.getElementById(`${formId}`);
    this.input = this.form.querySelector('#card-number');
    this.result = document.getElementById('result');
    this.btnReset = document.getElementById('reset');
    this.validator = validator;

    window.addEventListener('load', () => {
      this.form.reset();
    });

    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.input.readOnly = true;

      const validDigit = this.validator.constructor.checkCheckDigit(
        this.input.value,
      );
      this.checkNumLengthRender(this.input.value);

      this.validator.cards.forEach((card) => {
        if (card.validLength && card.validStartNums && validDigit) {
          this.renderResult(card.cardName, 'valid');
        } else if (
          (card.validStartNums && !card.validLength && !validDigit) ||
          (card.validStartNums && card.validLength && !validDigit) ||
          (card.validStartNums && !card.validLength && validDigit)
        ) {
          this.renderResult(card.cardName, 'invalid');
        }
      });
    });

    this.input.addEventListener('input', (e) => {
      this.checkStartWithNumRender(e.target.value);
    });

    this.btnReset.addEventListener('click', (e) => {
      e.preventDefault();
      this.resetDisable();
      this.form.reset();
    });
  }

  static toggleDisabled(element, boolean) {
    element.classList.toggle('disabled', boolean);
  }

  checkStartWithNumRender(value) {
    this.validator.checkStartWithNum(value);

    this.validator.cards.forEach((card) => {
      if (card.validStartNums) {
        this.constructor.toggleDisabled(card.cardElement, false);
        return;
      }
      this.constructor.toggleDisabled(card.cardElement, true);
    });
  }

  checkNumLengthRender(value) {
    this.validator.checkNumLength(value);

    this.validator.cards.forEach((card) => {
      if (card.validLength) {
        return;
      }
      this.constructor.toggleDisabled(card.cardElement, true);
    });
  }

  resetDisable() {
    this.validator.cards.forEach((card) => {
      this.constructor.toggleDisabled(card.cardElement, false);
    });
    [...this.result.querySelectorAll('span')].forEach((span) => span.remove());
    this.input.readOnly = false;
  }

  renderResult(cardName, valid) {
    const resultText = document.createElement('span');
    resultText.innerText = `${cardName} is ${valid}`;
    this.result.appendChild(resultText);
  }
}
