var isFetching = true;
var isLoading = false;
var int = 42;
var float = 4.2;
var num = 3e10;
var message = 'Hello TS';
var numberArray = [1, 1, 2, 3, 5, 8, 13];
var numberArray2 = [1, 1, 2, 3, 5, 8, 13];
var words = ['Hello', 'TS'];
//Tuple(кортеж) - Tuple creates an array with other data types
var contact = ['Vadym', 12345];
//Any
var variable = 42;
//...
variable = 'New String';
variable = [];
//FUNCTIONS
// Void means that the function does not return
function sayMyName(name) {
    console.log(name);
}
sayMyName('Vad');
//Never - коли функція видає помилку і ніколи не зупиняється або коли вона постійно щось робить
function throwError(msg) {
    throw new Error('msg');
}
var login = 'admin';
var id1 = 123;
var id2 = '123';
