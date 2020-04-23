//Task 1
let yourName = prompt('What is your name?', '');
alert(`Hello, ${yourName}`);

//Task 2
const CURRENT_YEAR = 2020;
let age = prompt('Write your date of birth?', '');
alert(`Your age is ${CURRENT_YEAR - age}`);

//Task 3
let squareSide = prompt('Write the side length of the square', '');
alert(`The area of the square is ${squareSide ** 2}`);

//Task 4
let radius = prompt('Write the radius length', '');
alert(`The area of circle with radius length ${radius} is ${Math.PI * (radius ** 2)}`);

//Task 5
let distance = prompt('What is the distance between cities in km?', ''), time = prompt('how many hours do you need to cover it?', '');
alert(`You need to move with ${distance / time} km/h speed`);

//Task 6
const CONVERTION_INDEX = 0.92;
let buckAmount = prompt('Write your amount of dollars', '');
alert(`Your amount of money in euros is ${buckAmount * 0.92} euros`);

//Task 7
const FILESIZE = 820;
let flashDriveSize = prompt('Write is the size of your file in GB?', '');
flashDriveSize *= 1024;
alert(`You could download ${(flashDriveSize - flashDriveSize % FILESIZE) / FILESIZE} files 820MB size on this flash drive of yours`)
