window.alert

const person = {
    fname: "John",
    lname: "Doe",
    age: 25
}

let text = ""
for (let x in person) {
    text += person[x] + " "

}
console.log(text);

const numbers = [40, 35, 20, 90, 95]

let txt = ""
for (let x in numbers) {
    txt += numbers[x] + " "
}
console.log(txt);

const number = [50, 55, 70, 0, 1]

let num = ""
number.forEach(myFunction)
function myFunction(value, index, array) {
    num += value + " "
}
console.log(num);

const cars = ["BMW", "Benz", "Volvo"]

let them = ""
for (let x of cars) {
    them += x + " "
}
console.log(them);

for (let i = 1; i <= 30; i++){
    if (i % 2 === 1) {
        console.log(i);

    }
}
for (let i = 1; i < 13; i++){
    console.log(`5 x ${i} = ${5* i}`);
    
}

let gadgets = {
    laptop : `Lenevo Thinkpad`,
    phone: `Infinix Smart 7`,
    wifi: `Mifi`

}
console.log(`I have a ${gadgets.wifi}`);

let motors = ["Benz", "Hearse", "Toyota", "Rangerover", "4matic", "Corolla"]
console.log(motors[motors.length - 1]);
console.log(motors[motors.length - 2]);

let studentScore = {
    english: 80,
    biology: 95,
    chemistry: 77,
    physics: 62
}
if (studentScore.chemistry > 60) {
    console.log(`That is an excellent student`);
    
}else {
    console.log(`Very bad student`);
}
let score = 5

if (score >= 18 && score < 50) {
    console.log(`Allowed`);
    
}else {
    console.log(`Not allowed`);
}

let xavi = {
    car: `Ford`,
    laptop: `Lenevo`,
    phone: `Infinix`,
    netWorth: `$100,000,000`
}
if (xavi.netWorth < `$100,000` || xavi.car === `Benz`) {
    console.log(`Poor boy`);
    
}else if (xavi.phone === `Android` || xavi.laptop === `Del`) {
    console.log(`Bad Guy`);
    
}else if (xavi.netWorth >= `$100,000,000` || xavi.car === `Camry` ) {
    console.log(`Rich Kid`);
    
}else {
    console.log(`Xavi is a Bastard`);
    
}

for (let i = 20; i >= 1; i--) {
    console.log(i);
    
}

let eatRies = [`Mr Biggs`, `xaviBar`, `Spar`, `Shoprite`, `Roban`]

for (let i = eatRies.length - 1; i >= 0; i--) {
    console.log(eatRies[i]);
    
}

for (let i = 40; i >= 2; i--) {
    if (i % 2 === 0) {
        console.log(i);
        
    }
    
}

for (let i = 2; i < 7; i++) {
    for (let j = 1; j < 13; j++) {
        console.log(`${i} x ${j} = ${i*j}`);
        
        
    }
    
}

for (let i = 1; i < 13; i++) {
    console.log(`2 x ${i} = ${2* i}`);
    
    
}

let myNumbers = [40, 39, 0, 1, 34, 45, 3, 76, 74, 95]

let total = 0
let aveRage = 0
let largest = myNumbers[0]
let smallest = myNumbers[0]

for (let i = 0; i < myNumbers.length; i++) {
    total = total + myNumbers[i]
    aveRage = total / myNumbers.length
    if (myNumbers[i] > largest) {
        largest = myNumbers[i]
    }
    if (myNumbers[i] < smallest) {
        smallest = myNumbers[i]
    }
    
}
console.log(total);
console.log(aveRage);
console.log(largest);
console.log(smallest);

let checknumbers = [45,32,3,4,2,100,23,45,52,88,75,98,99,89,12,43,34,10]
let evencounter = 0
let nextcheck = []

for (let i = 0; i < checknumbers.length; i++) {
    if (checknumbers[i] % 2 === 0) {
        console.log(checknumbers[i]);
        evencounter++;
        nextcheck.push(checknumbers[i])
    }
    
}
console.log(evencounter);
console.log(nextcheck);

for (let i = checknumbers.length - 1; i >= 0; i--) {
    console.log(checknumbers[i]);
    
}
console.log(nextcheck.reverse());

let reversearray = []

for (let i = checknumbers.length - 1; i >= 0; i--) {
    reversearray.push(checknumbers[i])
    
}
console.log(reversearray);

// Sort an array from biggest to smallest
let numbig = [80, 4, 66, 1, 100, 120]

for (let i = 0; i < numbig.length - 1; i++) {
    for (let j = 0; j < numbig.length - i -1; j++) {
        if (numbig[j] < numbig[j + 1]) {
            
            let temp = numbig[j]
            numbig[j] = numbig[j + 1]
            numbig[j + 1] = temp
        }
        
    }
    
} console.log(numbig);

// string methods Extracting String characters
let myText = "Hello World"
let chart = myText.charAt(4)
console.log(chart);

let theText = "HELLO WORLD"
let char = theText.charCodeAt(4)
console.log(char);

let letter = "W3Schools"
let print = letter.at(4)
console.log(print);

let letTer = "Hello World"
let priNt = letTer[4]
console.log(priNt);

let text1 = "Hello"
let text2 = "World"
let text3 = text1.concat(` ${text2}`)
console.log(text3);

// Extracting string parts
let texT = "Apple, Banana, Kiwi"
let sliced = texT.slice(7,13)
console.log(sliced);

// Converting to uppercase and lowercase
let words = "hello world"
let myWord = words.toUpperCase()
console.log(myWord);

// isWellFormed & trim()
let mywords = "Hello Bastard \uD900P"
let result = mywords.isWellFormed()
console.log(result);

let text4 = "     Hello World    "
let text5 = text4.trim()
console.log(text5);







