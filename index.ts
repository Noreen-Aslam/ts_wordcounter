import inquirer from "inquirer";

const answers:{
    sentance:string
}= await inquirer.prompt([
    {
        name: "sentance",
        type:"input",
        message:"enter your sentance to count the word:"
    }
]);

const words = answers.sentance.trim().split(" ")
console.log(`your words count is ${words.length}`)