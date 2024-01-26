const Person = function (race, name, languange){
    this.race = race,
    this.name = name,
    this.languange = languange
  
  }
  Person.prototype.say = function () {
   console.log('мой язык: ', this.languange, '\n', 'мое имя: ',this.name);
  }; 
  Person.prototype.weapon = 'моё оружие клюка';
  Person.prototype.doDamge = function () {
    console.log('орк сделал удар')
  };
  Person.prototype.spellType = 'моё заклинание волна';
  Person.prototype.createSpell = function (){
    console.log('эльф сделал заклинание');
    };
  const ork = new Person('орк', 'Августин', 'непонятный');
  const elf = new Person('эльф', 'Валентин', 'старо непонятный');
  
  
  console.log(ork.say());
  console.log(ork.weapon);
  console.log(elf.say());
  console.log(elf.createSpell());
  console.log(elf.doDamge());