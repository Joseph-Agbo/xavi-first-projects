window.alert

let student = {
    name: "XaviMoney",
    age: 20,
    scores: [75, 66, 78, 85, 91]
}

let secondstudent = {
    name: "Palmer",
    age: 25,
    scores: [65, 55, 60, 72, 77]
}

let thirdstudent = {
    name: "Hernandez",
    age: 30,
    scores: [96, 90, 93, 74, 47]
}

let students = [student, secondstudent, thirdstudent]

let book = {
    title: "Oliver Twist",
    author: "Charles Dickens",
    pages: 368,
    isAvailable: true
}
console.log(book.title);
console.log(book.isAvailable);
book.isAvailable = false
console.log(book.isAvailable);

let colors = ["red", "blue", "yellow", "violet", "purple"]
console.log(colors[0])
console.log(colors[4])
colors.push("Margenta")
colors.shift();
console.log(colors);
console.log(colors.length);

let x = 10;
let y = 3;

let addition = 10 + 3
console.log(addition);

let subtraction = 10 - 3
console.log(subtraction);

let multiplication = 10 * 3
console.log(multiplication);

let division = 10 / 3
console.log(division);

let modulus = 10 % 3
console.log(modulus);

let greater = 10 > 3
console.log(greater);

let lesser = 3 < 10
console.log(lesser);

let equality = 10 === 3
console.log(equality);

let notequal = 10 != 3
console.log(notequal);

let and = true && true
console.log(and);

let or = true || false
console.log(or);

// for Loop

let numbers = [95, 0, 35, 5, 77, 66, 43, 32, 2, 1]

let plus = 0
for (let i = 0; i < numbers.length; i++) {
    plus += numbers[i]
    
}
console.log(plus);

// count vowels in a string
let string = "My Precious"
let vowels = "aeiouAEIOU"
let stringCount = 0

for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
        stringCount++;
    }
    
}
console.log(stringCount);

// prime numbers
for (let num = 2; num <= 100; num++) {
    let isPrime = true
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false
            break;
        }
        
    }
    if (isPrime) {
        console.log(num);
        
    }
}

// Pyramid Pattern
let rows = 5;

for (let i = 1; i <= rows; i++) {
    let spaces = " ".repeat(rows - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
    
}

// function
function myreversedString(string) {
    let reversedString = ""

    for (let i = string.length - 1; i >= 0; i--) {
        reversedString = reversedString + string[i]
        
    }
    return reversedString;
}
console.log(myreversedString("joseph"));

// palindrome
function isPalindrome(word) {
    let theReversed = ""

    for (let i = word.length - 1; i >= 0; i--) {
        theReversed += word[i];
        
    }if (word === theReversed) {
        return (`${word} is a palindrome`)
    }else {
        return (`${word} is not a palindrome`)
    }
}
console.log(isPalindrome(`level`));

// sort an array
let arr = [5, 2, 9, 1, 5, 6]

for (let i = 0; i < arr.length - 1; i++){
for (let j = 0; j < arr.length - 1 - i; j++){
if (arr[j] > arr[j + 1]){ 
    // swap arr[j] and arr[j + 1]
 let temp = arr[j];
arr[j] = arr[j + 1];
arr[j + 1] = temp;
}
}
}
console.log(arr); // output: [1, 2, 5, 5, 6, 9,]

// stringMethods
function capitalizethisWords(sentence) {
    let result = ""
    let capitalizeFirst = true;

    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i]
        let code = char.charCodeAt(0)

        if (capitalizeFirst && code >= 97 && code <= 122) {
            char = String.fromCharCode(code - 32)
            capitalizeFirst = false;
        }else {
            capitalizeFirst = (char === " ");
        }

        result += char; 
    }

    return result;
}
console.log(capitalizethisWords("xavimoney loves playing football"));

function isPalindrome(word) {
    let start = 0
    let end = word.length - 1

    while (start < end) {
        if (word[start] !== word[end]) {
            return "isnotaPalindrome";
        }
        start++;
        end--;
    }
    return "A Palindrome";
}
console.log(isPalindrome("civic"));
console.log(isPalindrome("catfish"));

function hideEmail(email) {
    let atindex = 0
    let result = ""

    for (let i = 0; i < email.length; i++) {
        if (email[i] === "@") {
            atindex = i;
            break;
        }
        
    }

    for (let i = 0; i < email.length; i++) {
        if (i < atindex) {
            if (i < 2 || i === atindex - 1) {
                result += email[i];
            }else {
                result += "#";
            }
        }else {
                result += email[i]
            }
        
    }
    return result;
}
console.log(hideEmail("xavimoney@yahoo.com"));

function countVowels(string) {
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    let vowelCount = 0

    for (let i = 0; i < string.length; i++) {
        let character = string[i]

        for (let j = 0; j < vowels.length; j++) {
            if (character === vowels[j]) {
                vowelCount++;
                break;
            }
            
        }
    }
    return vowelCount;
}
console.log(countVowels("Photosynthesis"));

function reverseString(string) {
    let reversed = ""

    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i];
        
    }
    return reversed;
}
console.log(reverseString("Macintosh"));




