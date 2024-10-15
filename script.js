const array = {
  title : '',
  screens: '',
  adaptive: true,
  service1: '',
  service2: '',
  screenPrice: 0,
  servicePrice1:0,
  servicePrice2:0,
  rollback:25,
  start: function () {
  array.asking()
  array.allServicePrices()
  array.servicePercentPrice()
  array.getUpperTitle()
  array.rollbackMessage()
  array.logger()
},
   
 asking: function(){
    do {array.title = prompt ('Как называется Ваш проект', 'Калькулятор')}
    while (!isNaN(array.title.trim()));
    do {array.screens = prompt ('Какие типы экранов нужно разработать?', "Простые, Сложные")}
    while (!isNaN(array.screens.trim()));
    do {array.screenPrice = +prompt("Введите стоимость");} 
    while (isNaN(array.screenPrice) || array.screenPrice <= 0);
    array.adaptive = confirm('Нужен ли адаптив на странице?');
    array.service1 = prompt ('Какой дополнительный тип услуги нужен?');
    array.servicePrice1 = +prompt (`Сколько это будет стоить ${array.service1}?`);
    array.service2 = prompt ('Какой дополнительный тип услуги нужен?');
    array.servicePrice2 = +prompt (`Сколько это будет стоить ${array.service2}?`);
  },
  allServicePrices: function() {
    return array.servicePrice1 + array.servicePrice2 },
  fullPrice: function() {
    return array.screenPrice +array.allServicePrices() },
  servicePercentPrice: function() {
    return array.fullPrice() - array.fullPrice() * (array.rollback/100)
    },
  discount: function() {
    if (array.fullPrice()>=3000) {
  console.log ('Мы можем дать скидку - 10%');
    } else if (array.fullPrice()<30000 && array.fullPrice()>=15000) {
   console.log ('Мы можем дать скидку - 5%');
    }
    else if (array.fullPrice()<15000 && array.fullPrice()>0)
       console.log ('Скидка не предусмотрена');
     else {
   console.log ('Что-то пошло не так, надо уточнить стоимость проекта и откат посреднику'); 
 }
  },
 getUpperTitle: function () {
    return  array.title.trim().substring(0, 1).toUpperCase() +array.title.trim().substring(1).toLowerCase()
       },

 rollbackMessage: function (price) {
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
      },

  logger:function() {
    console.log(`Полная стоимость проекта: ${array.fullPrice()}`);
    console.log(`Cтоимость проекта с учетом отката: ${array. servicePercentPrice()}`);
  }
  }
   array.start()
 
 



// const getUpperTitle = function getTitle() {
//   const trimmedTitle = array.title.trim(); 
//   const firstLetter = array.trimmedTitle.substring(0, 1).toUpperCase(); 
//   const remainingLetters = array.trimmedTitle.substring(1).toLowerCase(); 
//   const newTitle = `${firstLetter}${remainingLetters}`; 
//   return newTitle;
// }

// console.log(`Название проекта: ${getUpperTitle()}`);

// const getRollbackMessage = function RollbackMessage (price) {
//   if (price>=3000) {
//     return 'Мы можем дать скидку - 10%';
//    } else if (price<30000 && price>=15000) {
//     return'Мы можем дать скидку - 5%';
//    }
//    else if (price<15000 && price>0)
//     return 'Скидка не предусмотрена';
//    else {
//     return 'Что-то пошло не так, надо уточнить стоимость проекта и откат посреднику'; 
//    }
// }



