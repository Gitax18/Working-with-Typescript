// Type annotation for primitive data
const fullname: string = "gitanshu";
let age: number = 12;
let hasInsurance: boolean = false;

const hasNothing: null = null;
const nothing: undefined = undefined;

// Type annotation for built-in objects
let now: Date = new Date();

// TA for arrays
const foods: string[] = ["biryani", "burger", "pasta"];
const quantity: number[] = [2, 4, 2];
const inCart: boolean[] = [true, true, false];

// TA for classes
class Car {}
const scross: Car = new Car();

// TA for Object Literal
let point: { x: number; y: number } = {
  x: 12,
  y: 42,
};

// When to use annotations
// 1) Function that returns the 'any' type.
const points = '{"x": 12, "y": 21}';
const coordinates: { x: number; y: number } = JSON.parse(points); // here we infer the type annotation, parse return :any type data.
console.log(coordinates);

// 2) When we declare variable and initialize it later.
const colors: string[] = ["green", "pink", "orange"];
let foundWord: boolean; // here we infer the type annotation.

foundWord = false;
for (let i = 0; i < colors.length; i++) {
  if (colors[i] == "red") foundWord = true;
}

console.log(foundWord);

// 3) Situation where variable type cannot be infer
/*
Lets say there is a situation where the initial value of a variable is false (:boolean) but in future it can be Object or string or number.
here if we initialise the variable with `false` value then the type inference will not allow the variable to re-initialise with another type.
To Avoid so we can use manual type inference that is type annotation.
*/

let numbers: number[] = [2, 4, 6, 8, 11];
// let thisIsOdd = false; // this will not allow us to change the value to number type in future.
let thisIsOdd: number | boolean = false; // this makes the thisIsOdd variable to store two types of data.

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) thisIsOdd = numbers[i];
}

console.log(thisIsOdd);

//annotating input and output of function
const sqr: (
  i: number
) => /*<- input annotation */ void /*<-output annotation */ = (i) =>
  console.log(i * i);

sqr(5);
