console.log('test JS');

$(document).ready(readyNow);
$(document).on('click', '.swap', swap);
$(document).on('click', '.delete', deleteDiv);

function readyNow() {
    console.log('JQ ready');

$('.addButton').on('click', buttonAdd);
swap();
deleteDiv();
}/////end ready now

let counter = 0;

function buttonAdd() {
    console.log('in buttonAdd');
    $('#goHere').append('<div class="divColor"><p>' + (counter + 1) + '</p>' + '<p><button type="button" class="swap">swap</button>' + '<button type="button" class="delete">delete</button> </div>');
    count();
    deleteDiv();
} // end buttonAdd function

function count() {
    counter++;
    $('#numberClicks').empty();
    $('#numberClicks').append(`<p>` + counter + `</p>`)
} // end count function

function swap() {
    console.log('in Swap');
    // $("#swap").click(function () {
    // $('#swap').on('click', function() {
    $('.divColor').toggleClass("divColorYellow");
} // end swap function

function deleteDiv() {
    console.log('in delete');
    $(this).closest("div").remove();
}// end delete function

