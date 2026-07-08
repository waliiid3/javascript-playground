// Create array
const fruits = ["Apple", "Banana", "Orange"];

// Get item
console.log(fruits[0]);

// Change item
fruits[1] = "Mango";

// Add item
fruits.push("Grapes");

// Remove item
fruits.pop();

// Array length
console.log(fruits.length);

// Loop array
for (const fruit of fruits) {
  console.log(fruit);
}

// Destructure array
const [first, second] = fruits;

console.log(first);
console.log(second);

// Copy array
const copy = [...fruits];

// Merge arrays
const arr1 = [1, 2];
const arr2 = [3, 4];

const merged = [...arr1, ...arr2];//Joining arrays


console.log(fruits.includes("Apple"));

console.log(fruits.indexOf("Mango"));

console.log(fruits.slice(0, 2));


