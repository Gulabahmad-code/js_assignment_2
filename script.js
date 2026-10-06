// ==========================================
// Step 2: JavaScript Data Types
// ==========================================

// String variable
let userName = "Gulab";

// Number variable
let userAge = 22;

// Boolean variable
let isStudent = true;

// Undefined variable (declared without assigning a value)
let unassignedValue;

// Null variable (explicitly empty)
let emptyValue = null;


// ==========================================
// Step 3: Check Data Type of Variables
// ==========================================

console.log("--- Step 3: Checking Data Types ---");
console.log("Type of userName:", typeof userName);       // string
console.log("Type of userAge:", typeof userAge);         // number
console.log("Type of isStudent:", typeof isStudent);     // boolean
console.log("Type of unassignedValue:", typeof unassignedValue); // undefined
console.log("Type of emptyValue:", typeof emptyValue);   // object (a known JS feature)


// ==========================================
// Step 4 & 5: Type Conversion & Output
// ==========================================

console.log("\n--- Step 4 & 5: Type Conversions ---");

// 1. Convert String to Number
let strNum = "25";
let convertedToNum = Number(strNum);
console.log("Converted '25' to Number:", convertedToNum, "| Type:", typeof convertedToNum);

// 2. Convert Number to String
let numVal = 100;
let convertedToStr = String(numVal);
console.log("Converted 100 to String:", convertedToStr, "| Type:", typeof convertedToStr);

// 3. Convert String to Boolean
let strBool = "true";
let convertedToBool = Boolean(strBool);
console.log("Converted 'true' to Boolean:", convertedToBool, "| Type:", typeof convertedToBool);


// ==========================================
// Step 6: Practice Task & Observations
// ==========================================

console.log("\n--- Step 6: Practice Task ---");

// Attempting to convert a non-numeric string into a number
let invalidNum = Number("abc");
console.log("Number('abc'):", invalidNum, "| Type:", typeof invalidNum);
// OBSERVATION: Converting a non-numeric string like "abc" using Number() results in NaN (Not-a-Number).
// Interestingly, the data type of NaN in JavaScript is still "number".

// Converting 0 into boolean
let boolFromZero = Boolean(0);
console.log("Boolean(0):", boolFromZero, "| Type:", typeof boolFromZero);
// OBSERVATION: In JavaScript, 0 is a falsy value, so Boolean(0) evaluates to false.

// Converting 1 into boolean
let boolFromOne = Boolean(1);
console.log("Boolean(1):", boolFromOne, "| Type:", typeof boolFromOne);
// OBSERVATION: Any non-zero number (like 1) is a truthy value, so Boolean(1) evaluates to true.