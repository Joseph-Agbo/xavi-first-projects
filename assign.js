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
