
// 3) Спрашиваем у пользователя “Как называется ваш проект?” и результат сохраняем в переменную title
let title = prompt ('Какое название проекта хотите?');
console.log (typeof title);

// 4) Спросить у пользователя “Какие типы экранов нужно разработать?” сохранить в переменную screens (пример: "Простые, Сложные, Интерактивные")

const screens = prompt ('Какие типы экранов нужно разработать? - Простые, Сложные, Интерактивные')
console.log (typeof screens);

// 5) Спросить у пользователя “Сколько будет стоить данная работа?” и сохранить в переменную screenPrice (пример: 12000)
const screenPrice = +prompt ('Сколько будет стоить данная работа?')
console.log (typeof screenPrice);

// 6) Спросить у пользователя “Нужен ли адаптив на сайте?” и сохранить данные в переменной adaptive (булево значение true/false)
const adaptive = +prompt ('Нужен ли адаптив на сайте?', 'Да');
console.log (typeof screenPrice);

// 7) Спросить у пользователя по 2 раза каждый вопрос и записать ответы в разные переменные 1. “Какой дополнительный тип услуги нужен?” (например service1, service2) 2. “Сколько это будет стоить?” (например servicePrice1, servicePrice2) в итоге 4 вопроса и 4 разные переменных, вопросы задаются в такой последовательности Название - Стоимость - Название - Стоимость
const service1 = prompt ('Какой дополнительный тип услуги нужен?');
console.log (`нужна ${service1}`);
const servicePrice1 = +prompt (`Сколько это будет стоить ${service1}?`);
console.log (`стоимость ${service1} составит ${servicePrice1}`);
const service2 = prompt ('Какой дополнительный тип услуги нужен?');
console.log (`нужна ${service2}`);
const servicePrice2 = +prompt (`Сколько это будет стоить ${service2}?`);
console.log (`стоимость ${service2} составит ${servicePrice2}`);


// 8) Вычислить итоговую стоимость работы учитывая стоимость верстки экранов и дополнительных услуг (screenPrice + servicePrice1 + servicePrice2) и результат занести в переменную fullPrice
const fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log(`Окончательная цена - ${fullPrice}`);

// 9) Объявить переменную servicePercentPrice и занести в нее итоговую стоимость за вычетом отката посреднику (servicePercentPrice = fullPrice - Откат посреднику), округлив результат в большую сторону (методы объекта Math в помощь). Вывести servicePercentPrice в консоль.
let rollback = 25;  
const servicePercentPrice = fullPrice - fullPrice * (rollback/100); 
console.log(`Окончательная цена с учетом отката посреднику - ${servicePercentPrice}`);

// 10) Написать конструкцию условий (расчеты приведены в рублях) (вывести в консоль)
//   - Если fullPrice больше 30000, то “Даем скидку в 10%” 
//   - Если fullPrice больше 15000 и меньше 30000, то сообщение “Даем скидку в 5%” 
//   - Если fullPrice меньше 15000 и больше 0 то в консоль вывести сообщение “Скидка не предусмотрена” 
//   - Если отрицательное значение то вывести “Что то пошло не так” 
//   - Учесть варианты 0, 15000 и 30000(к какому уровню не важно)


// Ушло в rollback функцию
// if (fullPrice>=3000) {
//  console.log ('Мы можем дать скидку - 10%');
// } else if (fullPrice<30000 && fullPrice>=15000) {
//   console.log ('Мы можем дать скидку - 5%');
// }
// else if (fullPrice<15000 && fullPrice>0)
//   console.log ('Скидка не предусмотрена');
// else {
//   console.log ('Что-то пошло не так, надо уточнить стоимость проекта и откат посреднику'); 
// }


// 1) Объявить функцию getAllServicePrices. Функция возвращает сумму всех дополнительных услуг. Результат сохраняем в переменную allServicePrices. Тип - function expression
const allServicePrices = function getAllServicePrices() {
  return servicePrice1 + servicePrice2
  }
console.log (`Стоимость всех дополнительных услуг составит ${allServicePrices()}`)


// 2) Объявить функцию getFullPrice. Функция возвращает сумму стоимости верстки и стоимости дополнительных услуг (screenPrice + allServicePrices). Результат сохраняем в переменную fullPrice. Тип - function declaration

const fullPrice1 = function getFullPrice() {
  return screenPrice + allServicePrices()
  }

  console.log (`Стоимость всех дополнительных услуг составит ${fullPrice1()}`)



// // 3) Объявить функцию getTitle. Функция возвращает title меняя его таким образом: первый символ с большой буквы, остальные с маленькой". Учесть вариант что строка может начинаться с пустых символов. " КаЛьКулятор Верстки"
const getUpperTitle = function getTitle() {
  const trimmedTitle = title.trim(); 
  const firstLetter = trimmedTitle.substring(0, 1).toUpperCase(); 
  const remainingLetters = trimmedTitle.substring(1).toLowerCase(); 
  const newTitle = `${firstLetter}${remainingLetters}`; 
  return newTitle;
}

console.log(`Название проекта: ${getUpperTitle()}`);


// 4) Объявить функцию getServicePercentPrices. Функция возвращает итоговую стоимость за вычетом процента отката. Результат сохраняем в переменную servicePercentPrice (итоговая стоимость минус сумма отката)
const servicePercentPrice1 = function getServicePercentPrices() {
  return fullPrice1() - fullPrice1() * (rollback/100); 
}
console.log(`Окончательная цена с учетом отката посреднику - ${servicePercentPrice1()}`);

const getRollbackMessage = function RollbackMessage (price) {
  if (price>=3000) {
    return 'Мы можем дать скидку - 10%';
   } else if (price<30000 && price>=15000) {
    return'Мы можем дать скидку - 5%';
   }
   else if (price<15000 && price>0)
    return 'Скидка не предусмотрена';
   else {
    return 'Что-то пошло не так, надо уточнить стоимость проекта и откат посреднику'; 
   }
}
console.log(`Скидка, которую можем предложить - ${getRollbackMessage(fullPrice1())}`)
