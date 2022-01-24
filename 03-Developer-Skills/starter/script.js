// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
//setting up prettier
const x = 23;
if (x === 23) console.log(23); //auto formats on save

const calcAge = birthYear => 2037 - birthYear;

console.log(calcAge(1994));

console.log(); //just do cl and enter for this now
*/

//Debugging

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: prompt('Degrees celsuis:'),
//   };

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());// this shows the wrong number...line 25 is wrong

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: prompt('Degrees celsuis:'),
  };

  const kelvin = parseFloat(measurement.value) + 273;
  return kelvin;
};

console.log(measureKelvin());
