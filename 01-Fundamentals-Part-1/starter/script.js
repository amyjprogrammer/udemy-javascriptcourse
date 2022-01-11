/* First lecture- variables
let js = "amazing";
console.log(40 + 8 + 23 -10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let PI = 3.1415; //const (all upper case)

//exercises
let country = "USA";
let continent = "North America";
let population = 325;
console.log(country);
console.log(continent);
console.log(population);
*/

/* Second
// true; //bool value
// console.log(true);
let javascriptIsFun = true;
console.log(javascriptIsFun);
// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = "Yes!";
console.log(javascriptIsFun);

let year;
console.log(year);
console.log(typeof year); //both are undefined

year = 1995; //assigning a new value

//exercises
let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof language);
*/

/*  Third
let age;
age = 33;

//const needs an intial value
const birthYear = 1977; //can't be changed
//birthYear = 1995;//can't reassign--causes issue
*/

/* Fourth
const now = 2037;
const ageAmy = now - 1977;
const ageSara = now - 2015;
console.log(ageAmy, ageSara);
console.log(ageAmy / 2, ageAmy * 4, 2 **3);

const firstName = "Jane";
const lastName = "Doe";
console.log(firstName + " " + lastName);

//assignment operators
let x = 10 + 5; //15
x += 10; //x = x + 10 is 25
x *= 4; //x = x * 4 is 100
x++ //x = x + 1 is 101
x--;
x--; //now 99
console.log(x);

//comparison operators
console.log( ageAmy > ageSara);
*/

/*
//Operator Precedence
const now = 2037;
const ageAmy = now - 1977;
const ageSara = now - 2015;

console.log(now - 1977 > now - 2015);
console.log(25-10-5);

let x, y;
x = y = 25-10-5;
console.log(x, y);//both are 10

//Coding Challenge
let markWeight = 95;
let markHeight = 1.88;
let johnWeight = 85;
let johnHeight = 1.76;

markBMI = markWeight / markHeight ** 2;
johnBMI = johnWeight / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
*/

/*
//Strings
const firstName = "Amy";
const lastName = "Jones";
const job = "Front End Engineer";
const birthYear = 1977;
const year = 2022;

//template literals
const amy = "I'm " + firstName + ", a " + (year - birthYear) + ' year old ' + job;

console.log(amy);

const amyNew = `I'm ${firstName} ${lastName}, a ${year - birthYear} year old ${job}`;
console.log(amyNew);

console.log(`string with \n\
multiple \n\
lines`);

console.log(`string 
multiple
lines`); //same result as before
*/

/*
//if else
const age = 13;
const isOldEnough = age >= 16;

if(isOldEnough){
    console.log('You can start getting your license. 😊')//emojis with window + .
}
else{
    const yearsLeft = 16 - age;
    console.log(`No luck 🐱‍👤.  Wait another ${yearsLeft} years.`);
}

const birthYear = 1977;
let century;
if(birthYear <= 2000){
    century = 20;
}
else{
    century = 21;
}
console.log(century);
*/

/*
//Coding challenge
// let markWeight = 95;
// let markHeight = 1.88;
// let johnWeight = 85;
// let johnHeight = 1.76;

let markWeight = 95;
let markHeight = 1.88;
let johnWeight = 82;
let johnHeight = 1.76;

markBMI = markWeight / markHeight ** 2;
johnBMI = johnWeight / johnHeight ** 2;

if(markBMI > johnBMI){
    console.log(`Mark's BMI (${markBMI.toFixed(2)}) is higher than John's (${johnBMI.toFixed(2)})!`)
}
else {
    console.log(`John's BMI (${johnBMI.toFixed(2)} is higher than Mark's (${markBMI.toFixed(2)}))`)
}
*/

/*
//Type Conversion 
const inputYear = '1995';
console.log(inputYear + 18);// shows 199518
console.log(Number(inputYear) + 18, inputYear);

console.log(Number('John'));//gives Nan..means invalid number
console.log(typeof Nan);

console.log(String(23), 23);

//Coercion
console.log('I am ' + 23 + ' years old');//converts 23 to a string
console.log('23' - '10' - 3);//gives 10...converts to a number
console.log('23' + '10' + 3); //23103..converts to a string
console.log('23' / '2');//converts to a number..10.5

let n = '1' + 1; //results 11 string
n = n - 1; //converts to number and results in 10
console.log(n);

let rando = 2 + 3 + 4 + '5'; //is 95 as a string
*/

//falsy values: 0, '', undefined, null, NaN

/*
console.log(Boolean(0));//false
console.log(Boolean(undefined)); //false
console.log(Boolean('Amy')); //true
console.log(Boolean({}));//empty object- true

const money = 0;// shows second one

if(money){
    console.log("Don't spend it all");
}
else{
    console.log('You should get a job.')
}

let height;
if(height){
    console.log("Height is defined");
}
else{
    console.log("Height is undefined");
}
*/

/*
//Equality operators === or ==
const age = 18;
if(age === 18){
    console.log('You are of age.');
}

//=== strict operator, both values have to be exactly the same

if('18' == 18) console.log('same');

const favorite = Number( prompt("What is your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if(favorite === 23){
    console.log('Cool! 23 is an amazing number!')
} else if(favorite === 24){
    console.log('24 is also an awesome number');
}else {
    console.log("Really")
}

if(favorite !== 24) console.log("Why not?");
*/

/*
//Boolean logic
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);//and
console.log(hasDriversLicense || hasGoodVision);//or
console.log(!hasGoodVision);

const shouldDrive = hasDriversLicense && hasGoodVision;

if(shouldDrive) console.log('Sarah is able to drive.');
else {
    console.log("Somone else should drive.")
}

const isTired = false;

console.log(hasGoodVision && hasDriversLicense && !isTired)
*/

