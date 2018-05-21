console.log('test JS');

$(document).ready(readyNow);

function readyNow() {
    console.log('JQ ready');

$('#addButton').on('click', buttonAdd);

}/////end ready now

let counter = 0;

function buttonAdd() {
    console.log('in buttonAdd');
    $('#goHere').append('<div id="divColor"><p>' + (counter + 1) + '</p></div>')
    count();
    swap();
    deleteDiv();
} // end buttonAdd function

function count() {
    counter++;
    $('#numberClicks').empty();
    $('#numberClicks').append(`<p>` + counter + `</p>`)
} // end count function

function swap() {
    console.log('in Swap');
    $('#goHere').append('<button type="button" id="swap">swap</button>')
} // end swap function

function deleteDiv() {
    console.log('in delete');
    $('#goHere').append('<button type="button" id="delete">delete</button>')
}// end delete function

