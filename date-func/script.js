// Задачи на даты в JavaScript
// Работа с new Date
// Для решения задач данного блока вам понадобятся следующие методы объекта Date: getFullYear, getMonth, getDate, getHours, getMinutes, getSeconds.
//
//     #1Выведите на экран текущий день. Показать решение.
//
console.log(new Date().getDate());
//     #2Выведите на экран текущий месяц. Показать решение.
//
//     #3Выведите на экран текущий год. Показать решение.
//
//     #4Выведите на экран текущую дату-время в формате '12:59:59 31.12.2014'.
//
//     Для решения этой задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014). Показать решение.
//
//     Работа с getDay
// Для решения задач данного блока вам понадобятся следующие методы: getDay.
//
//     #5Выведите на экран номер текущего дня недели. Показать решение.
//
//     #6Выведите на экран текущий день недели (словом, по-русски).
//     Создайте для этого вспомогательную функцию showDay, которая параметром принимает число, а возвращает день недели по-русски. Показать решение.
//
//     #7Узнайте, какой был 7-го января 2015 года. Показать решение.
//
//     Работа с getTime
// Для решения задач данного блока вам понадобятся следующие методы: getTime.
//
//     #8Выведите на экран количество минут с 1-го января 1970 года до настоящего момента времени. Показать решение.
//
//     Работа с Date.parse
// Для решения задач данного блока вам понадобятся следующие методы: Date.parse.
//
//     #9Выведите на экран количество часов, прошедшее между 1 марта 1988 года и текущим моментом с помощью Date.parse. Показать решение.
//
//     Разность между датами
//
// #10 Выведите на экран количество секунд с начала дня до настоящего момента времени. Показать решение.
//
//     Задачи
//
// #11 Выведите на экран количество секунд, которое осталось до конца дня.
//
// #12    Создайте инпут, в который пользователь вводит дату своего рождения в формате '2014-12-31' (с конкретным годом). По потери фокуса выведите под инпутом сколько дней осталось до его дня рождения.
//     Воспользуйтесь методом Date.parse.