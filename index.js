// import inquirer from "inquirer";
// const answers:{
//     sentance:string
// }= await inquirer.prompt([
//     {
//         name: "sentance",
//         type:"input",
//         message:"enter your sentance to count the word:"
//     }
// ]);
// const words = answers.sentance.trim().split(" ")
// console.log(`your words count is ${words.length}`)
// Import the 'inquirer' library for handling user input
import inquirer from "inquirer";
// Prompt the user to enter a sentence
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the words: "
    }
]);
// Extract the sentence from the user's input
const userSentence = answers.Sentence;
// Trim the sentence to remove leading and trailing whitespaces
const trimmedSentence = userSentence.trim();
// Split the trimmed sentence into an array of words using spaces as separators
const wordsArray = trimmedSentence.split(" ");
// Count the number of words in the sentence
const wordCount = wordsArray.length;
// Display the result to the user
console.log(`Your sentence has ${wordCount} word(s)`);
