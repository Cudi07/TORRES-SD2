// [SECTION] JS Objects

// Imitates real world descriptions and real world objects. They are a collection of properties and methods. They are used to store data and functions that are related to a specific object.

// Object Literal Syntax
const person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

// Accessing properties and methods
console.log(person.name); // John
console.log(person.age); // 30
person.greet(); // Hello, my name is John

let arr = [1, 2, 3];

let obj = {
    name: "Carlo",
    age: 22,
}

console.log(typeof arr);
console.log(typeof obj);

let person2 = {
    name: "Jane Cotton",
    age: 25,
    height: "160cc",
    weight: "50kg",
    contactNumber: ["09123456789", "09987654321"],
    address: {
        street: "123 Main St",
        city: "Manila",
        country: "Philippines"
    },
}

console.log(person2);

// Dot Notation
// Access values inside an object property
console.log(person2.name); // Jane Cotton
console.log(person2.age); // 25
console.log(person2.height); // 160cc
console.log(person2.weight); // 50kg
console.log(`Hi, my name is ${person2.name} and I am ${person2.age} years old. I am ${person2.height} tall and I weigh ${person2.weight}.`);

// Updating Values
person2.name = "Irish Isabela";
console.log(person2.name); // Irish Isabela

// adding a property to an object
person2.hobby = "Playing Basketball";

// Class and Objects
class Animal {
    constructor(name, breed, kind, color) {
        this.name = name;
        this.breed = breed;
        this.kind = kind;
        this.color = color;
        this.makeSound = function() {
            if (this.kind === "Dog") {
                console.log("Woof!");
            } else if (this.kind === "Cat") {
                console.log("Meow!");
            } else {
                console.log("Unknown sound");
            }
        }
    }
    greet() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old. I am a ${this.breed} and I am ${this.color}.`);
    }
}

let dog = new Animal("Buddy", "Golden Retriever", "Dog", "Golden");
console.log(dog);
console.log(dog.name);
dog.makeSound(); 
dog.greet();    

let cat = new Animal("Joshua", "Puspin", "Cat", "White");
console.log(cat);
console.log(cat.name);
cat.makeSound();
cat.greet();

let trex = new Animal("Rex", "Dino", "Dinosaur", "Green");
console.log(trex);
trex.makeSound();
trex.greet();

console.log(person2.contactNumber[0]); // 09123456789
console.log(person2.address.street); // 123 Main St

// SECTION [Pokemon]
class Pokemon {
    constructor(name, level, health, mana) {
        this.name = name;
        this.level = level;
        this.health = health * level;
        this.mana = mana;
        this.tackle = function(target) {
            let damage = 10 * this.level;
            console.log(`${this.name} used Tackle!`);
            target.health -= damage;
            console.log(`${target.name} took ${damage} damage!`);
            
            let totalMana = 100;
            if(this.mana < totalMana) {
                if((this.mana + 20) >= totalMana) {
                    this.mana = totalMana;
                } else {
                    this.mana += 20;
                    console.log(`${this.name} has ${this.mana} mana left!. ${target.name } has ${target.health} health left!`);
                }
            } else {
                console.log(`${this.name} is already at full mana! Current mana: ${this.mana}`);
            }
        }

        this.skill1 = function(target) {
            if(this.name === "Pikachu") {
                if (this.mana < 50) {
                    console.log(`${this.name} does not have enough mana to use Thunderbolt! Current mana: ${this.mana}`);
                } else {
                console.log(`${this.name} used Thunderbolt!`);
                target.health -= 20 * this.level;
                console.log(`${target.name} took ${20 * this.level} damage!`);
                this.mana -= 50;
                console.log(`${this.name} has ${this.mana} mana left!. ${target.name } has ${target.health} health left!`);
            }

                } else if(this.name === "Charmander") { 
                    if (this.mana < 50) {
                        console.log(`${this.name} does not have enough mana to use Flamethrower! Current mana: ${this.mana}`);
                    } else {
                    console.log(`${this.name} used Flamethrower!`);
                    target.health -= 20 * this.level;
                    console.log(`${target.name} took ${20 * this.level} damage!`);
                    this.mana -= 50;
                    console.log(`${this.name} has ${this.mana} mana left!. ${target.name } has ${target.health} health left!`);
                }
            }
        }

        this.healPotion = function() {
            let totalHealth = 100 * this.level;
            if (this.health < totalHealth) {
                if((this.health + 150) >= totalHealth) {
                    this.health = totalHealth;
                    console.log(`${this.name} used Heal Potion! ${this.name} is now fully healed! Current health: ${this.health}`);
                } else {
                    this.health += 150;
                    console.log(`${this.name} used Heal Potion! ${this.name} healed 150 health points! Current health: ${this.health}`);
                }
            } else {
                console.log(`${this.name} is already at full health! Current health: ${this.health}`);
            }
        }
    }
}


let pikachu = new Pokemon("Pikachu", 5, 100, 100);
console.log(pikachu);

let charmander = new Pokemon("Charmander", 5, 100, 100);
console.log(charmander);
pikachu.tackle(charmander);
pikachu.tackle(charmander);
pikachu.tackle(charmander);
charmander.tackle(pikachu);
console.log(charmander);
console.log(pikachu);
pikachu.skill1(charmander);
charmander.skill1(pikachu);
charmander.healPotion();
charmander.healPotion();
charmander.healPotion();

charmander.tackle(pikachu);
console.log(charmander);
console.log(pikachu);
