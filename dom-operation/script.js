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

