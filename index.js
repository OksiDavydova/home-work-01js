//1
// // Change code below this line
// const productName = 'Droid';
// // console.log(productName);
// // 'Droid'
// const pricePerItem = 2000;
// // console.log(pricePerItem);
// // 2000

//2
// let productName = "Droid";
// let pricePerItem = 2000;

// // Change code below this line
// pricePerItem = 3500;
// productName = "Repair droid";
//3
// Change code below this line
// const topSpeed = 160;
// const distance = 617.54;
// const login = "mango935";
// const isOnline = true;
// const isAdmin = false;
// //4
// const pricePerItem = 3500;
// const orderedQuantity = 4;

// // Change code below this line
// const totalPrice = pricePerItem * orderedQuantity;
// 5
// const productName = "Droid";
// const pricePerItem = 3500;

// // Change code below this line
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
//6
// Change code below this line
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = (pricePerDroid * orderedQuantity) + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

//7
// Change code below this line
// function sayHi() {
//   console.log("Hello, this is my first function!");
// }
// sayHi();

//8
// Change code below this line
// function add(a, b, c) {
//   console.log("Addition result equals", a + b + c);
//   // Change code above this line
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

//9
// function add(a, b, c) {
//   // Change code below this line
//   return a + b + c;


//   // Change code above this line
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

//10
// function makeMessage(name, price) {
//   // Change code below this line
//   const message = `You picked ${name}, price per item is ${price} credits`;
//   // Change code above this line
//   return message;
// };
// makeMessage('Radar', 6150);
// makeMessage('Scanner', 3500);
// makeMessage('Reactor', 8000);
// makeMessage('Engine', 4070);

// 11
// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerItem;

//   // Change code above this line
//   return totalPrice;
// };
// calculateTotalPrice(5, 100);
// calculateTotalPrice(8, 60);
// calculateTotalPrice(3, 400);
// calculateTotalPrice(1, 3500);
// calculateTotalPrice(12, 70);

// 12
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
//   const message = `You ordered droids worth ${(orderedQuantity * pricePerDroid) + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`;


//   // Change code above this line
//   return message;
// }
// makeOrderMessage(2, 100, 50);
// makeOrderMessage(4, 300, 100);
// makeOrderMessage(10, 70, 200);

// 13
// const a = 2;
// const b = 5;

// console.log(a > b); // false
// console.log(b > a); // true
// console.log(a >= b); // false
// console.log(b >= a); // true

// console.log(a < b); // true
// console.log(b < a); // false
// console.log(a <= b); // true
// console.log(b <= a); // false

// function isAdult(age) {
//   // Change code below this line
//   const passed = age >= 18;

//   // Change code above this line
//   return passed;
// }
// isAdult(20);
// isAdult(14);
// isAdult(8);
// isAdult(37);

// 14
// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Change code below this line
//   const isMatch = password === SAVED_PASSWORD;

//   // Change code above this line
//   return isMatch;
// }
// isValidPassword("mangodab3st");
// isValidPassword("kiwirul3z");
// isValidPassword("jqueryismyjam");

// 15
// function checkAge(age) {
//   let message;

//   if (age >= 18) { // Change this line
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }

//   return message;
// }
// checkAge(20);
// checkAge(8);
// checkAge(14);
// checkAge(38);

// 16
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//   if (ordered > available) {
//     message = "Not enough goods in stock!";
//   } else {
//     message = "Order is processed, our manager will contact you.";
//   }

//   // Change code above this line
//   return message;
// }
// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(200, 20);
// checkStorage(200, 150);
// checkStorage(150, 180);

// 17
// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// Значение переменной 'a' число 7
// Значение переменной 'b' число 6
// Значение переменной 'c' число 45
// Значение переменной 'd' число 2

// 18
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   let totalPrice = pricePerDroid * orderedQuantity;

