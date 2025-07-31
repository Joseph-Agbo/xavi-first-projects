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
    console.log("You dey try");
}


// For Loop & While Loop

// print from numbers 1 to 20
for (let i = 1; i <= 20; i++) {
    console.log(i);   
}
for (let i = 20; i >= 1; i--) {
    console.log(i);
}

// for (let i = 0; i < restaurants.length; i++) {
//     console.log(restaurants[i]);
// }
for (let i = restaurants.length - 1 ; i >= 0; i--) {
    console.log(restaurants[i]);
    
}

for (let i = 2; i <= 40; i++){
    if (i % 2 === 0) {
        console.log(i);
    } 
}

for (let i = 1; i <= 20; i++){
    console.log(i);
}
// Multiplication Table
for (let i = 1; i < 13; i++){
    console.log(`2 x ${i} = ${ 2* i}`);
    // console.log("2*"+ i + "="+ 2*i);
     
}

// Fizz buzz

let fizzbuzzcount = 0;
let fizzcount = 0;
let buzzcount = 0;
let icount = 0;

for (let i = 0; i <= 100; i++) {
     if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizz buzz");
        fizzbuzzcount++;
    }else if ( i % 3 == 0) {
        console.log("fizz");
        fizzcount++;
    }else if (i % 5 == 0) {
        console.log("buzz");
        buzzcount++;
    }else {
        console.log(i);
        icount++;
    }
 
}
console.log(fizzbuzzcount);
console.log(fizzcount);
console.log(buzzcount);
console.log(icount);

let day;
switch (new Date() . getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;                          

}
console.log(day)
let numarray = [100, 20, 10, 5, 7, 2, 90 ]

let total = 0
let average = 0
let largest = numarray[0]
let smallest = numarray[0]
for (let i = 0; i < numarray.length; i++) {
    total = total + numarray[i]
    average = total / numarray.length
    if (numarray[i] > largest) {
        largest = numarray[i]
    }
    if (numarray[i] < smallest) {
        smallest = numarray[i]
    }

}
console.log(total);
console.log(average);
console.log(largest);
console.log(smallest);

// Nested for Loop
for (let i = 5; i <= 10; i++) {
    for (let j = 1; j <= 12; j++){
        console.log(`${i} x ${j} = ${i*j}`);
        
    }
    
}

let checknumbers = [1,4,2,8,5,9,43,7,3,6,34,7,4,45,148,7,25,48,84,8,71,94,25]
let evencounter = 0
let secondcheck = []
let reversedArray = []

for (let i = 0; i <= checknumbers.length; i++){
    if (checknumbers[i] % 2 === 0) {
        console.log(checknumbers[i]);
        evencounter++;
        secondcheck.push(checknumbers[i])
    } 
    
}
console.log(evencounter);

for (let i = checknumbers.length - 1 ; i >= 0; i--) {
    console.log(checknumbers[i]);
    
}

console.log(secondcheck);

for (let i = secondcheck.length - 1 ; i >= 0; i--) {
    console.log(secondcheck[i]);
    
}
console.log(secondcheck.reverse());

for (let i = checknumbers.length - 1; i >= 0; i--){
    reversedArray.push(checknumbers[i]) 

}
console.log(reversedArray);

// vowels
let mystring = "Hello World"
let englishVowels = ["a","e","i","o","u","A","E","I","O","U"]
let countvowel = 0

for (let i = 0; i < mystring.length; i++) {
    for (let j = 0; j < englishVowels.length; j++) {
        if (mystring[i] === englishVowels[j]) {
            countvowel++;
        }
        
    }
    
}
console.log(countvowel);

// // prime numbers
// let primenumbers = []

// for (let i = 1; i <= 100; i++) {
//     let isPrime = true
//     for (let j = 0; j < array.length; j++) {
        
        
//     }
    
// }

// While Loop
let i = 1

while (i <= 100) {
    console.log(i);
    
    i++
}

let a = 1

while (a < 13) {
    console.log(`2 x ${a} = ${ 2* a}`);
 
    a++
}

let c = 0
let fizzbuzzcanter = 0;
let fizzcanter = 0;
let buzzcanter = 0;
let icanter = 0;

while (c <= 100) {
    if (c % 3 === 0 && c % 5 === 0) {
        console.log("fizz buzz");
        fizzbuzzcanter++;
    }else if ( c % 3 == 0) {
        console.log("fizz");
        fizzcanter++;
    }else if (c % 5 == 0) {
        console.log("buzz");
        buzzcanter++;
    }else {
        console.log(c);
        icanter++;
    }

    c++
}
console.log(fizzbuzzcanter);
console.log(fizzcanter);
console.log(buzzcanter);
console.log(icanter);

























