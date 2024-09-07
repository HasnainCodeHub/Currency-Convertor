#!/usr/bin/env node

console.log("\n\tWelcome to Hasnain's Coding World");
import inquirer from "inquirer"

let Currency: any = {
    USD: 1,
    EUR: 0.92,
    POUNDS: 0.78,
    KUAITIDINAR: 0.31,
    DERHAM: 3.67,
    INDIANRUPEE: 83.45,
    PKR: 280

}
let answer = await inquirer.prompt(
    [
        {
            name: "from",
            type: "list",
            message: "Enter From Currency!!",
            choices: ["USD", "EUR", "POUNDS", "KUAITIDINAR", "DERHAM", "INDIANRUPEE", "PKR"]

        },
        {
            name: "to",
            type: "list",
            message: "Enter To Currency!!",
            choices: ["USD", "EUR", "POUNDS", "KUAITIDINAR", "DERHAM", "INDIANRUPEE", "PKR"]

        },
        {
            name: "Amount",
            type: "number",
            message: "Enter Your Amount You want To Convert"
        }
    ]
)

let fromAmount = Currency[answer.from]
let toAmount = Currency[answer.to]
let amount = answer.Amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount
let a = Math.floor(convertedAmount)
console.log(a);


