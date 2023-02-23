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

function add(a: number, b: number): number {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const updatedArray = insertAtBeginning([1, 2, 3], 4);
const stringArray = insertAtBeginning(["1", "2", "3"], "4");

// updatedArray[0].split("")
stringArray[0].split("");

// classes

class Student {
  //   firstName: string;
  //   lastName: string;
  //   age: number;
  //   private courses: string[];

  //   constructor(firstName: string, lastName: string, age: number, courses: string[]) {
  //     this.firstName = firstName;
  //     this.lastName = lastName;
  //     this.age = age;
  //     this.courses = courses;
  //   }

  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    private courses: string[]
  ) {}

  enroll(courseName: string) {
    this.courses.push(courseName);
  }

  listCourses() {
    return this.courses.slice();
  }
}

const john = new Student("John", "Doe", 24, ["javascript", "typescript"]);

john.listCourses();

// interfaces
// only available in Typescript, will not be transpiled to JS

interface Human {
  firstName: string;
  age: number;
  hasMagicPowers: false;
  greet: () => void;
}

const jack: Human = {
  firstName: "Jack",
  age: 20,
  hasMagicPowers: false,
  greet: () => {
    console.log("Hello");
  },
};

const gandalf: Human = {
  firstName: "Gandalf",
  age: 100,
  //   hasMagicPowers: true,
  hasMagicPowers: false,
  greet: () => {
    console.log("Hello");
  },
};

const batman: Human = {
  firstName: "Bruce",
  age: 35,
  hasMagicPowers: false,
  greet: () => {
    console.log("I am batman!");
  },
  // vehicle:"batmobile"
};
