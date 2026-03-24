let input = parseInt(prompt("Enter a number: "));
for (let i = 1; i <= input; i++) {
  if (i % 3 === 0 && i % 5 !== 0) {
    console.log("Count " + i + " - Coco");
  } else if (i % 5 === 0 && i % 3 !== 0) {
    console.log("Count " + i + " - Melon");
  } else if (i % 15 === 0 && i % 3 === 0 && i % 5 === 0) {
    console.log("Count " + i + " - Coco Melon");
  } else {
    console.log("Count " + i);
  }
}
