'use strict';//activated strict mode

/*
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriverLicense = true; //with strict mode the console have feedback that hasDriverLicense is not defined..it is misspelled
if(hasDriversLicense) console.log("I can drive!");

const interface = 'Audio';//this shows unexpected strict mode reserved word
*/

/*
//functions

function logger(){
    console.log('My name is Amy');
}

logger(); //invoking the function, running the function or calling 
logger();

//apples and oranges are the parameters
function fruitProcessor(apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);//3 and 4 are the arguments
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

/*
//function declaration
function calcAge1(birthdate){
    return 2022 - birthdate;
}

const amyAge = calcAge1(1977);

//Function expression
const calcAge2 = function (birthYear){
    return 2022 - birthYear;
}

const age2 = calcAge2(1977);

console.log(amyAge, age2);
*/

/*
//arrow functions
const calcAge3 = birthYear => 2022 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1977, 'Amy'));
console.log(yearsUntilRetirement(1980, 'Christy'));
*/
/*
//functions calling other functions

function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2,3));
*/

/*
const currentAge = function(birthYear){
    return 2022 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = currentAge(birthYear);
    const retirement = 65 - age;
    
    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired. 🎉`);
        return -1;
    }
    // return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1995, 'Amy'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/

/*
//Coding challenge for functions

const calcAverage = (firstScore, secondScore, thirdScore) => 
    (firstScore + secondScore + thirdScore) / 3;


const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

const checkWinner = function(avgDolphins, avgKoalas){
    if(avgDolphins * 2 > avgKoalas && avgKoalas * 2 > avgDolphins){
        console.log(`No one wins.`);
    } else if (avgDolphins >= avgKoalas * 2){
        console.log(`Dolphins win 🐬(${avgDolphins} vs. ${avgKoalas})`);
    } else {
        console.log(`Koalas win 🐨(${avgKoalas} vs. ${avgDolphins})`);
    }
}

checkWinner(avgDolphins, avgKoalas);
checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));
checkWinner(calcAverage(25, 34, 22), calcAverage(85, 54, 41));
*/

/*
//Arrays
const friends = ['David', 'Bob', 'Barb'];
console.log(friends);

// const years = new Array(1991, 1984, 2013, 2016);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);

console.log(friends[friends.length-1]);

friends[2] = 'Jesse';
console.log(friends[2]);

const firstName = "Amy";
const amy = [firstName, 'Jones', 2022 - 1977, 'Front End Engineer', friends];
console.log(amy);
console.log(amy.length);

const calcAge = function(birthYear){
    return 2022 - birthYear;
}

const years = [1990, 1977, 2001, 1984, 2010];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length-1]);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length-1])];
console.log(ages);
*/

/*
const friends = ['David', 'Bob', 'Barb'];
friends.push('Jesse'); //add to element at the end
console.log(friends);
console.log(friends.length);

friends.unshift('Jeffrey'); //add to beginning
console.log(friends);

const popped = friends.pop();//removes last element
console.log(friends);
console.log(popped);

friends.shift();//removed first element
console.log(friends);

console.log(friends.indexOf('David'));//shows 0
console.log(friends.indexOf('Heather')); //shows -1, because not in the array

console.log(friends.includes('David'));//shows true
console.log(friends.includes('John'));//shows false

if(friends.includes('David')) console.log("You have a friend called David");
*/

/*
//Coding challenge
// const calcTip = bill => (bill >= 50 && bill <=300) ? bill * .15 : bill * .20;
//also write as 

// const calcTip = function(bill){
//     return bill >=50 && bill <= 300 ? bill * .15 : bill * .20;
// }

function calcTip (bill){
    return bill >=50 && bill <= 300 ? bill * .15 : bill * .20;
}

const bills = [125, 500, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

console.log(tips);
console.log(total);
*/

/*
//Objects
const amy = {
    firstName : 'Amy',
    lastName : 'Jones',
    age : 2022 - 1977,
    job : 'Front End Engineer',
    friends : ['David', 'Barb', 'Krystle']
};

console.log(amy);
console.log(amy.lastName);
console.log(amy['lastName']);

const nameKey = 'Name';
console.log(amy['first' + nameKey]);
console.log(amy['last' + nameKey]);

// const interestedIn = prompt('What do want to know about Amy? Choose between firstName, lastName, age, job or friends');
// console.log(interestedIn);

// if(amy[interestedIn]){
//     console.log(amy[interestedIn]);
// } else {
//     console.log('Wrong request!')
// }

amy.location = 'Indianapolis';
amy['twitter'] = 'somethingemail.com';
console.log(amy);

//Challenge
console.log(`${amy.firstName} has ${amy.friends.length} friends, and the best friend is called ${amy.friends[0]}`)
*/

