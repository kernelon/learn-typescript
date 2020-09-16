export {}
let message = "Welcome Back";
console.log(message)

let sum;
const title = "Kernelon"

let isBeginner: boolean = true;
let total: number = 0;
let name: string = "Vinod";
let sentance: string = `My name is ${name} 
I am a beginner in TypeScript`;

console.log(sentance);

let list1: number[] = [1,2,3,4,5];
let list2: Array<number> = [1,2,3,4,5];

console.log(list1, list2);

let person1: [string, number] = ['Chris', 22];

let person2: [number, string] = [32, 'Leo']

console.log (person1, person2);

enum color {Red, Blue, Green};
let r: color = color.Red;
let b: color = color.Blue;
let g: color = color.Green;

console.log (g, b, r);

