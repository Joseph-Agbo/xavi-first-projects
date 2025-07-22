// window.alert("hello, i am learning js")
console.log("why are we learning js")

// let and const

// String data type
let firstname = "Nweze"
let lastname = "Amanda"
let hobby = "playing football and watching movies"

// number data type
let vehicle = 4
let sum = 4+3+2+1

// concatenation
let fullname = firstname + lastname

// boolean data type
let isagoodguy =true

// null data type
let nothing = null

// undefined data type
let notdefined = undefined

console.log("my name is " + firstname + lastname + "and i love" + hobby);
console.log("i have" + vehicle + "cars");
console.log(fullname);
console.log(sum);


console.log(isagoodguy);

let hotelname = "Aveon Hotel"
console.log(hotelname);

let address = "12 guzupe Abuja"
console.log(address);

let firstNight = 25
console.log(firstNight);

let secondnight = 30
console.log(secondnight);

let thirdnight = 35
console.log(thirdnight);

let totalsum =90
console.log(totalsum);

let isagoodhotel = true
console.log(isagoodhotel);

console.log("i survilled" + hotelname + "at" + address + "they had" + totalsum + "customers over 3 night" + isagoodhotel);


// x = 100
// y = 3
// z = x % y

// console.log(z)

// 18th july
let person = {
    name: "Anthony",
    age: 16,
    height: "5'9",
    no_of_cars: 5
}
console.log(person);

let benz = {
    name: "C300",
    color: "Black",
    model: "C-class",
    no_of_benz: 10,
    interior: "Perfect"
}
console.log(benz);
console.log("I have a car called " + benz.name);
console.log(`Name of student is ${person.name} and he is ${person.age} years old`);
console.log(`I have a car called ${benz.name}`);

// Arrays

let restaurants = ["Kilimanjaro", "Crunches", "Chicken Republic", "Chillis", "Nourisha"]
console.log(restaurants[4]);

let res_near_us = restaurants[3]
console.log(res_near_us);
console.log(restaurants.length);

let delicacies = ["Rice", "Egusi Soup", "Pepper Soup", "Cowtail", "Chicken Laps", "Barbecue", "Fisherman Soup"]
let best_delicacy = delicacies[6]
console.log(best_delicacy);
delicacies.push("Suya")
console.log(delicacies[delicacies.length-1]);
delicacies.pop()
console.log(delicacies);

// Operators
let exp = 6 ** 4 
let greater = 7 > 2
console.log(greater);
let gte = 7 >= 7
console.log(gte);

// Conditions
// If statement
let student1 = {
    name: "Anthony",
    maths: 85,
    english: 70
}
if (student1.maths > 85) {
    console.log("He is an examplary student");
}else {
    console.log("He is not a good student");
}

let age = 20

if (age < 18) {
    console.log("child");
}else if(age < 40){
    console.log("young adult");
}else {
    console.log("Grandfather");
}

let score = 38

if (score >= 70) {
    console.log("A");
}else if (score >= 60) {
    console.log("B");
}else if (score >= 50) {
    console.log("C");
}else if (score >= 40) {
    console.log("D");
}else{
    console.log("F");
}

// && and ||

let value = 10
if (value > 18 && value < 30) {
    console.log("Allowed");
}else {
    console.log("Access Denied");
}

let nkechi = {
    accountbal : 1000,
    car : true
}
if (nkechi.accountbal > 1000000 || nkechi.car == true) {
    console.log("first class citizen");
}else if (nkechi.accountbal > 100000 || nkechi.car == false) {
    console.log("You dey try")
}
// learn switch statements






