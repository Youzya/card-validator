import Render from './components/Render';
import Validator from './components/Validator';

const cardValidator = new Validator();
const render = new Render('form', cardValidator);

cardValidator.addCard('Visa', 'visa');
cardValidator.addCard('MasterCard', 'master');
cardValidator.addCard('American Express', 'amex');
cardValidator.addCard('MIR', 'mir');
