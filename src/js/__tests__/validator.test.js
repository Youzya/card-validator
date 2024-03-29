import Validator from '../components/Validator';

const testCard = {
  startWithNums: ['51', '52', '53', '54', '55', '222100', '272099'],
  numLength: ['16'],
  validLength: null,
  validStartNums: null,
};

const validator = new Validator();
validator.cards.push(testCard);
const validatorCard = validator.cards[0];

describe('Class Validator: ', () => {
  test(`'checkStartWithNum' should return true or false for validStartNums`, () => {
    validator.checkStartWithNum('2221005500001112');
    expect(validatorCard.validStartNums).toEqual(true);

    validator.checkStartWithNum('3310105500001112');
    expect(validatorCard.validStartNums).toEqual(false);
  });

  test(`'checkNumLength' should return true or false for validLength`, () => {
    validator.checkNumLength('2221005500001112');
    expect(validatorCard.validLength).toEqual(true);

    validator.checkNumLength('3310105500001112555');
    expect(validatorCard.validLength).toEqual(false);
  });

  test(`'checkCheckDigit' should return true or false check digit`, () => {
    expect(validator.constructor.checkCheckDigit('5588362780018027')).toEqual(
      true
    );
    expect(validator.constructor.checkCheckDigit('5588362780018025')).toEqual(
      false
    );
  });
});
