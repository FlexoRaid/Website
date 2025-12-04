//finished---------------------------------------------------------------

let age = 16;
let price = 10.99;

console.log(`You are ${age} years old`);
console.log(`The price is $${price}`);

let firstName = "Jonatan";
let favoriteFood = "pizza";
let email = "123@gmail.com"

console.log(typeof firstName)
console.log(`Your name is ${firstName}`)
console.log(`You like ${favoriteFood}`)
console.log(`Your email is ${email}`)

//finished---------------------------------------------------------------

let online = false;
let forSale = true;
let isStudent = true;

console.log(typeof online);
console.log(`Are you online: ${online}`)
console.log(`Is this car for sale: ${forSale}`)
console.log(`Enrolled: ${isStudent}`)

//finished---------------------------------------------------------------

let Name = "Jonatan "
let surname = "Przewlocki"
let age2 = 16;
let isStudent2 = true;

document.getElementById("p1").textContent = `Your name is ${Name + surname}`;
document.getElementById("p2").textContent = `You are ${age2} years old`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent2}`;
