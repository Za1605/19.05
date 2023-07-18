// Знайти та вивести довижину настипних стрінгових значень
//'hello world', 'lorem ipsum', 'javascript is cool'

let hel = 'hello world';
 console.log(hel.length);

 let lor = 'lorem ipsum';
 console.log(lor.length);

 const java = 'lavascript is cool';
 console.log(java.length);


// Перевести до великого регістру наступні стрінгові значення
//'hello world', 'lorem ipsum', 'javascript is cool'

let hel1 = 'hello world';

let upperCase = hel1.toUpperCase();
console.log(upperCase);

let hel2 = 'lorem ipsum';

let upperCase1 = hel2.toUpperCase();
console.log(upperCase1);

let hel3 = 'javascript is cool';

let upperCase2 = hel3.toUpperCase();
console.log(upperCase2);

// Перевести до нижнього регістру настипні стрінгові значення
//HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let HEL = 'HELLO WORLD'
let lowerCase = HEL.toLowerCase();
console.log(lowerCase);

let HEL1 = 'LOREM IPSUM'
let lowerCase1 = HEL1.toLowerCase();
console.log(lowerCase1);

let HEL2 = 'JAVASCRIPT IS COOL'
let lowerCase2 = HEL2.toLowerCase();
console.log(lowerCase2);


// Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string';

let substring = str.substring(1,13);
 console.log(substring);

//Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
  //let str = 'Ревуть воли як ясла повні';
//let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str12 = 'Ревуть воли як ясла повні';

let arr23 = str12.split();
console.log(arr23);




// є масив чисел [10,8,-7,55,987,-1011,0,1050,0] .
// за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

const arr42 = [10,8,-7,55,987,-1011,0,1050,0];

 arr44 = arr42.map((num) => num.toString());

console.log(arr44);



// створити функцію sortNums(direction), яка прймає масив чисел,
// та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
  //let nums = [11,21,3];
//sortNums(nums,'ascending') // [3,11,21]
//sortNums(nums,'descending') // [21,11,3]
let nums90 = [11,21,3];

const sortnew = nums90.sort(function (a,b) {
  return a-b
});

console.log(sortnew);

const sortnew2 = nums90.sort( function (a,b) {
 return b - a
});

console.log(sortnew2);





// є масив
//let coursesAndDurationArray = [
 // {title: 'JavaScript Complex', monthDuration: 5},
  //{title: 'Java Complex', monthDuration: 6},
 // {title: 'Python Complex', monthDuration: 6},
  //{title: 'QA Complex', monthDuration: 4},
 // {title: 'FullStack', monthDuration: 7},
  //{title: 'Frontend', monthDuration: 4}];
// відсортувати його за спаданням за monthDuration
// відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
{title: 'JavaScript Complex', monthDuration: 5},
{title: 'Java Complex', monthDuration: 6},
{title: 'Python Complex', monthDuration: 6},
{title: 'QA Complex', monthDuration: 4},
 {title: 'FullStack', monthDuration: 7},
{title: 'Frontend', monthDuration: 4}];

const coursDur = coursesAndDurationArray.sort( (a1, a2) => a2.monthDuration - a1.monthDuration);


console.log(coursDur);
 // описати колоду карт (від 6 до туза без джокерів)
// знайти піковий туз
// всі шістки
// всі червоні карти
//всі буби
// всі трефи від 9 та більше

//{
  //cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
   //value: '', // '6'-'10', 'ace','jack','queen','king','joker'
  //color:'', // 'red','black'}



 // Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
//{
  //spades:[],
   // diamonds:[],
  //hearts:[],
 // clubs:[]}



  //взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
//написати пошук всіх об'єктів, в який в modules є sass
//написати пошук всіх об'єктів, в який в modules є docker
