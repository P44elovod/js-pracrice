// Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл. Показать решение.
//
// var sample = [1, 3 ,5 , 7, 10];
//
// function elemOutput(arr) {
//    document.writeln(arr.shift());
//
//    if (arr.length > 0){
//        elemOutput(arr);
//    }
//
// }
// elemOutput(sample);
//     Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).

function reduceNum(num) {
var sum = getDigitsSum(num);
    if (sum >= 10 ){
        return reduceNum(sum);
    }else {
        return sum;
    }

}


function getDigitsSum(num) {

return getSum(getDigits(num));



}

function getDigits(num) {

    return String(num).split('');

}

function getSum(arr) {

    var sum = 0;

    for (var i = 0; i < arr.length; i++){

    sum += Number(arr[i]);

    }
return sum;
}

console.log(reduceNum(99));