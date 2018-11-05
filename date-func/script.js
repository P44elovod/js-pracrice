// Задачи на даты в JavaScript
// Работа с new Date
// Для решения задач данного блока вам понадобятся следующие методы объекта Date: getFullYear, getMonth, getDate, getHours, getMinutes, getSeconds.
//
//     #1Выведите на экран текущий день. Показать решение.
//
// console.log(new Date().getDate());
//     #2Выведите на экран текущий месяц. Показать решение.
// console.log(new Date().getMonth())
//     #3Выведите на экран текущий год. Показать решение.
//
// console.log(new Date().getFullYear());
//     #4Выведите на экран текущую дату-время в формате '12:59:59 31.12.2014'.
//
// var date = new Date();
// console.log(addZero(date.getHours())+':'+addZero(date.getMinutes())+':'+addZero(date.getSeconds())+' '+addZero(date.getDate())+'.'+addZero(date.getMonth())+'.'+addZero(date.getFullYear()));
//
// function addZero(num) {
//
//     if (num<=9){
//
//         num = '0' + num;
//
//     }
//     return num;
//
// }


//     Для решения этой задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014). Показать решение.
//
// function addZero(num) {
//
//     if (num<=9){
//
//         num = '0' + num;
//
//     }
//     return num;
//
// }
//     Работа с getDay
// Для решения задач данного блока вам понадобятся следующие методы: getDay.
//
//     #5Выведите на экран номер текущего дня недели. Показать решение.
//
// console.log(new Date().getDay());
//     #6Выведите на экран текущий день недели (словом, по-русски).
//     Создайте для этого вспомогательную функцию showDay, которая параметром принимает число, а возвращает день недели по-русски. Показать решение.
//
// console.log(showDay(new Date().getDay()));
// function showDay(num) {
// var days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб' , 'вс'];
// return days[Number(num)-1];
// }
//     #7Узнайте, какой был 7-го января 2015 года. Показать решение.
//
// console.log(new Date('01-07-2015').getDay());
//     Работа с getTime
// Для решения задач данного блока вам понадобятся следующие методы: getTime.
//
//     #8Выведите на экран количество минут с 1-го января 1970 года до настоящего момента времени. Показать решение.
//
// console.log(Math.floor(new Date().getTime()/1000/60));
//     Работа с Date.parse
// Для решения задач данного блока вам понадобятся следующие методы: Date.parse.
//
//     #9Выведите на экран количество часов, прошедшее между 1 марта 1988 года и текущим моментом с помощью Date.parse. Показать решение.
//
// console.log(Math.floor((new Date().getTime() - Date.parse('01-03-1988'))/1000/60/60));
//     Разность между датами
//
// #10 Выведите на экран количество секунд с начала дня до настоящего момента времени. Показать решение.
//
// var start = new Date('11-05-2018');
//
// var now = new Date();
// var dif = (now - start)/1000;
// console.log(Math.floor(dif));
//     Задачи
//
// #11 Выведите на экран количество секунд, которое осталось до конца дня.
// //
// var end = new Date('11-06-2018');
// var now = new Date();
// var dif = (end - now)/1000;
// console.log(Math.floor(dif));
// #12    Создайте инпут, в который пользователь вводит дату своего рождения в формате '2014-12-31' (с конкретным годом). По потери фокуса выведите под инпутом сколько дней осталось до его дня рождения.
//     Воспользуйтесь методом Date.parse.
// function func(value) {
//     var content = document.getElementsByClassName('inputContainer');
//     var now = new Date();
//     var input = value.value.split('-');
//     var date = input[1]+'-'+input[2]+'-'+input[0];
//     var dif = Math.abs((now.getTime() - Date.parse(date))/(1000 * 60 * 60 * 24));
//     content[0].innerHTML = content[0].innerHTML +'<br>'+ Math.floor(dif);
//
// }