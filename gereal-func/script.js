//Дана строка. Сделайте заглавным первый символ этой строки не используя цикл.
//Найдите два решения. Показать решение.
//
//str.slice(0, 1).toUpperCase()+str.slice(1);
//str.substring(0, 1).toUpperCase()+str.substring(1);
//Дана строка, например, '123456'.
//Переверните эту строку (сделайте из нее '654321') не используя цикл. Показать решение.
//
//'123456'.split('').reverse().join('');
//Дано число, например, 3751. Отсортируйте цифры в нем (сделайте из него 1357) не используя цикл.
//Показать решение.
//String(3751).split('').sort().join('');
//num+''.split('').sort().join(''));
// Проверьте, что строка начинается на http://. Показать решение.

//var str = 'http://www.carid.com/2015-ford-f-150-flo';
//
//if (str.slice(0,7) == 'http://'){
//console.log('true');
//}
// Проверьте, что строка заканчивается на .html. Показать решение.
//
//var str = 'http://www.carid.com/2015-ford-f-150-flo.html';
//if (str.lastIndexOf('.html') != -1){
//
//console.log('true');
//
//}