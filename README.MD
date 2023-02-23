# INTRODUCTION TO TYPESCRIPT

### What is TypeScript?

TypeScript is a superset of JavaScript that compiles to plain JavaScript. Any browser. Any host. Any OS. Open source.

### Why TypeScript?

TypeScript saves you time catching errors and providing fixes before you run code.

### How is Typescript useful?

Typescript is statically typed, which means that the type of a variable is known at compile time. This allows the compiler to catch errors before you run the code. It also allows the IDE to provide code completion and other helpful features. By comparison, Javascript is dynamically typed, which means that the type of a variable is not known until runtime. This means that the compiler cannot catch errors until you run the code. It also means that the IDE cannot provide code completion and other helpful features.

### How do I get started?

Go to the oficial website and download the latest version of TypeScript. You can also install it using npm( which assumes that you have already installed Node.js)

You can install it locally in each project

`npm install typescript`

Or globally

`npm install -g typescript`

(If you are on Mac, you may need to use sudo before installing globally, as in `sudo npm install -g typescript`).

### How do I run a TS file?

Well, you don't. You compile it to JS first. You can do this by running the following command in the terminal:

`tsc <filename.ts>`

This will create a file called `filename.js` in the same directory. You can then run this file using node.

`node filename.js`

### What compiles my TS code to JS?

TS has a compiler that you can see and play around with by running the following command in the terminal:

`npx tsc --init`
