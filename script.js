
const title = prompt ('Какое название проекта хотите?');
const screens = prompt ('Какие типы экранов нужно разработать? - Простые, Сложные, Интерактивные')
const adaptive = prompt ('Нужен ли адаптив на сайте?', 'Да');
const service1 = prompt ('Какой дополнительный тип услуги нужен?');
const servicePrice1 = +prompt (`Сколько это будет стоить ${service1}?`);
const service2 = prompt ('Какой дополнительный тип услуги нужен?');
const servicePrice2 = +prompt (`Сколько это будет стоить ${service2}?`);
const rollback = 25;
let screenPrice
// const fullPrice = screenPrice + servicePrice1 + servicePrice2;
// const servicePercentPrice = fullPrice - fullPrice * (rollback/100); 

let screenPriceFnc = function() {
  do {
    screenPrice = prompt("Введите стоимость");
} while (isNaN(screenPrice) || screenPrice <= 0);

};

const showTypeOf = function(item)  {
return console.log (item, typeof item)
}

const allServicePrices = function getAllServicePrices() {
return servicePrice1 + servicePrice2
  }
console.log (`Стоимость всех дополнительных услуг составит ${allServicePrices()}`)
const fullPrice = function getFullPrice() {
  return screenPriceFnc() + allServicePrices()
  }
console.log (`Стоимость всех дополнительных услуг составит ${fullPrice()}`)


if (fullPrice>=3000) {
  console.log ('Мы можем дать скидку - 10%');
 } else if (fullPrice<30000 && fullPrice>=15000) {
   console.log ('Мы можем дать скидку - 5%');
 }
 else if (fullPrice<15000 && fullPrice>0)
   console.log ('Скидка не предусмотрена');
 else {
   console.log ('Что-то пошло не так, надо уточнить стоимость проекта и откат посреднику'); 
 }
 
const getUpperTitle = function getTitle() {
  const trimmedTitle = title.trim(); 
  const firstLetter = trimmedTitle.substring(0, 1).toUpperCase(); 
  const remainingLetters = trimmedTitle.substring(1).toLowerCase(); 
  const newTitle = `${firstLetter}${remainingLetters}`; 
  return newTitle;
}

console.log(`Название проекта: ${getUpperTitle()}`);

const servicePercentPrice = function getServicePercentPrices() {
  return fullPrice() - fullPrice() * (rollback/100); 
}
console.log(`Окончательная цена с учетом отката посреднику - ${servicePercentPrice()}`);

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
console.log(`Скидка, которую можем предложить - ${getRollbackMessage(fullPrice())}`)

console.log (`нужна ${service1}`);
console.log (`стоимость ${service1} составит ${servicePrice1}`);
console.log (`нужна ${service2}`);
console.log (`стоимость ${service2} составит ${servicePrice2}`);
console.log(`Окончательная цена - ${fullPrice()}`);
console.log(`Окончательная цена с учетом отката посреднику - ${servicePercentPrice()}`);

showTypeOf(screenPrice);
showTypeOf(screens);
showTypeOf(title);
showTypeOf(adaptive);

