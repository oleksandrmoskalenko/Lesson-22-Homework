"use strict"

let $btn1 = document.createElement('button'),
    $btn2 = document.createElement('button'),
    $btn3 = document.createElement('button'),
    $btn4 = document.createElement('button'),
    $btn5 = document.createElement('button'),
    $btn6 = document.createElement('button'),
    $btn7 = document.createElement('button'),
    $btn8 = document.createElement('button'),
    $btn91 = document.createElement('button'),
    $btn92 = document.createElement('button'),
    $btn10 = document.createElement('button')
$btn1.innerText = 'Task 1', $btn2.innerText = 'Task 2', $btn3.innerText = 'Task 3', $btn4.innerText = 'Task 4', $btn5.innerText = 'Task 5', $btn6.innerText = 'Task 6', $btn7.innerText = 'Task 7', $btn8.innerText = 'Task 8', $btn91.innerText = 'Task 9', $btn92.innerText = 'Task 9 (with cycles)', $btn10.innerText = 'Task 10'
$btn1.style = "width: 120px; height: 40px; font-size: 16px; text-transform: uppercase; margin: 15px;"
$btn2.style = "width: 120px; height: 40px; font-size: 16px; text-transform: uppercase; margin: 15px;"
$btn3.style = "width: 120px; height: 40px; font-size: 16px; text-transform: uppercase; margin: 15px;"
$btn4.style = "width: 120px; height: 40px; font-size: 16px; text-transform: uppercase; margin: 15px;"
$btn5.style = "width: 120px; height: 40px; font-size: 16px; text-transform: uppercase; margin: 15px;"
$btn6.style = "width: 120px; height: 40px; font-size: 16px; text-transform: uppercase; margin: 15px;"
$btn7.style = "width: 120px; height: 40px; font-size: 16px; text-transform: uppercase; margin: 15px;"
$btn8.style = "width: 120px; height: 40px; font-size: 16px; text-transform: uppercase; margin: 15px;"
$btn91.style = "width: 120px; height: 40px; font-size: 16px; text-transform: uppercase; margin: 15px;"
$btn92.style = "width: 120px; height: 40px; font-size: 14px; text-transform: uppercase; margin: 15px;"
$btn10.style = "width: 120px; height: 40px; font-size: 16px; text-transform: uppercase; margin: 15px;"
document.body.append($btn1, $btn2, $btn3, $btn4, $btn5, $btn6, $btn7, $btn8, $btn91, $btn92, $btn10)

//Task 1
$btn1.addEventListener('click', () => {
    let yourName = prompt('What is your name?', '');
    alert(`Hello, ${yourName}`);
})

//Task 2
$btn2.addEventListener('click', () => {
    const CURRENT_YEAR = 2020;
    let age = prompt('Write your date of birth?', '');
    alert(`Your age is ${CURRENT_YEAR - age}`);
})

//Task 3
$btn3.addEventListener('click', () => {
    let squareSide = prompt('Write the side length of the square', '');
    alert(`The area of the square is ${squareSide ** 2}`);
})


//Task 4
$btn4.addEventListener('click', () => {
    let radius = prompt('Write the radius length', '');
    alert(`The area of circle with radius length ${radius} is ${Math.PI * (radius ** 2)}`);
})

//Task 5
$btn5.addEventListener('click', () => {
    let distance = prompt('What is the distance between cities in km?', ''), time = prompt('how many hours do you need to cover it?', '');
    alert(`You need to move with ${distance / time} km/h speed`);
})

//Task 6
$btn6.addEventListener('click', () => {
    const CONVERTION_INDEX = 0.92;
    let buckAmount = prompt('Write your amount of dollars', '');
    alert(`Your amount of money in euros is ${buckAmount * 0.92} euros`);
})

//Task 7
$btn7.addEventListener('click', () => {
    const FILESIZE = 820;
    let flashDriveSize = prompt('Write is the size of your file in GB?', '');
    flashDriveSize *= 1024;
    alert(`You could download ${(flashDriveSize - flashDriveSize % FILESIZE) / FILESIZE} files 820MB size on this flash drive of yours`)
})


//Task 8
$btn8.addEventListener('click', () => {
    let walletMoney = prompt('How much money do you have in your wallet?', ''),
        chokoPrice = prompt('What is the price of 1 chokolate bar?', '');
    alert(`You could by ${(walletMoney - walletMoney % chokoPrice) / chokoPrice} chokolate bars on your money. Besides, your change is ${walletMoney % chokoPrice}`)
})

//Task 9
$btn91.addEventListener('click', () => {
    let number0 = prompt('Write three-digit number', '');
    function numReverse(num) {
        let a = (num - num % 100) / 100,
            b = (num - 100 * a);
        b = (b - b % 10) / 10;
        let c = num - 100 * a - 10 * b;
        return 100 * c + 10 * b + a;
    }
    alert(`The result is ${numReverse(number0)}`);
})

//Task 9 (cycles)
$btn92.addEventListener('click', () => {
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
})

//Task 10
$btn10.addEventListener('click', () => {
    const DEPOSIT_MONTH = 2, DEPOSIT_PERCENT = 5;
    let depositSum = prompt('Введите сумму вклада', '');
    alert(`Если это простые проценты, то сумма начисленых процентов равна ${(depositSum * (DEPOSIT_MONTH / 12) * (DEPOSIT_PERCENT / 100)).toFixed(2)}. Если это сложные проценты, то сумма начисленых процентов равна ${(depositSum * ((1 + DEPOSIT_PERCENT / (100 * 12)) ** DEPOSIT_MONTH) - depositSum).toFixed(2)}`)
})