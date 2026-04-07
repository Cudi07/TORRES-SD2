let pokemon = ["Pikachu", "Bulbasaur", "Absol", "Squirtle"];
console.log(pokemon);

console.log(pokemon[0]);
console.log(pokemon[1]);
console.log(pokemon[2]);
console.log(pokemon[3]);
console.log(`My favorite Pokémon is ${pokemon[0]}`);
console.log(`My second favorite Pokémon is ${pokemon[1]}`);
console.log(`My third favorite Pokémon is ${pokemon[2]}`);
console.log(`My fourth favorite Pokémon is ${pokemon[3]}`);
console.log(`I have ${pokemon[0].toLocaleUpperCase()} as my favorite Pokémon!`);

console.log(pokemon.length);
console.log(pokemon[5]);

// Array Mutation
// Modifying the value of an array element
pokemon[4] = "Charmander";
console.log(pokemon);
console.log(pokemon.length);

pokemon[1] = "Ivysaur";
console.log(pokemon);

pokemon[10] = "JigglyPuff";
console.log(pokemon);
console.log(pokemon.length);
//  Add an element on the tail of an array without knowing the actual index of the last element
pokemon[pokemon.length] = "Gengar";
console.log(pokemon);
console.log(pokemon.length);

console.log(pokemon[pokemon.length - 1]);


// [SECTION] Array Mutator Methods
let fruits = ["Apple", "Banana", "Kiwi"];

// push() - adds an element to the end of an array
console.log("My favorite then: " + fruits);
fruits.push("Mango");
console.log("My favorite fruits now: " + fruits);

// pop() - removes the last element of an array and returns it
console.log("Original Array: " + fruits);
fruits.pop();
fruits.pop();
console.log("My favorite fruits now: " + fruits);

// unshift() - adds an element to the beginning of an array
fruits.unshift("Strawberry");
console.log("My favorite fruits now: " + fruits);
fruits.unshift("Watermelon", "Pineapple");
console.log("My favorite fruits now: " + fruits);

// shift() - removes the first element of an array and returns it
console.log("Original Array: " + fruits);
fruits.shift();
fruits.shift();
console.log("My favorite fruits now: " + fruits);

//  sort() - sorts the elements of an array in place and returns the sorted array
console.log("Original Array: " + fruits);
fruits.sort();
console.log("My favorite fruits now: " + fruits);

// reverse() - reverses the order of the elements in an array in place and returns the reversed array
console.log("Original Array: " + fruits);
fruits.reverse();
console.log("My favorite fruits now: " + fruits);

// splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
fruits.splice(1, 0, "Grapes", "Orange");
console.log("My favorite fruits now: " + fruits);
fruits.splice(2, 1);
console.log("My favorite fruits now: " + fruits);

// for each() - executes a provided function once for each array element    
fruits.forEach((fruit) => {
    console.log("I like " + fruit);
});