"use strict"

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


//Task 8
let walletMoney = prompt('How much money do you have in your wallet?', ''),
    chokoPrice = prompt('What is the price of 1 chokolate bar?', '');
alert(`You could by ${(walletMoney - walletMoney % chokoPrice) / chokoPrice} chokolate bars on your money. Besides, your change is ${walletMoney % chokoPrice}`)

//Task 9
let number0 = prompt('Write three-digit number', '');
function numReverse(num) {
    let a = (num - num % 100) / 100,
        b = (num - 100 * a);
    b = (b - b % 10) / 10;
    let c = num - 100 * a - 10 * b;
    return 100 * c + 10 * b + a;
}
alert(`The result is ${numReverse(number0)}`);

//Task 9 (cycles)
let number = prompt('Write three-digit number', '');
length = number.length;
let arr = [],
    i = length - 1,
    tmp = 0;
do {
    arr[i] = (number - number % (10 ** i)) / (10 ** i);
    tmp += arr[i] * (10 ** (length - 1 - i));
    number = number % (10 ** i);
    i--;
} while (i >= 0);
number = tmp;
alert(`The result is ${number}`);

//Task 10

const DEPOSIT_MONTH = 2, DEPOSIT_PERCENT = 5;
let depositSum = prompt('Введите сумму вклада', '');
alert(`Если это простые проценты, то сумма начисленых процентов равна ${(depositSum * (DEPOSIT_MONTH / 12) * (DEPOSIT_PERCENT / 100)).toFixed(2)}. Если это сложные проценты, то сумма начисленых процентов равна ${(depositSum * ((1 + DEPOSIT_PERCENT / (100 * 12)) ** DEPOSIT_MONTH) - depositSum).toFixed(2)}`)

