document.getElementById("myH1").textContent = "Java Script practice";
document.getElementById("myP").textContent = "by Jonatan";

//---------------------------------------------------------------

let age = 25;
let price = 10.99;
let gpa = 2.1;

console.log(`You are ${age} years old`);
console.log(`The price is $${price}`);
console.log(`Your gpa is: ${gpa}`);

let firstName = "Bro";
let favoriteFood = "pizza";
let email = "bro123@gmail.com"

console.log(typeof firstName)
console.log(`Your name is ${firstName}`)
console.log(`You like ${favoriteFood}`)
console.log(`Your email is ${email}`)

//---------------------------------------------------------------

let online = false;
let forSale = true;
let isStudent = true;

console.log(typeof online);
console.log(`Bro is online: ${online}`)
console.log(`Is this car for sale: ${forSale}`)
console.log(`Enrolled: ${isStudent}`)

//---------------------------------------------------------------

let Name = "Jonatan "
let surname = "Przewlocki"
let age2 = 16;
let isStudent2 = true;

document.getElementById("p1").textContent = `Your name is ${Name + surname}`;
document.getElementById("p2").textContent = `You are ${age2} years old`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent2}`;

//---------------------------------------------------------------

let students = 30;

students = students + 1;
students = students - 1;
students = students * 2;
students = students / 2;
students = students **2;
let extraStudents = students % 3;

students += 2;
students -= 1;
students *= 2;
students /= 2;
students **= 2;
students %= 2;

students++;
students--;

//---------------------------------------------------------------

console.log(students);

let result = 1 + 2 * 3 + 4 ** 2;

console.log(result);

//---------------------------------------------------------------

let username = window.prompt("What's your username?");

console.log(username);

let username2;

document.getElementById("mySubmit").onclick = function(){
    username2 = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username2}`
    console.log(username2);
}

//---------------------------------------------------------------

let age3 = window.prompt("How old are you?");
age3 = Number(age3);
age3+=1;

console.log(age3, typeof age3);

let x2 = "";
let y2 = "";
let z2 = "";

x2 = Number(x2);
y2 = String(y2);
z2 = Boolean(z2);

console.log(x2, typeof x2)
console.log(y2, typeof y2)
console.log(z2, typeof z2)

//---------------------------------------------------------------

const PI = 3.14159;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myh3").textContent = circumference + "cm";
}

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}

//---------------------------------------------------------------

// console.log(Math.PI);
// console.log(Math.E);

// let x = 10;
// let y = 2;
// let z = 1;

// z = Math.round(x);
// z = Math.floor(x);
// z = Math.ceil(x);
// z = Math.trunc(x);
// z = Math.pow(x, y);
// z = Math.sqrt(x);
// z = Math.log(x);
// z = Math.sin(x);
// z = Math.cos(x);
// z = Math.tan(x);
// z = Math.abs(x);
// z = Math.sign(x);

// let maxVal = Math.max(x, y, z);
// let minVal = Math.min(x, y, z);

// console.log(minVal);


//---------------------------------------------------------------

const min = 50;
const max = 100;

let randomNum = Math.floor(Math.random() * (max - min)) + min;

console.log(randomNum)

const myButton = document.getElementById("myButton");
const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");
const min2 = 0;
const max2 = 1000;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max2) + min2;
    randomNum2 = Math.floor(Math.random() * max2) + min2;
    randomNum3 = Math.floor(Math.random() * max2) + min2;
    myLabel1.textContent = randomNum1;
    myLabel2.textContent = randomNum2;
    myLabel3.textContent = randomNum3;
}

//---------------------------------------------------------------

let age4 = 16;

if(age4 >= 18){
     console.log("you are old enough to enter this site");
}
 else {
     console.log("you must be 18+ to enter this site")
}

let time = 14;

if(time <  12){
    console.log("Good morning!");
}
else {
    console.log("Good afternoon!")
}

let isStudent3 = true;

if(isStudent3){
    console.log("You are a student");
}
else {
    console.log("You are not a student")
}

let age5 = 16;
let haslicens = false;

if(age5 >= 16){
    console.log("You are old enought to drive")

    if(haslicens){
        console.log("You have your license!")
    }
    else{
        console.log("You have bot your license yet!")
    }
}
else{
    console.log("You are to young to drive")
}

const myText2 = document.getElementById("myText");
const mySubmit2 = document.getElementById("mySubmit")
const myP2 = document.getElementById("myP");
let age6;

mySubmit2.onclick = function(){

age6 = myText2.value;
age6 = Number(age6)

if(age6  >= 100){
    myP2.textContent = "You are TOO OLD  to enter this site!";
}
else if(age6 == 0){
    myP2.textContent = "You can't enter. You were just born";
}
else if(age6 >= 18){
    myP2.textContent = "You are old enought to enter this site";
}
else if(age6 < 0){
    myP2.textContent = "Your age can't be below 0";
}
else{
    myP2.textContent = "You msut be 18+ to enter this site";
}
}

//---------------------------------------------------------------

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterBtn = document.getElementById("masterBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmitFinal = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const PaymentResult = document.getElementById("PaymentResult");

mySubmitFinal.onclick = function(){
    
    if(myCheckBox.checked){
        subResult.textContent = `You are subscribed!`
    }
    else{
        subResult.textContent = `You are NOT subscribed!`
    }

    if(visaBtn.checked){
        PaymentResult.textContent = `You are paying with Visa`
    }
    else if(masterBtn.checked){
        PaymentResult.textContent = `You are paying with MasterCard`
    }
    else if(paypalBtn.checked){
        PaymentResult.textContent = `You are payinig with PayPal`
    }
    else {
        PaymentResult.textContent = `N/A`
    }

}
