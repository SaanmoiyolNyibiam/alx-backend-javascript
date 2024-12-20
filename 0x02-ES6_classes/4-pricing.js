import Currency from './3-currency';
// this is a module that defines a pricing class

export default class Pricing {
  constructor(amountInput, CurrencyObj) {
    this.amount = amountInput;
    this.currency = CurrencyObj;
  }

  // sets the amount
  set amount(amountInput) {
    if (typeof amountInput !== 'number') throw TypeError('amount must be a number');
    this._amount = amountInput;
  }

  // gets the amount
  get amount() {
    return this._amount;
  }

  // sets the currency
  set currency(CurrencyObj) {
    if (!(CurrencyObj instanceof Currency)) throw TypeError('currency must be an instance of Currency');
    this._currency = CurrencyObj;
  }

  // gets the currency
  get currency() {
    return this._currency;
  }

  // returns the attributes in the following format "amount currency_name (currency_code)"
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // converts a price based on a conversion rate
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') throw TypeError('amount must be a number');
    if (typeof conversionRate !== 'number') throw TypeError('conversionRate must be a number');
    return (amount * conversionRate);
  }
}
