//Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10.
//Если это так - пусть функция возвращает true, если не так - false. Показать решение.
//function isNumberInRange(num) {
//
//var flag = false;
//
//if (num > 0 && num < 10){
//
//flag = true;
//
//}
//
//return flag;
//
//}

// Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти.
// Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи. Показать решение.
//var newArr = [];
//for (var i = 0; i < arr.length; i++){
//
//if (isNumberInRange(arr[i]) == true) {
//
//newArr.push(arr[i]);
//
//}
//
//}

// Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.
// Показать решение.
//
//function getDigitsSum(num) {
//var summ = 0;
//var arr = String(num).split('')
//
//for (var i = 0; i < arr.length; i++){
//
//summ += Number(arr[i]);
//
//}
//
//return summ;
//
//}


// Найдите все года от 1 до 2018, сумма цифр которых равна 13.
// Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи. Показать решение.
//
//var arr = [];
//for (var i = 1; i <= 2018; i++){
//
//if (getDigitsSum(i) == 13) {
//
//arr.push(i);
//
//}
//
//}

// Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет.
// Если четное - пусть функция возвращает true, если нечетное - false. Показать решение.
//
//function isEven(num) {
//
//var flag = false;
//
//if (num % 2 == 0) {
//
//flag = true;
//
//}
//
//return flag;
//}

// Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел.
// Для этого используйте вспомогательную функцию isEven из предыдущей задачи. Показать решение.
//
//var arr = [3, 5, 4, 8];
//var newArr = [];
//
//for (var i = 0; i< arr.length; i++) {
//
//if (isEven(arr[i]) == true) {
//
//newArr.push(arr[i]);
//
//}
//
//}


// Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей
//(чисел, на которое делится данное число).
// Показать решение.

//function getDivisors(num) {
//var result = [];
//
//for (var i = 1; i <= num; i++) {
//
//if (num % i == 0) {
//console.log(i);
//result.push(i);
//
//}
//
//}
//
//return result;
//}



