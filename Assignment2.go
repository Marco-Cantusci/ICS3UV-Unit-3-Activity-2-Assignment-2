/*
 * @author Marco Cantusci
 * @verion 1.0.0
 * @date 2025-11-14
 * @fileoverview Convert cents to dollars.
 */

package main

import (
	"fmt"
	"bufio"
	"os"
	"strconv"
	"strings"
)

func main() {

	// declare cents variables
	var totalCentsString string
	var totalCentsNumber int

	reader := bufio.NewReader(os.Stdin)

	// input
	fmt.Print("Input the cents please: \n")
	totalCentsString, _ = reader.ReadString('\n')
	totalCentsString = strings.TrimSpace(totalCentsString)

	// processing
	totalCentsNumber, _ = strconv.Atoi(totalCentsString)

	// declare dollars and cents
	var dollars int = totalCentsNumber / 100
	var cents int = totalCentsNumber % 100

	// print final results
	fmt.Printf("That is %d dollars and %d cents\n", dollars, cents)

}
