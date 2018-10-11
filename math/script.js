//Работа с %
// Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b. Показать решение.
//var a = 10;
//var b = 3
//var c = a%b;

// Даны переменные a и b. Проверьте, что a делится без остатка на b. Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и остаток от деления. Показать решение.
//
//var a = 9;
//var b = 3;
//if (a%b == 0) {
//document.write('Делится');
//} else {
//document.write('Делится с остатком' + a%b);
//
//}
//Работа со степенью и корнем
//Для решения задач данного блока вам понадобятся следующие методы: Math.pow, Math.sqrt.
// Возведите 2 в 10 степень. Результат запишите в переменную st. Показать решение.
//var st = Math.pow(2, 10);

// Найдите квадратный корень из 245. Показать решение.
//Math.sqrt(245);
// Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for. Показать решение.
//var arr = [4, 2, 5, 19, 13, 0, 10];
//var sum = 0;
//for (var i = 0; i<arr.length; i++){
//
//sum += Math.pow(arr[i],3)
//
//}
//document.write(Math.sqrt(sum));

//Работа с функциями округления
//Для решения задач данного блока вам понадобятся следующие функции: Math.round, Math.ceil, Math.floor, toFixed, toPrecision.
// Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых. Показать решение.
//Math.sqrt(379).toFixed();
//Math.sqrt(379).toFixed(1);
//Math.sqrt(379).toFixed(2);
// Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'. Показать решение.
//var obj = {'floor':Math.ceil(Math.sqrt(587)), 'ceil': Math.floor(Math.sqrt(587))};

//Нахождение максимального и минимального числа
//Для решения задач данного блока вам понадобятся следующие методы: Math.max, Math.min.
// Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число. Показать решение.
//Math.min(4, -2, 5, 19, -130, 0, 10);
//Math.max(4, -2, 5, 19, -130, 0, 10);
//Работа с рандомом
//Для решения задач данного блока вам понадобятся следующие методы: Math.random.
// Выведите на экран случайное целое число от 1 до 100. Показать решение.
//
// Заполните массив 10-ю случайными целыми числами. (Подсказка: нужно воспользоваться циклами for или while). Показать решение.
//
//Работа с модулем
//Для решения задач данного блока вам понадобятся следующие методы: Math.abs.
// Даны переменные a и b. Найдите найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b. Показать решение.
//
// Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c. Сделайте так, чтобы в любом случае в переменную c записалось положительное значение. Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1. Показать решение.
//
//Задачи
// Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79. Показать решение.
//
// Напишите скрипт, который будет находить факториал числа. Факториал (обозначается !) - это произведение (умножение) всех целых чисел, меньше данного, и его самого. Например, 4! = 1*2*3*4. Показать решение.