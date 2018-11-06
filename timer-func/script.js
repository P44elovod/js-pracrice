// #1 Создайте отсчет от 0 до бесконечности:
//

// function startTimer() {
//     setInterval(timer, 1000);
// }
// function timer() {
//
//     var wrapper = document.querySelector('.timer');
//     console.log(wrapper);
//     wrapper.innerHTML = parseInt(wrapper.innerHTML) + 1;
//
// }

//    #2 Создайте отсчет с кнопкой остановки:
//
// function startTimer() {
//     window.timerID = setInterval(timer, 1000);
//     document.getElementById('#start').disabled = true;
//     document.getElementById('#stop').disabled = false;
// }
//
// function stopTimer() {
//     clearInterval(window.timerID);
//     document.getElementById('#start').disabled = false;
//     document.getElementById('#stop').disabled = true;
// }
//
// function timer() {
//
//     var wrapper = document.querySelector('.timer_2');
//     console.log(wrapper);
//     wrapper.innerHTML = parseInt(wrapper.innerHTML) + 1;
//
// }
//
//     #3 Создайте тикающие часики:
//

// function startClock() {
//
//     setInterval(showClock, 1000);
//     console.log('1');
//
// }
//
// function showClock() {
//     var clock = document.querySelector('.clock');
//     var date = new Date();
//     clock.innerHTML = addZero(date.getHours()) +':'+addZero(date.getMinutes())+':'+addZero(date.getSeconds());
// }
//
// function addZero(num) {
//
//     if (num <= 9) {
//
//         num = '0'+num;
//
//     }
//     return num;
// }
//
//     #4 Создайте таймер обратного отсчета:
//
// function startCountDown() {
//
//     window.timerID = setInterval(timer, 500);
//
// }
//
// function timer() {
//
//     var wrapper = document.querySelector('.countDown');
//     document.getElementById('#startButton').disabled = true;
//
//     wrapper.innerHTML = wrapper.innerHTML - 1;
//     if (parseInt(wrapper.innerHTML) == 0) {
//         clearInterval(window.timerID);
//         wrapper.innerHTML = wrapper.innerHTML + '<br>' + 'Обратный отсчет завершен.';
//
//
//     }
//
// }

//

//
//     #5 Создайте простой слайдер:
//
var imgArr = ['1.png','2.png','3.png','4.png','5.png','6.png','7.png'];
var elem = document.querySelector('img');

function imgSlide() {
    for (var i = 0; i < imgArr.length; i++) {

elem.src = 'img/'+imgArr[i];

    }
}
//
//
//     Создайте карусель:
//
//
//
//     Создайте карусель:
//
// Создайте отсчет до полуночи: