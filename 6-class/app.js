class Car {
    #brand
    #model
    #mileage
    constructor(brand, model, mileage){
        this.#brand = brand,
        this.#model = model,
        this.#mileage = mileage

    }

    get whatMileage () {
        console.log('Пробег авто: ', this.#mileage);
    }

    set changeMileage (requiredMileage) {
        this.#mileage = requiredMileage;
    }

    info () {
        console.log('Марка авто: ', this.#brand, '\n','Модель авто: ', this.#model, '\n','Пробег авто: ', this.#mileage)
    }
}

const lada = new Car('Lada', '2109', '151000km')
console.log(lada.info())
console.log(lada.whatMileage)
console.log(lada.changeMileage = '20000km')
console.log(lada.whatMileage)