const animalData = require("./animal-data.json");

class Animal {
  constructor(name, species, color, hunger = 50) {
    this.name = name;
    this.species = species;
    this.color = color;
    this.hunger = hunger;
  }

  greet(greeting = "Hi") {
    console.log(`${greeting}, I'm ${this.name} the ${this.species}`);
  }

  feed(food = "food") {
    this.hunger -= 20;
    console.log(`Yum, I love ${food}`);
  }
}

class Cat extends Animal {
  constructor(name, color, hunger = 50) {
    super(name, "cat", color, hunger);
    this.food = "fish";
  }

  greet() {
    super.greet("Meow");
  }

  feed() {
    super.feed(this.food);
  }

  meow() {
    console.log(`Meow`);
  }
}

class Dog extends Animal {
  constructor(name, color, hunger = 50) {
    super(name, "dog", color, hunger);
    this.food = "kibble";
  }
  greet() {
    super.greet("Woof");
  }

  feed() {
    super.feed(this.food);
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

  getAnimalsBySpecies(species) {
    return this.animals.filter((ani) => ani.species === species);
  }
}

const shelter = new AnimalShelter();

for (const animal of animalData) {
  const hunger = animal.hunger ? animal.hunger : 50;

  switch (animal.species) {
    case "cat":
      const newCat = new Cat(animal.name, animal.color, hunger);
      shelter.addAnimal(newCat);
      break;
    case "dog":
      const newDog = new Dog(animal.name, animal.color, hunger);
      shelter.addAnimal(newDog);
      break;
    default:
      const newAni = new Animal(
        animal.name,
        animal.species,
        animal.color,
        hunger
      );
      shelter.addAnimal(newAni);
  }
}

// const mittens = new Cat("Mittens", "black", 75);
// const fido = new Dog("Fido", "heeler blue");

for (const ani of shelter.animals) {
  console.log(ani.name);
  console.log(ani.greet());
  console.log(ani.feed());
}
