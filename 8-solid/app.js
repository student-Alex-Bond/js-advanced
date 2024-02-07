class Billing {
    constructor(amount){
        this.amount = amount
    }

    calculateTotal() {
        return this.amount;
    }
}

class FixBilling extends Billing {
    constructor(amount){
        super(amount)    
    }
}

class HourBilling extends Billing {
    #hour;
    constructor(amount, hour){
        super(amount)
        this.#hour = hour
    }

    calculateTotal() {
        return this.amount * this.#hour;
    }
}

class ItemBilling extends Billing {
    #items;
    constructor(amount, items){
        super(amount)
        this.#items = items
    }

    calculateTotal() {
        return this.amount * this.#items;
    }
}

const fixB = new FixBilling(1000);
console.log(fixB.calculateTotal());
const hourB = new HourBilling(1000, 12);
const itemsB = new ItemBilling(1000, 12);
console.log(hourB.calculateTotal());
console.log(itemsB.calculateTotal());