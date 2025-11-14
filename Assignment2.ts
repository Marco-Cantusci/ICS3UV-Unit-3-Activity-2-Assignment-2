/*
 * @author Marco Cantusci
 * @verion 1.0.0
 * @date 2025-11-14
 * @fileoverview Convert cents to dollars.
 */

let totalCentsString: string;
let totalCentsNumber: number;

// input
totalCentsString = prompt("Input the cents please: ") || "\n";

// process
totalCentsNumber = parseInt(totalCentsString);
const dollars: number = totalCentsNumber / 100;
const cents: number = totalCentsNumber % 100;

// output
console.log("\n");
console.log(`That is ${dollars.toFixed(0)} dollars and ${cents} cents\n`);

console.log("\nDone.");
