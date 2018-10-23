// Дана строка. Сделайте заглавным первый символ каждого слова этой строки.
// Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.
//

// var input = 'aaa bbb aaa ggg'
//
// function ucFirst(str) {
//     return str.slice(0, 1).toUpperCase() + str.slice(1);
// }
//
// var strArr = input.split(' ');
// var output = [];
//
// for (var i = 0; i < strArr.length; i++){
//
//     output.push(ucFirst(strArr[i]));
//
// }
//
// var outputStr = output.join(' ');

//     Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.
//
// var arr =  'var_text_hello'.split('_');
// var buff = [];
// for (var i = 0; i < arr.length; i++) {
//     var temp = arr[i];
//
//     if (i != 0) {
//
//         temp = temp.slice(0,1).toUpperCase() + temp.slice(1);
//
//     }
//     buff.push(temp)
// }
//
// var finalStr = buff.join('');

//     Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет.
//     Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false. Показать решение.
//
// function inArray(sample, arr) {
//     var flag = false;
//     for (var i = 0; i < arr.length; i++) {
//
//         if (arr[i] === sample){
//             flag = true;
//         }
//
//     }
//
//     return flag;
// }


//     Дана строка, например, '123456'. Сделайте из нее '214365'.
// var str = '123456';
// var arr = str.split('');
// var result = [];
// if (arr.length % 2 != 0) {
// for (var i = 1; i < arr.length; i += 2) {
//
//     result.push(arr[i], arr[i - 1]);
//
//
// }
//
//     result.push(arr[arr.length - 1]);
// }else  {
//
//     for (var i = 1; i < arr.length; i += 2) {
//
//         result.push(arr[i], arr[i - 1]);
//
//
//     }
//
// }
