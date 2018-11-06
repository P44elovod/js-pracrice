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

//     #5 Создайте простой слайдер:
//

// function startSlider() {
//     window.timerID = setInterval(Slide, 500);
// }
//
// window.number = 1;
//
// function Slide() {
//
//     var elem = document.getElementById('img');
//     if (window.number == 6) {
//         window.number = 0;
//     }
//     window.number++;
//     elem.src = 'img/' + window.number + '.png';
//
// }

//     #6 Создайте карусель:
//
// function startCarusel() {
//
//     window.timerID = setInterval(imgMove, 500);
//     document.getElementById('#startCar').disabled = true;
// }
//
// function imgMove() {
//     var image1 = document.getElementById('img1');
//     var image2 = document.getElementById('img2');
//     var image3 = document.getElementById('img3');
//
//     var tmp = image1.src;
//     image1.src = image2.src;
//     image2.src = image3.src;
//     image3.src = tmp;
//
// }

//    #7 Создайте карусель:
//
// function startCaruselNew(){
//     window.timerID = setInterval(imgMoveNew, 500);
//     document.getElementById('#startCar_6').disabled = true;
//     document.getElementById('#stopCar_6').disabled = false;
//
// }
//
// function stopCaruselNew() {
// clearInterval(window.timerID);
//     document.getElementById('#startCar_6').disabled = false;
//     document.getElementById('#stopCar_6').disabled = true;
//
// }
//
// function imgMoveNew() {
//     var image1 = document.getElementById('img1_6');
//     var image2 = document.getElementById('img2_6');
//     var image3 = document.getElementById('img3_6');
//     var image4 = document.getElementById('img4_6');
//     var image5 = document.getElementById('img5_6');
//     var image6 = document.getElementById('img6_6');
//
//     var tmp = image1.src;
//     image1.src = image2.src;
//     image2.src = image3.src;
//     image3.src = image4.src;
//     image4.src = image5.src;
//     image5.src = image6.src;
//     image6.src = tmp;
//
// }

// Создайте отсчет до полуночи:


function startCountDownTimer(){

    window.timerID = window.setInterval(timer, 1000);

}

function timer() {

    var content = document.getElementsByTagName('td');
    var now = new Date();
    var target = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

    var diff = (target-now)/1000;
    var difHours = addZero(Math.floor((diff)/(60*60)));
    var difMinutes = addZero(Math.floor((diff-difHours*60*60)/60));
    var difSeconds = addZero(Math.floor(diff%60));



    content[0].innerHTML = difHours;
    content[1].innerHTML = difMinutes;
    content[2].innerHTML = difSeconds;



}

function addZero(num) {

    if (num <= 9) {

        num = '0'+num;

    }
    return num;
}