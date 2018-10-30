function buttonClick() {

    var input = document.getElementById('input');
    alert(input.value);

}

function buttonClickReplace() {

    var input = document.getElementById('replace');
    input.value = 'Ой, я поменял свой текст!';

}
function buttonClickChangeImage() {

    var elem = document.getElementById('image');
    elem.src = '2.jpg';

}

function buttonClickInputAlert(elem){

   alert(elem.value);

}
function buttonClickInputChanges(elem){

   elem.value = 'Ой, я поменял текст!';

}
function buttonClickInputChangesAgain(elem){

   elem.value = 'Ой, я поменял текст снова!';

}

function func(elem) {
    elem.value = 'Ку-ку!'

}

function onClickDisable(elem) {

    elem.disabled = true;
    elem.value = 'О, теперь меня больше не нажать!';

}

function onMouseOverChangeImage(elem) {

    elem.src = "2.jpg";

}
function  onMouseOutChangeImage(elem){

    elem.src = "1.jpg";


}

function buttonClickChangeColor() {

    var input = document.getElementById('inp');
    input.style.color = 'red';

}

function hide() {
var elem = document.getElementById('hide');
elem.style.display = 'none';
}
function show() {
var elem = document.getElementById('hide');
elem.style.display = 'inline';
}

function buttonClickChangeShapeAndColor() {

    var input = document.getElementById('bigred')
    input.style.color = 'red';
    input.value = 'Ой, я поменял свой текст и css!';
    input.style.borderRadius = '10px';
    input.style.height = '55px';
    input.style.width = '305px';

}

function onClickDisableNew() {

    var input = document.getElementById('enable');
    var inputEnableButton = document.getElementById('disable');

    input.disabled = true;
    input.value = 'О, теперь меня больше не нажать';
    inputEnableButton.className = 'visible';

}

function onClickEnable() {

    var input = document.getElementById('enable');
    var inputEnableButton = document.getElementById('disable');

    input.disabled = false;
    input.value = 'О, меня снова можно нажимать!';
    inputEnableButton.className = 'invisible';

}

function clickCount(elem) {


    elem.value = Number(elem.value)+1;

}

function buttonClickChangeFloat() {



}

