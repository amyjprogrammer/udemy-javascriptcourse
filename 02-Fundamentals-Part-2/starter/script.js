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

