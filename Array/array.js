// Create array
const fruits = ["Apple", "Banana", "Orange"];

console.log(fruits);

// Get item
console.log(fruits[0]);
console.log(fruits[1]);

// Change item
fruits[1] = "Mango";

console.log(fruits);

// Add item at the end
fruits.push("Grapes");

console.log(fruits);

// Add item at the beginning
fruits.unshift("Pineapple");

console.log(fruits);

// Remove last item
fruits.pop();

console.log(fruits);

// Remove first item
fruits.shift();

console.log(fruits);

// Array length
console.log(fruits.length);

// Loop with for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Loop with for...of
for (const fruit of fruits) {
  console.log(fruit);
}

// Destructure array
const [first, second] = fruits;

console.log(first);
console.log(second);

// Skip items
const numbers = [10, 20, 30, 40];

const [a, , c] = numbers;

console.log(a);
console.log(c);

// Rest operator
const [x, ...rest] = numbers;

console.log(x);
console.log(rest);

// Copy array
const copy = [...fruits];

console.log(copy);

// Merge arrays
const arr1 = [1, 2];
const arr2 = [3, 4];

const merged = [...arr1, ...arr2];

console.log(merged);

// Check item
console.log(fruits.includes("Apple"));

// Find index
console.log(fruits.indexOf("Mango"));

// Slice array
console.log(numbers.slice(1, 3));

// Splice array
numbers.splice(1, 2);

console.log(numbers);

// Map
const nums = [1, 2, 3];

const doubled = nums.map(num => num * 2);

console.log(doubled);

// Filter
const even = nums.filter(num => num % 2 === 0);

console.log(even);

// Find
const found = nums.find(num => num > 1);

console.log(found);

// Reduce
const total = nums.reduce((sum, num) => sum + num, 0);

console.log(total);

// Sort
const values = [5, 2, 8, 1];

values.sort((a, b) => a - b);

console.log(values);

// Reverse
values.reverse();

console.log(values);

// Array of objects
const users = [
  { name: "Ali", age: 20 },
  { name: "Hamim", age: 23 }
];

console.log(users[0].name);
console.log(users[1].age);

// Nested array
const matrix = [
  [1, 2],
  [3, 4]
];

console.log(matrix[0][1]);
console.log(matrix[1][0]);

// Check if array
console.log(Array.isArray(fruits));