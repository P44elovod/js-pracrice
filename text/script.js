/*
Работа с регистром символов
Для решения задач данного блока вам понадобятся следующие методы: toUpperCase, toLowerCase.
    Дана строка 'js'. Сделайте из нее строку 'JS'. Показать решение.


'js'.toUpperCase();
    Дана строка 'JS'. Сделайте из нее строку 'js'. Показать решение.

'JS'.toLowerCase();
    Работа с length, substr, substring, slice. Работа с indexOf
Для решения задач данного блока вам понадобятся следующие методы: length, substr, substring, slice, indexOf.
    Дана строка 'я учу javascript!'. Найдите количество символов в этой строке. Показать решение.

'я учу javascript!'.length;
    Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice). Показать решение.

'я учу javascript!'.substr(2,3);
'я учу javascript!'.substring(6,16);
'я учу javascript!'.slice(2,5);
    Дана строка 'я учу javascript!'. Найдите п
    озицию подстроки 'учу'. Показать решение.

'я учу javascript!'.indexOf('учу');
    Дана переменная str, в которой хранится какой-либо текст. Реализуйте обрезание длинного текста по следующему принципу: если количество символов
    этого текста больше заданного в переменной n, то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'.
    В противном случае в переменную result запишем содержимое переменной str. Показать решение.

function stringTrim(str, n) {
    var result;
    if (str.length > n ){
        result = str.substr(0, n)+'...';
    } else {
        result = str;
    }
    return result;
}

    Работа с replace
Для решения задач данного блока вам понадобятся следующие методы: replace.
    Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены. Показать решение.

'Я-учу-javascript!'.replace(/-/g, '!');

    Работа с split
Для решения задач данного блока вам понадобятся следующие методы: split.
    Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива. Показать решение.

var arr = 'я учу javascript!'.split(' ');
    Дана строка 'я учу javascript!'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива. Показать решение.

var arr = 'я учу javascript!'.split('');

    В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'. Показать решение.

var  date = '2025-12-31';
var buff = date.split('-');
date = buff[2] + '.' + buff[1] + '.' + buff[0];
document.writeln(date);
    Работа с join
Для решения задач данного блока вам понадобятся следующие методы: join.
    Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'. Показать решение.

var arr = ['я', 'учу', 'javascript', '!'];
    document.writeln(arr.join('+'));


    Задачи
Преобразуйте первую букву строки в верхний регистр. Показать решение.

'я учу javascript!'.slice(0, 1).toUpperCase() + str.slice(1));
    Преобразуйте первую букву каждого слова строки в верхний регистр. Показать решение.
var arr = 'я учу javascript!'.split(' ');
var str='';
for (var i = 0; i<arr.length; i++){
    str += arr[i].slice(0, 1).toUpperCase()+arr[i].slice(1)+' ';

}
document.writeln(str);
Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками. Показать решение.
function textMod(str) {

    var arr = str.split('_');
    var newStr='';
    for (var i = 0; i < arr.length; i++) {
        if (i==0) {
            newStr += arr[i];
        } else {
            newStr += arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
        }

    }
    return newStr;
}
*/
