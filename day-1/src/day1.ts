// let x: number = 10;
// x = 3;

// console.log(x);

// let age: number = 20;
// if (age < 50)
//   age += 10;
//   console.log(age)

//#########  TYPES OF BASIC TYPES 😭🤣🤣🤣🤣  #############
/**  //This is the same as the one below because typescript assigns types
let sales: number = 123_456_789;
let course: string = "typescript";
let is_published: boolean = true;

// this shows typescript automatically assigns types by itself -- typescript get sensse pass javascript sha
let sales = 123_456_789;
let course = "typescript";
let is_published = true;
*/

/** //#########  ARRAYS WITH TYPES  #############
let numbers: number[] = [1, 2, 3];
console.log(numbers);
 //Type script helps make things easier cause it already knows the type so it assists by bringing the methods of thta object
let stringNumbers: string[] = numbers.map((n) => n.toString());
console.log(stringNumbers);

let strings: string[] = ["a", "b", "c"];
console.log(strings);
 //Type script helps make things easier cause it already knows the type so it assists by bringing the methods of thta object
let stringsToNumbers: string[] = strings.map((s) => s.toLocaleUpperCase());
console.log(stringsToNumbers);

let anyArray: any = []; // this did not run until i had to give it a type of any
console.log(anyArray);

anyArray[0] = 1;
anyArray[1] = 2;
anyArray[2] = "str";
anyArray[3] = false;

console.log(anyArray);
*/

/** 
//#########  TUPLES  useful when you have just two values that can beused as key value pairs #############
let user: [number, string] = [1, "Jamal"];
*/
/** 
//#########  ENUMS  #########
// Pascal Case naming convention all fisrt letters should be capital
const enum Size {// adding const || using const makes the typescript compiler generate more optimized code
Small = 1, // gave this a value of one so the i can easily start from 1 instead of 0, the compiler will follow along
Medium,
Large,
}
let mySize: Size = Size.Medium;
console.log(mySize);
*/

//#########  FUNCTIONS  #########
/**function calculateTax(income: number) { // function without return type declared, leaving it to the compiler
    return 0
}
function calculateTax(income: number): number {// function with return type declared, leaving it to the compiler
    return 0
}
*/
/**
function calculateTax(income: number, taxYear: number): number {
  // function with return type declared, leaving it to the compiler
  if (taxYear < 2025) return income * 1.2;
  return income * 1.3;
}

const taxResult: number = calculateTax(10_000, 2024);
console.log(taxResult); 
*/

//#########  OBJECTS  #########
let employee: {
  readonly id: number; // readonly modifier makes it impossible to change the value something after initialization
  name: string;
  retire: (date: Date) => void; // retire is a method that takes in a date and returns nothing
} = {
  id: 1,
  name: "Musa",
  retire: (date: Date) => {
    console.log(date);
  },
};


//#########  ADVANCED TYPES  #########