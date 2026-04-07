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

