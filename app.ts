// Primitives

// numbers
let age: number;
age = 12;

// strings
let myName: string;
myName = "Andrei";

// boolean
let isStudent: boolean;
isStudent = true;

// type inference

let fancyFeature = true;
// even though we do not say which type it is, the variable will take
// by default the type of the first assigned variable

// union types

let type: string | number;
// now type can get either a name or a number;

let budget: string | number = 0;
budget = "$$$$";

// more complex structure

let hobbies: string[];

hobbies = ["gym", "running"];

let personalInfo: {
  firstName: string;
  lastName: string;
  age: number;
  hobbies: string[];
  university: string[];
};

personalInfo = {
  firstName: "andrei",
  lastName: "netoiu",
  age: 23,
  hobbies: ["gym", "running"],
  university: ["Glion", "Bucharest University"],
};

let friends: {
  firstName: string;
  lastName: string;
  age: number;
  hobbies: string[];
  university: string[];
}[];

// Type Aliases

type DOG = {
  name: string;
  breed: string;
  age: number;
  barks: boolean;
};

let peanut: DOG = {
  name: "peanut",
  breed: "beagle",
  age: 4,
  barks: true,
};

// functions