/*
//Object methods
const amy = {
    firstName : 'Amy',
    lastName : 'Jones',
    birthYear : 1977,
    job : 'Front End Engineer',
    friends : ['David', 'Barb', 'Krystle'],
    hasDriversLicense : true,

    // calcAge: function(birthYear){
    //     return 2022 - birthYear;
    // }
    // calcAge: function(){
    //     return 2022 - this.birthYear;
    // }
    calcAge: function(){
        this.age = 2022 - this.birthYear;
        return this.age;
    },

    // calcDriversLic: function(){
    //     if(this.hasDriversLicense == true){
    //         return "has driver's License"
    //     } else {
    //         return "doesn't have a driver's license"
    //     }
    // }

    calcSummary: function(){
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and she has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
    }
};

console.log(amy.calcAge());
console.log(amy.age);
// console.log(amy['calcAge'](amy.birthYear));

//Challenge
// console.log(`${amy.firstName} is a ${amy.age}-year old ${amy.job}, and she ${amy.calcDriversLic()}`);
console.log(amy.calcSummary());
*/

/*
//another challenge
const mike = {
    fullName : "Mark Miller",
    mass : 78,
    height : 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2)
        return this.bmi;
    }
};

const john = {
    fullName : 'John Smith',
    mass : 92,
    height : 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2)
        return this.bmi;
    }
};

if (mike.calcBMI() > john.calcBMI()){
    console.log(`${mike.fullName}'s BMI (${mike.bmi.toFixed(2)}) is higher than ${john.fullName} (${john.bmi.toFixed(2)})`);
} else {
    console.log(`${john.fullName}'s BMI (${john.bmi.toFixed(2)}) is higher than ${mike.fullName} (${mike.bmi.toFixed(2)})`);
}
*/

/*
//Loops
for(let rep = 1; rep<=10; rep++){
    console.log(`Lifting weights repetition ${rep}`);
}

for(let rep = 5; rep<=10; rep++){
    console.log(`Lifting weights repetition ${rep}`);
}
*/

/*
const amy = [
    'Amy',
    'Jones',
    2022 - 1977,
    'Front End Engineer',
    ['David', 'Barb', 'Krystle'],
    true
];

const types = [];

for(let i = 0; i < amy.length; i++){
    console.log(amy[i], typeof amy[i]);

    // types[i] = typeof amy[i];

    types.push(typeof amy[i]);
}

console.log(types);

const years = [1995, 1977, 2015];
const ages = [];

for(let i = 0; i < years.length; i++){
    ages.push(2037 - years[i]);
}

console.log(ages);


//continue and break
console.log("---ONLY STRINGS---")
for(let i = 0; i < amy.length; i++){
    if(typeof amy[i] !== 'string') continue;
    console.log(amy[i]);

}

console.log("---Break with number---")
for(let i = 0; i < amy.length; i++){
    if(typeof amy[i] === 'number') break;
    console.log(amy[i]);

}
*/

/*
//looping backwards
const amy = [
    'Amy',
    'Jones',
    2022 - 1977,
    'Front End Engineer',
    ['David', 'Barb', 'Krystle'],
    true
];

for(let i = amy.length - 1; i >= 0; i--){
    console.log(amy[i]);
}

//loop inside a loop

for(let exercise = 1; exercise < 4; exercise++){
    console.log(`Starting exercise ${exercise}`);

    for(let rep = 1; rep < 6; rep++){
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}
*/

/*
//while loop
// for (let rep = 1; rep <= 5; rep++) {
//     console.log(`Lifting weights rep ${rep}`);
// }

// let rep = 1;
// while (rep <= 5){
//     console.log(`WHILE: Lifting weights rep ${rep}`);
//     rep++;
//

let count = 0;
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    count++;
    if(dice === 6) console.log(`Loop is about to end... and took ${count} times`);
}
*/

//Challenge

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

const calcTip = function(bill){
    return bill >= 50 && bill <= 400 ? bill * .15 : bill * .2 ;
}

for(let i = 0; i < bills.length; i++){
    tips.push(calcTip(bills[i]));
    totals.push(calcTip(bills[i]) + bills[i]);
}

console.log(tips);
console.log(totals);

const arr1 = [1, 2, 3, 4, 5, 6, 7];
const calcAverage = function(arr){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        count += arr[i];
    }
    return count / arr.length;
}

console.log(calcAverage(arr1));
console.log(calcAverage(totals));
console.log(calcAverage(tips));



