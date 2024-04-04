import inquirer from "inquirer";
// Initialize user balance and pin code
let mybalance = 4000;
let mypin = 1234;
// print welcome message
console.log("welcome to code with ATM-machine");
let pinanswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "enter your pin code",
    }
]);
if (pinanswer.pin === mypin) {
    console.log("pin is correct, login successfully!");
    // console.log(`current account balance is ${mybalance}`)
    let operationans = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select an operation",
            choices: ["check balance", "withdraw amount"]
        }
    ]);
    if (operationans.operation === "withdraw amount") {
        let amountans = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "enter the amount to withdraw"
            }
        ]);
        if (amountans.amount <= mybalance) {
            mybalance = mybalance - amountans.amount;
            console.log(`${amountans.amount} withdraw successfully`);
            console.log(`your remaining balance is: ${mybalance}`);
        }
        else {
            console.log("insufficient balance");
        }
    }
    else if (operationans.operation === "check balance") {
        console.log(`your account balance is: ${mybalance}`);
    }
}
else {
    console.log("pin is incorrect, try again!");
}
