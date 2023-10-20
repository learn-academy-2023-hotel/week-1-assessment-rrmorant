// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code - challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a conditional statement that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// Expected outcome: "banana"

// if(fruit1.length > fruit2.length){
//     console.log(fruit1)
// } else{
//     console.log(fruit2)
// }
// Outcome:"banana"

// Set two:
const fruit1 = "cherry"
const fruit2 = "kiwi"
// // Expected outcome: "cherry"

if(fruit1.length > fruit2.length){
    console.log(fruit1)
} else{
    console.log(fruit2)
}
// //Outcome: "cherry"

// // Pseudo code: In this code we use the .length to count the characters in variables fruit1 and fruit2. In the conditional statement, we ask if fruit1 has more characters than fruit2. If so, output fruit1. If not, output fruit2. The final outcome is fruit1, "cherry".


// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

console.log(padres1984WorldSeriesRuns.length + padres1998WorldSeriesRuns.length)
// Output: 9

// Pseudo code: I used the .length to count the elements of each array and then added each variable to get the output of 9, representing the numbers of elements.

// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "Golf 2023"
// Expected output: "3202 floG"

// console.log(currentCohort.reverse())

// const reversedString = currentCohort.split("").reverse().join("")
    // console.log(reversedString)

const reversedString = currentCohort.split("")
    console.log(reversedString)

reversedString.reverse()
    console.log(reversedString)
    
const stringReversed = reversedString.join("")
    console.log(stringReversed)

// output 3202 floG

// Pseudo code: I completely got this wrong. In order to reverse it, have to take the string currentCohort and turn it into an array which is reversedString and split them. After they are split, then they can be reversed with .reverse. After they are reversed, it needs to be redeclared as a string which is stringReversed and using the .join to put them back together getting the orginal string backwards reading "3202 floG"


// --------------------3) Create the code that will log only the odd numbers from the array using the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// Expected output: 13 5 -5 27

const oddNumbers = (array) => {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            newArray.push(array[i])
        }
    }
    return newArray
}
console.log(oddNumbers(stockExchange))

//Output [13, 5, -5, 27]

// Pseudo code: I'm still at odd with this. I was able to use another code I used previously and knew that adding modulo would create the opposite of getting the even numbers which are odd.
