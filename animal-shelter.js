const animalData = require("./animal-data.json");

class Animal {
  constructor(name, species, color, hunger = 50) {
    this.name = name;
    this.species = species;
    this.color = color;
    this.hunger = hunger;
  }

  greet() {
    console.log(`Hi ${this.name} the ${this.species}`);
  }

  feed() {
    this.hunger -= 20;
    console.log(`Yum, I love food`);
  }
}

class AnimalShelter {
  constructor() {
    this.animals = [];
  }

  addAnimal(animal) {
    this.animals.push(animal);
  }

  adopt(animal) {
    // this.animals = this.animals.filter((ani) => ani.name !== animal.name);
    const animalIndex = this.animals.indexOf(animal);
    this.animals.splice(animalIndex, 1);
  }
}
