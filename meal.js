const menu = {
    _menu: '',
    _price: 0,

    set meal(mealToCheck) {
        if (typeof mealTocheck === 'string') {
            return this._meal = mealToCheck;
        }
    },

    set price(priceToCheck) {
        if (typeof priceToCheck === 'number') {
            return this._price = priceToCheck;
        }
    },

    get todaysSpecial() {
        if (this._meal && this._price) {
            return `Today's meal is ${this._meal} for $${this._price}!`
        } else {
            return `Meal or price not set correctly!`
        }
    }
};

menu._meal = 'rice';
menu._price = 10;

console.log(menu.todaysSpecial);

// menu._meal = 4;
// menu._price = 'fries';
// console.log(menu);