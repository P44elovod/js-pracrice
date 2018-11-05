function onClickContentChange() {
    var content = document.getElementById('#cont');
    content.innerHTML = '!!!';
}

function onClickTagAndContentChange() {
    var content = document.getElementById('#cont_2');
    content.outerHTML = '<h3> Абзац превратился в h3! </h3>';
}

function onClickOnlyTagChange() {
    var content = document.getElementById('#cont_3');
    content.outerHTML = '<h3>' + content.innerHTML + '</h3>';
}

function calculate() {
    var first = document.getElementById('#input_4');
    var second = document.getElementById('#input_4_1');
    var result = document.getElementById('#result_4')

    result.innerHTML = Number(first.value) + Number(second.value);
}

// function onClickContentChangeByTag() {
//
//     var content = document.getElementsByTagName('p');
//     for (var i = 0; i < content.length; i++) {
//
//         content[i].innerHTML = 'Ку-ку!';
//
//     }
//
// }

// function onClickContentChangeByClassName() {
//
//     var content = document.getElementsByClassName('www');
//     for (var i = 0; i < content.length; i++ ) {
//
//         content[i].innerHTML = i+1;
//
//     }
//
//
// }

// function onClickContentChangeByQuSelAll() {
//
//     var content = document.querySelectorAll('p.www');
//     for (var i = 0; i < content.length; i++ ) {
//
//         content[i].innerHTML = i+1;
//
//     }
//
//
// }

//#8
// function onClickShowClass(){
//
//     var value = document.getElementById('#class');
//     alert(value.getAttribute('class'));
//
// }

//#9
// function onClickShowClass(){
//
//     var value = document.getElementById('#class_9');
//     alert(value.getAttribute('class'));
//
// }
//
// function onClickDeleteClass(){
//     var value = document.getElementById('#class_9');
// value.removeAttribute('class');
// alert('Класс изменен! Нажмите на первую кнопку чтобы проверить это!')
//
//
// }

//#10
// function onClickShowClass(){
//
//     var value = document.getElementById('#class_10');
//     alert(value.getAttribute('class'));
//
// }
// function onClickNewClass(){
//     var value = document.getElementById('#class_10');
// value.setAttribute('class' , 'new-class');
// alert('Класс изменен! Нажмите на первую кнопку чтобы проверить это!')
//

//11
// }
// function changeContent(content) {
//     var input = document.getElementById('#text');
//     input.innerHTML = content.value;
// }

//#12
// function onClickShowHref() {
//     var content = document.getElementsByTagName('a');
//     for (var i = 0; i < content.length; i++ ){
// content[i].innerHTML = content[i].innerHTML + '(' + content[i].getAttribute('href') + ')';
//
//     }
// }

//#13
// function onClickChangeContentAndDisableButton() {
//
//     var content = document.getElementById('#content_12');
//     var submitProp = document.getElementById('#input_12')
//
//     content.innerHTML = 'Привет, мир!';
//     submitProp.disabled = 'true';
//     submitProp.value = 'О, на меня больше нельзя нажать!';
//
//
// }

//#14
// function onClickContentChangeOnNumber() {
//
//     var content = document.getElementsByClassName('task14');
//     for (var i = 0; i < content.length; i++ ) {
//
//         content[i].innerHTML = i;
//     }
//     }

//#15
// function onClickContentAddNumber() {
//     var content = document.getElementsByClassName('task15');
//     for (var i = 0; i < content.length; i++ ) {
//
//         content[i].innerHTML = i+'. '+ content[i].innerHTML;
//     }
//
//
// }