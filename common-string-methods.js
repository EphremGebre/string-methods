/*

Practice Problem #1

Activity 1: Searching Strings
Write a program to:
Check if the text "JavaScript" is in the string "Learning JavaScript is fun!" using includes.
Find the position of the word "fun" in the string.

Activity 2: Transforming Strings
Convert the string " CODE BOOTCAMP " to lowercase and remove all extra whitespace.
Replace "BOOTCAMP" with "JavaScript" in the transformed string.

Activity 3: Breaking Apart a Sentence
Split the sentence "Coding is fun and educational" into an array of words.

Activity 4: Retrieving Substrings
Retrieve the first character of "Bootcamp" using charAt.
Extract the word "camp" from "Bootcamp" using slice.

Advanced Challenge
Write a program to process the following string:
Customer: John Doe
Order: Apple, Banana, Grape
Total: $20.50
Extract the customer name.
Split the order into an array of items.
Convert the total price to uppercase (e.g., "TOTAL: $20.50").


Practice Problem #2

Objective
Practice using common string methods to manipulate and extract information from strings.

Instructions:
You are tasked with processing a single string and
performing a series of operations using the string methods covered in the lesson.
Each task corresponds to one or more methods and can be completed independently.

String to Use:
  let inputString = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";

Tasks:
Complete the following tasks and assign the results to the specified variables. Log each result to the console.

1. Searching
  - Check if the word "JavaScript" is in the string using includes and assign the result to a variable named hasJavaScript.
  - Find the position of the word "Coding" in the string using indexOf and assign the result to a variable named codingPosition.
  - Check if the string starts with "Welcome" using startsWith and assign the result to a variable named startsWithWelcome.
  - Check if the string ends with "today." using endsWith and assign the result to a variable named endsWithToday.

2. Transforming
  - Convert the string to all lowercase letters using toLowerCase and assign the result to a variable named lowercaseString.
  - Convert the string to all uppercase letters using toUpperCase and assign the result to a variable named uppercaseString.
  - Remove the extra spaces from the beginning and end of the string using trim and assign the result to a variable named trimmedString.
  - Replace the word "JavaScript" with "coding" using replace and assign the result to a variable named replacedString.

3. Breaking Apart
  - Split the string into an array of words using split with a space (" ") as the delimiter and assign the result to a variable named wordsArray.

4. Retrieving
  - Retrieve the first character of the trimmed string using charAt and assign the result to a variable named firstCharacter.
  - Extract the word "Bootcamp" from the string using slice and assign the result to a variable named extractedBootcamp.

*/

//Starter Code
let inputString = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";

// Practice Problem #1

// Activity 1: Searching Strings
console.log("--- Activity 1: Searching Strings ---");
let text1 = "Learning JavaScript is fun!";
let includesJavaScript = text1.includes("JavaScript");
console.log(`Is "JavaScript" in the string? ${includesJavaScript}`); // Expected: true

let positionOfFun = text1.indexOf("fun");
console.log(`Position of "fun": ${positionOfFun}`); // Expected: 22 (index starts at 0)

// Activity 2: Transforming Strings
console.log("\n--- Activity 2: Transforming Strings ---");
let originalString = " CODE BOOTCAMP ";

// Convert to lowercase and remove whitespace
let transformedString = originalString.trim().toLowerCase();
console.log(`Transformed string (trimmed & lowercase): "${transformedString}"`); // Expected: "code bootcamp"

// Replace "BOOTCAMP" with "JavaScript" in the transformed string
// Note: 'transformedString' is already lowercase, so we replace 'bootcamp'
let replacedString = transformedString.replace("bootcamp", "javascript");
console.log(`Replaced string: "${replacedString}"`); // Expected: "code javascript"

// Activity 3: Breaking Apart a Sentence
console.log("\n--- Activity 3: Breaking Apart a Sentence ---");
let sentence = "Coding is fun and educational";
let wordsArray = sentence.split(" ");
console.log(`Array of words: [${wordsArray.map(word => `"${word}"`).join(', ')}]`); // Expected: ["Coding", "is", "fun", "and", "educational"]

// Activity 4: Retrieving Substrings
console.log("\n--- Activity 4: Retrieving Substrings ---");
let word = "Bootcamp";

// Retrieve the first character
let firstCharacter = word.charAt(0);
console.log(`First character of "Bootcamp": "${firstCharacter}"`); // Expected: "B"

// Extract the word "camp"
let extractedSubstring = word.slice(4); // 'c' is at index 4
console.log(`Extracted "camp": "${extractedSubstring}"`); // Expected: "camp"

// Advanced Challenge
console.log("\n--- Advanced Challenge ---");
let multiLineString = `Customer: John Doe
Order: Apple, Banana, Grape
Total: $20.50`;

// Extract the customer name
let customerLine = multiLineString.split("\n")[0];
let customerName = customerLine.split(": ")[1];
console.log(`Customer Name: "${customerName}"`); // Expected: "John Doe"

// Split the order into an array of items
let orderLine = multiLineString.split("\n")[1];
let orderItemsString = orderLine.split(": ")[1];
let orderItemsArray = orderItemsString.split(", ");
console.log(`Order Items: [${orderItemsArray.map(item => `"${item}"`).join(', ')}]`); // Expected: ["Apple", "Banana", "Grape"]

// Convert the total price line to uppercase
let totalLine = multiLineString.split("\n")[2];
let uppercaseTotalLine = totalLine.toUpperCase();
console.log(`Uppercase Total: "${uppercaseTotalLine}"`); // Expected: "TOTAL: $20.50"


console.log("\n--- Practice Problem #2 ---");

// Starter Code for Problem #2
let problem2InputString = "   Welcome to the Coding Bootcamp! Learn JavaScript today.   ";

// 1. Searching
let problem2HasJavaScript = problem2InputString.includes("JavaScript");
let problem2CodingPosition = problem2InputString.indexOf("Coding");
let problem2StartsWithWelcome = problem2InputString.trim().startsWith("Welcome");
let problem2EndsWithToday = problem2InputString.trim().endsWith("today.");

// 2. Transforming
let problem2LowercaseString = problem2InputString.toLowerCase();
let problem2UppercaseString = problem2InputString.toUpperCase();
let problem2TrimmedString = problem2InputString.trim();
let problem2ReplacedString = problem2InputString.replace("JavaScript", "coding");

// 3. Breaking Apart
let problem2WordsArray = problem2InputString.split(" ");

// 4. Retrieving
let problem2FirstCharacter = problem2TrimmedString.charAt(0);
let problem2IndexOfBootcamp = problem2InputString.indexOf("Bootcamp");
let problem2ExtractedBootcamp = problem2InputString.slice(problem2IndexOfBootcamp, problem2IndexOfBootcamp + "Bootcamp".length);

// Log all results for Problem #2
console.log({
  problem2HasJavaScript,
  problem2CodingPosition,
  problem2StartsWithWelcome,
  problem2EndsWithToday,
  problem2LowercaseString,
  problem2UppercaseString,
  problem2TrimmedString,
  problem2ReplacedString,
  problem2WordsArray,
  problem2FirstCharacter,
  problem2ExtractedBootcamp,
});