//   if (totalPrice > customerCredits) {
//     message = `Insufficient funds!`;
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
//   }
//   // Change code above this line
//   return message;
// }
// makeTransaction(3000, 5, 23000);
// makeTransaction(1000, 3, 15000);
// makeTransaction(5000, 10, 8000);
// makeTransaction(2000, 8, 10000);
// makeTransaction(500, 10, 5000);

// 19
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

// if (password === null) { // Change this line
//   message = 'Canceled by user!';
// } else if (password === ADMIN_PASSWORD) { // Change this line
//   message = 'Welcome!';
// } else {
//   message = 'Access denied, wrong password!';
// }

//   return message;
// }
// checkPassword("mangohackzor");
// checkPassword(null);
// checkPassword("polyhax");
// checkPassword("jqueryismyjam");

// 20
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered === 0) { // Change this line
//     message = "There are no products in the order!";
//   } else if (ordered > available) {
//     message = "Your order is too large, there are not enough items in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }

//   // Change code above this line
//   return message;
// }

// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(70, 0);
// checkStorage(200, 20);
// checkStorage(200, 250);
// checkStorage(150, 0);

// 21
// Присвой переменной isInRange выражение проверки вхождения number в числовой промеждуток от start до end.То есть число должно быть больше либо равно start и меньше либо равно end.Результатом выражения проверки будет буль true или false.

// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end; // Change this line

//   return isInRange;
// }

// Объявлена функция isNumberInRange(start, end, number)
// В выражении проверки использован оператор &&
//   Вызов isNumberInRange(10, 30, 17) возвращает true
// Вызов isNumberInRange(10, 30, 5) возвращает false
// Вызов isNumberInRange(20, 50, 24) возвращает true
// Вызов isNumberInRange(20, 50, 76) возвращает false

// 22
// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === 'pro' || subType === 'vip'; // Change this line

//   return canAccessContent;
// }
// checkIfCanAccessContent("pro");
// checkIfCanAccessContent("starter");
// checkIfCanAccessContent("vip");
// checkIfCanAccessContent("free");

// 23
// Функция isNumberNotInRange(start, end, number) проверяет, не входит ли число в промежуток.То есть число должно быть меньше либо равно start и больше либо равно end.Результатом выражения проверки будет буль true или false.

// Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// number - число, не вхождение которого проверяется
// start - начало числового промежутка
// end - конец числового промежутка
// Присвой переменной isNotInRange выражение инверсии значения переменной isInRange используя оператор!.

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = (!isInRange); // Change this line

//   return isNotInRange;
// }
// isNumberNotInRange(10, 30, 17);
// isNumberNotInRange(10, 30, 5);
// isNumberNotInRange(20, 50, 24);
// isNumberNotInRange(20, 50, 76);

// console.log(!true); // false
// console.log(!false); // true
// console.log(!3); // !3 -> !true -> false
// console.log(!"Манго"); // !'Манго' -> !true -> false
// console.log(!0); // !0 -> !false -> true
// console.log(!""); // !'' -> !false -> true

// const isOnline = true;
// const isNotOnline = !isOnline; // !isOnline -> !true -> false

// 24

// Функция getDiscount(totalSpent) определяет значение скидки в зависимости от общей суммы потраченных денег(параметр totalSpent) в магазине за всё время(партнёрская программа).Скидка записывается в переменную discount и возвращается из функции как результат её работы.

// Используя ветвления и логические операторы, дополни код функции.

// Если потрачено от 50000(включительно) или больше кредитов - скидка 10 % (золотой партнёр)
// Если потрачено от 20000(включительно) до 50000 кредитов - скидка 5 % (серебрянный партнёр)
// Если потрачено от 5000(включительно) до 20000 кредитов - скидка 2 % (бронзовый партнёр)
// Если потрачено меньше чем 5000 кредитов - скидка 0(базовый партнёр)
// Значения скидок каждого уровня хранятся в одноимённых константах BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT и GOLD_DISCOUNT.

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line

//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent <= 50000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent <= 20000) {
//     discount = BRONZE_DISCOUNT;
//   } else if (totalSpent <= 5000) {
//     discount = BASE_DISCOUNT;
//   }

//   // Change code above this line
//   return discount;
// }
// getDiscount(137000);
// getDiscount(46900);
// getDiscount(8250);
// getDiscount(1300);
// getDiscount(5000);
// getDiscount(20000);
// getDiscount(50000);

// 25

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line


//   message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";


//   // Change code above this line
//   return message;
// }

// Выполни рефакторинг решения задачи «Склад товаров», заменив инструкцию if...else тернарным оператором.

//   Тесты
// Объявлена функция checkStorage(available, ordered).
// Использован тернарный оператор.
// Вызов checkStorage(100, 50) возвращает "The order is accepted, our manager will contact you"
// Вызов checkStorage(100, 130) возвращает "Not enough goods in stock!"
// Вызов checkStorage(200, 20) возвращает "The order is accepted, our manager will contact you"
// Вызов checkStorage(200, 150) возвращает "The order is accepted, our manager will contact you"
// Вызов checkStorage(150, 180) возвращает "Not enough goods in stock!"

// 26
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
//   message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";
//   // Change code above this line
//   return message;
// }
/*Функция checkPassword(password) сравнивает переданный ей пароль(параметр password) с сохранённым паролем администратора(константа ADMIN_PASSWORD) и возвращает строку с сообщением о результате.

Используя тернарный оператор дополни функцию так, что:

Если значения password и ADMIN_PASSWORD совпадают, присвой переменной message строку "Access is allowed".
В противном случае, присвой message строку "Access denied, wrong password!".
  Тесты
Объявлена функция checkPassword(password)
Использован тернарный оператор
Вызов checkPassword("jqueryismyjam") возвращает "Access is allowed"
Вызов checkPassword("angul4r1sl1f3") возвращает "Access denied, wrong password!"
Вызов checkPassword("r3actsux") возвращает "Access denied, wrong password!"*/

// 27
// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//   switch (type) { // Change this line
//     case "starter": // Change this line
//       price = 0; // Change this line
//       break;

//     case "professional": // Change this line
//       price = 20; // Change this line
//       break;

//     case "organization": // Change this line
//       price = 50; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// }
// getSubscriptionPrice("professional");
// getSubscriptionPrice("organization");
// getSubscriptionPrice("starter");
/*Функция getSubscriptionPrice(type) получает строку с типом подписки пользователя (параметр type), проверяет её на совпадение с тремя возможными типами ежемесячной подписки и возвращает цену хранящуюся в переменной price.

Если значение параметра type это строка:

"starter" - цена подписки 0 кредитов.
"professional" - цена подписки 20 кредитов.
"organization" - цена подписки 50 кредитов.*/

// 28
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line

// switch (password) {
//   case null:
//     message = "Canceled by user!";
//     break;

//   case ADMIN_PASSWORD:
//     message = "Welcome!";
//     break;

//   default:
//     message = "Access denied, wrong password!";

// }


//   // Change code above this line
//   return message;
// }
// checkPassword("mangohackzor");
// checkPassword(null);
// checkPassword("polyhax");
// checkPassword("jqueryismyjam");

/*Функция checkPassword(password) получает пароль в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.

Если значение параметра password:

равно null, значит пользователь отменил операцию и в message записывается строка "Canceled by user!".
совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка "Welcome!".
не удобвлетворяет ни одному из предыдущих условий, в переменную message записывается строка "Access denied, wrong password!".
Проведи рефакторинг кода, заменив инструкцию if..else на switch, и не забудь о блоке default (аналог else).*/

// 29

// function getShippingCost(country) {
//   let message;
//   // Change code below this line

//   switch (country) {
//     case "China":
//       message = `Shipping to ${country} will cost 100 credits`;
//       break;

//     case "Chile":
//       message = `Shipping to ${country} will cost 250 credits`;
//       break;

//     case "Australia":
//       message = `Shipping to ${country} will cost 170 credits`;
//       break;

//     case "Jamaica":
//       message = `Shipping to ${country} will cost 120 credits`;
//       break;

//     default:
//       message = "Sorry, there is no delivery to your country";

//   }

//   // Change code above this line
//   return message;
// }

/*Функция getShippingCost(country) должна проверять возможность доставки товара в страну пользователя (параметр country) и возвращать сообщение о результате хранящееся в переменной message. Обязательно используй инструкцию switch.

Формат возвращаемой строки "Shipping to <country> will cost <price> credits", где вместо <country> и <price> необходимо подставить соотвествующие значения.

Список стран и стоимость доставки:

China - 100 кредитов
Chile - 250 кредитов
Australia - 170 кредитов
Jamaica - 120 кредитов
Из списка видно, что доставка есть не везде. Если указанной страны нет в списке, то функция должна вернуть строку "Sorry, there is no delivery to your country"

Тесты
Объявлена функция getShippingCost(country)
В теле функции использована инструкция switch
Вызов getShippingCost("Australia") возвращает "Shipping to Australia will cost 170 credits"
Вызов getShippingCost("Germany") возвращает "Sorry, there is no delivery to your country"
Вызов getShippingCost("China") возвращает "Shipping to China will cost 100 credits"
Вызов getShippingCost("Chile") возвращает "Shipping to Chile will cost 250 credits"
Вызов getShippingCost("Jamaica") возвращает "Shipping to Jamaica will cost 120 credits"
Вызов getShippingCost("Sweden") возвращает "Sorry, there is no delivery to your country" */

// 30
// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }

/*Функция getNameLength(name) принимает имя (параметр name) и возвращает строку, в которой указана его длина. Дополни шаблонную строку в переменной message длиной строки из параметра name.

Тесты
Объявлена функция getNameLength(name)
Вызов функции getNameLength("Poly") возвращает "Name Poly is 4 characters long"
Вызов функции getNameLength("Harambe") возвращает "Name Harambe is 6 characters long"
Вызов функции getNameLength("Billy") возвращает "Name Billy is 5 characters long"
Вызов функции getNameLength("Joe") возвращает "Name Joe is 3 characters long" */

// 31

// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// Change code above this line
/*
Строка — это индексированный набор из нуля или более символов, заключенных в одинарные, двойные или косые кавычки.

Индексация элементов строки начинается с нуля. Например, в строке 'JavaScript' буква 'J' стоит на позиции с индексом 0, а 't' идёт под индексом 9. При этом длина строки 'JavaScript' равна 10, то есть индекс последнего элемента всегда на единицу меньше чем её длина.

Для доступа к значению элемента строки используется синтаксис квадратных скобок строка[индекс].

const productName = "Repair droid";
console.log(productName[0]); // "R"
console.log(productName[5]); // "r"
console.log(productName[11]); // "d"
console.log(productName[productName.length - 1]); // "d"
Содержимое строки нельзя изменить, только прочитать. То есть нельзя взять какой-то символ и заменить его, как только строка создана — она такая навсегда. Можно лишь создать целиком новую строку и присвоить в переменную вместо старой.

Дополни код присвоив объявленным переменным выражения обращения к соответствующим элементам или свойствам строки в переменной course.

courseTopicLength - длина строки.
firstElement - первый символ строки.
lastElement - последний символ строки.
Тесты
Объявлена переменная courseTopic
Значение переменной courseTopic это строка "JavaScript essentials"
Объявлена переменная courseTopicLength
Значение переменной courseTopicLength это число 24
Объявлена переменная firstElement
Значение переменной firstElement это строка "J"
Объявлена переменная lastElement
Значение переменной lastElement это строка "s" */

// 32

// function getSubstring(string, length) {
//   const substring = string.slice(string, length); // Change this line

//   return substring;
// }
// getSubstring("Hello world", 3);
// getSubstring("Hello world", 6);
// getSubstring("Hello world", 8);
// getSubstring("Hello world", 11);
// getSubstring("Hello world", 0); 


/*
const productName = "Repair droid";
console.log(productName.slice(0, 4)); // "Repa"
console.log(productName.slice(3, 9)); // "air dr"
console.log(productName.slice(0, productName.length)); // "Repair droid"
console.log(productName.slice(7, productName.length)); // "droid"

Функция getSubstring(string, length) принимает строку и возвращает подстроку от начала и до length символов. Она объявляет два параметра, значения которых будут задаваться во время её вызова:

string - оригинальная строка
length - количество символов с начала строки для подстроки
Присвой переменной substring выражение создания подстроки длинной length символов (от начала) из строки string.
*/

// 33

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   if (message.length <= maxLength) {
//     result = message;
//   } else if (message.length >= maxLength) {
//     result = message.slice(0, maxLength) + "...";
//   }

//   /// Change code above this line
//   return result;
// }

// formatMessage("Curabitur ligula sapien", 16);
// formatMessage("Curabitur ligula sapien", 23);
// formatMessage("Vestibulum facilisis purus nec", 30);
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 15);

/*Функция formatMessage(message, maxLength) принимает строку (параметр message) и форматирует её, если длина превышает значение в параметре maxLength.

Дополни код функции так, что если длина строки:

не превышает maxLength, функция возвращает её в исходном виде.
больше maxLength, то функция обрезает строку до maxLength символов и добавляет в конец троеточие "...", после чего возвращает укороченную версию. */

// 34
// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   return normalizedInput;
// }

/*Функция normalizeInput(input) принимает строку (параметр input) и возвращает такую же строку, но в нижнем регистре. Присвой переменной normalizedInput выражение создания строки в нижнем регистре из параметра input. */


// 35

// function checkForName(fullName, name) {
//   const result = fullName.includes(name); // Change this line
//   return result;
// }

/*
Метод includes()
Метод строк includes(substring) проверяет входит ли подстрока substring в строку, возвращает буль - true если входит и false в противном случае. Регистр символов в строке и подстроке имеет значение, так как например буква "a" не равна букве "А".

const productName = "Repair droid";

console.log(productName.includes("a")); // true
console.log(productName.includes("A")); // false
console.log(productName.includes("driod")); // true
console.log(productName.includes("Driod")); // false
console.log(productName.includes("Repair")); // true
console.log(productName.includes("repair")); // false
Задание
Функция checkName(fullname, name) принимает два параметра и возвращает буль true или false - результат проверки вхождения подстроки name в строку fullname.

fullname - полное имя состоящее из двух слов (имени и фамилии) разделённых пробелом.
name - имя для проверки вхождения в полное имя.
Присвой переменной result выражение проверки вхождения имени (параметр name), в полное имя (параметр fullname). Пусть функция строго относится к регистру букв, то есть «Петя» и «петя» для неё разные имена.

Тесты
Объявлена функция checkForName(fullname, name).
Вызов функции checkForName("Egor Kolbasov", "Egor") возвращает true
Вызов функции checkForName("Egor Kolbasov", "egor") возвращает false
Вызов функции checkForName("Egor Kolbasov", "egOr") возвращает false
Вызов функции checkForName("Egor Kolbasov", "Zhenya") возвращает false
Вызов функции checkForName("Vadim Nekrasov", "Vadim") возвращает true
Вызов функции checkForName("Vadim Nekrasov", "vadim") возвращает false
Вызов функции checkForName("Vadim Nekrasov", "Dima") возвращает false
*/

// 36
// function checkForSpam(message) {
//   let result;
//   // Change code below this line

//   result = message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale") ? true : false;

//   // Change code above this line
//   return result;
// }

/*Функция checkForSpam(message) принимает строку (параметр message), проверяет её на содержание запрещенных слов spam и sale, и возвращает результат проверки. Слова в строке параметра message могут быть в произвольном регистре, например SPAM или sAlE.

Если нашли запрещенное слово (spam или sale) то функция возвращает буль true.
Если в строке нет запрещенных слов, функция возвращает буль false.*/
