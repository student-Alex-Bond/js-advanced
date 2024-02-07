class Person{
    constructor(race, name, languange){
        this.race = race,
        this.name = name,
        this.languange = languange
    }

    say(){
        console.log(this.languange, this.name);
    }
}

class Ork extends Person{
    constructor(name, weapon) {
        super('ork', name, 'непонятный');
        this.weapon = weapon;
    }
    doDamage() {
        console.log('орк сделал удар -', this.weapon);
    }

    say(){
        console.log('Я орк');
    }
}

class Elf extends Person{
    constructor(name, spellType){
        super('elf', name, 'старо непонятный');
        this.spellType = spellType;
    }

    createSpell(){
        console.log('эльф сделал заклинание', this.spellType);
    }

    say() {
        console.log('я эльф');
    }
}

const avgustin = new Ork('Avgustin', 'клюка');
avgustin.say();
avgustin.doDamage();

const valentin = new Elf('Valentin', 'fire wave');
valentin.say();
valentin.createSpell();