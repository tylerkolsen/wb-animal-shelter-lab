const animalData = require("./animal-data.json");

class Animal {
  constructor(name, species, color, hunger = 50) {
    this.name = name;
    this.species = species;
    this.color = color;
    this.hunger = hunger;
    this.play = "I can't wait to play! This'll be so much fun!";
    this.foodGreet = "Mmmm!";
    this.foodEnd = "There's nothing quite like tasty food!";
  }

  greet(greeting = "Hi", play = this.play) {
    console.log(`${greeting}, I'm ${this.name} the ${this.species}. ${play}`);
  }

  feed(greet = this.foodGreet, food = "food", end = this.foodEnd) {
    this.hunger -= 20;
    console.log(`${greet} I love ${food}. ${end}`);
  }
}

class Cat extends Animal {
  constructor(name, color, hunger = 50) {
    super(name, "cat", color, hunger);
    this.food = "fish";
    this.play = "I'm enjoying a nap right now. But maybe we can play later!";
    this.foodGreet = "Purrrrrrrr...";
    this.foodEnd = "This is something I can really sink my teeth into.";
  }

  greet() {
    super.greet("Meow");
  }

  feed() {
    super.feed();
  }

  meow() {
    console.log(`Meow`);
  }
}

class Dog extends Animal {
  constructor(name, color, hunger = 50) {
    super(name, "dog", color, hunger);
    this.food = "kibble";
    this.play = "Oh Boy! Ball ball ball ball ball! Thow the ball!";
    this.foodGreet = "Yes yes yes yes!";
    this.foodEnd = "Can I have some more?";
  }
  greet() {
    super.greet("Woof");
  }

  feed() {
    super.feed();
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
