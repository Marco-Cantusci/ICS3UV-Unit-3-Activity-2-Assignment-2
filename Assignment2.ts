/*
 * @author Marco Cantusci
 * @verion 1.0.0
 * @date 2025-11-14
 * @fileoverview Convert cents to dollars.
 */

// input
// asks for total cents and makes it a string
const totalCentsString: string = prompt("Input the cents please: \n") || "\n";

// process
// convers string to number
const totalCentsNumber: number = parseInt(totalCentsString);

// converts cents to dollars
const dollars: number = totalCentsNumber / 100 | 0;

// calculate remaining cents
const cents: number = totalCentsNumber % 100;

// output
console.log("\n");
console.log(`That is ${dollars} dollars and ${cents} cents\n`);

console.log("\nDone.");
