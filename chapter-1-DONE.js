// Задание к уроку 1.1.2

// Вывести в консоль:
// – своё имя в строчном виде;
// – свой возраст в числовом виде;

console.log('Alex');
var number = 25;
console.log(number);

// Задание к уроку 1.1.3

// – Добавить комменарий перед первым выводом в консоль;
// – Закоментировать все выводы в консоль, кроме первого.*/

console.log('Я умею комментировать строчки кода в JS'); //добавляю комментарий
//console.log('Эта строка лишняя');
/*console.log('И эта'); */
//console.log('Да, убери же ты их наконец!!!');

// Задание к Уроку 1.1.4.
// – Вывести в консоль первые 5 типов данных, по очереди. Используйте конструкцию*/

var var1 = 5; //integer
console.log('5', typeof var1);
var var2 = "Это у нас строка"; //string
console.log('Это у нас строка', typeof var2);
var var3 = true;  // boolean
console.log('true', typeof var3);
var var4 = null; // null variable
console.log('nul', typeof var4);
var var5 = undefined; // //отсутствие значения
console.log('undefined', typeof var5);

// '/*Значение*/' заменяем на необходимое значение определенного типа данных.

// Задание к уроку 1.1.5
//
// Выполните арифметические операции в консоли:
// – сложите ваш возраст с текущим числом месяца;
console.log(25+3);
// – вычтите из текущего года год вашего рождения;
console.log(2020-1995);
// – умножьте число Пи на 100;
console.log(Math.PI * 100);
// – разделите 10 на 3.
console.log(10/3);

// Задание к уроку 1.1.6
//
// – вывести в консоль конкатенацию строк ‘Hello’ и ‘Smartians’, без учета пространства между ними.
// – вывести в консоль конкатенацию строк ‘Hello’ и ‘Smartians’, с учетом пространства между ними.
console.log('Hello' + 'Smartianins');
console.log('Hello ' + 'Smatrianins');

// Задание к уроку 1.1.7
//
// – посчитайте длину строки 'Share your knowledge', результат выведите в консоль.
console.log('Share your knowledge'.length);

// Задание к уроку 1.1.8
// –– приведите строку ‘My name is’ + ‘Your name’ к UpperCase (все буквы большие);
console.log('My name is '.toUpperCase() + 'Alex'.toUpperCase());
// –– учимся гуглить, на сайте https://developer.mozilla.org/ находим метод объекта String,
// который удаляет лишние пробелы из строки ‘     I love study JS on Smartians platform    ’.
console.log('     I love study JS on Smartians platform    '.trim());

// Задание к уроку 1.1.9
// –– вывести на экран случайное число от 0 до 200
console.log(Math.random()*200);
// –– найдите подходящий метод у объекта Math, который вернет наименьшее целое число, большее или равное полученному выше числу.
console.log(Math.ceil(Math.random()*200));
// –– с помощью совйства у объекта Number, проверте что ваше полученное число –– целое.
console.log(Number.isInteger(Math.ceil(Math.random()*200)));


// Задание к уроку 1.2.2.
// –– Объявите переменную myFood со значением 'sushi';
var myFood = 'sushi';
// –– Объявите переменную numOfRollSlices со значением 6;
var numOfRollSlices = 6;
// –– Полученные значения выведите в консоль.
console.log(myFood);
console.log(numOfRollSlices);

// Задание к уроку 1.2.3.
// –– Объявите переменную let с именем iKnowJs и присвойте значение false;
let iKnowJs = false;
// –– Выведите значение в консоль
console.log(iKnowJs);
// –– Затем присвойте переменной значение true и снова выведите в консоль.
iKnowJs = true;
console.log(iKnowJs);

// Задание к уроку 1.2.4.
// –– объявите константу myName и присвойте ей значение с вашим именем;
const myName1 = 'Alex';
console.log(myName1);
// –– переприсвоить значение константы и посмотреть в консоль. Должна быть ошибка (TypeError: Assignment to constant variable.).
//const myName1 = 'Dima';  // Выдает ошибку

// Задание к уроку 1.2.5

let plusMe = 10; // добавь 10
let subTrackMe = 9001; // отними 100
let multiplyMe = 32; // умножь на 3
let quarterMe = 1152; // раздели на 3

// Используйте сокращенные математические операторы ниже
plusMe += 10;
console.log(plusMe);
subTrackMe -= 100;
console.log(subTrackMe);
multiplyMe *=3;
console.log(multiplyMe);
quarterMe /=3;
console.log(quarterMe);


// Проверь результат ниже
console.log('The value of levelUp:', plusMe);
console.log('The value of powerLevel:', subTrackMe);
console.log('The value of multiplyMe:', multiplyMe);
console.log('The value of quarterMe:', quarterMe);

// Задание к уроку 1.2.6

// Увеличте значение bitcoin при помощи оператора инкремента
// Уменьшите значение ethereum при помощи оператора декремента

let bitcoin = 10000;
bitcoin++;
console.log(bitcoin);

let ethereum = 300;
ethereum--;
console.log(ethereum);

// Задание к уроку 1.2.7

// Создайте переменную с именем myPet и присвойте ей значение – название вашего любимого животного (cat | dog | parrot)
let myPet = 'dog';
// Сделайте вывод в консоль строки 'My favourite pet is ' и значение вашей переменной, используя конкатенацию строк
console.log('My favourite pet is ' + myPet);

// Задание к уроку 1.2.8

// Создайте 2 переменных: myName и myCity, присвойте им значения.
let myName = 'Alex';
let myCity = 'Kiev';
// В консоль выведите сообщение, My name is.. I am from .., используя интерполяцию строк с переменными.
console.log(`My name is ${myName}. I am from ${myCity}.`);


// Задание к уроку 1.2.9

// вывести в консоль тип переменной
let englishLesson = 'London is the capital of Great Britain';
console.log(typeof englishLesson);
// переприсвоить переменную со значением 7
englishLesson = 7;
// еще раз вывести в консоль тип переменной
console.log(typeof englishLesson);
// в первом случае должно быть string, а во  втором number
