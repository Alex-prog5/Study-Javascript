// FUNCTIONS - Exercise 1
// Напишите функцию min, принимающую два аргумента,и возвращающую минимальный из них;


// 1st variant -  Напишем функцию с помощью условного оператора if...else
function minArg (a, b) {
  if (a < b){
    return a;
  } else {
    return b;
  }
}
console.log(minArg(20, 40)); // проверка
console.log(minArg(-35, 0)); // проверка


// 2nd variant - Тернарная операция - это тройная операция, краткая запись if...else
function minArg2 (a, b) {
return a < b ? a : b;
}
console.log(minArg2(2, 10000)); // проверка



// Exercise 2
// Напиши функцию-счётчик, которая считает свои вызовы и возвращает их текущее число.
function makeCounter () {
  var currentCount = 0;

    return function(){
    currentCount ++;
    return currentCount;
  };
}

var counter = makeCounter(); // запускаем makeCounter

console.log(counter());
console.log(counter());
console.log(counter());

// Мы получили счетчик counter.
// Количество вызовов сохраняеться в переменной currentCount
