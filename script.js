const array = {
  title : '',
  screens: '',
  adaptive: true,
  services:[],
  allServicePrices: 0,
  screenPrice: 0,
  rollback:25,
  start: function () {
  array.asking()
  array.getAllServicePrices()
  array.servicePercentPrice()
  array.getUpperTitle()
  array.discount()
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
    for (let i=0; i<2; i++) {
      let name=prompt ('Какой дополнительный тип услуги нужен?')
      let price=0
      let id = i
      do {
        price=+prompt (`Сколько это будет стоить?`)
      } while  (isNaN(price) || price <= 0);
      let service = {
        id: id,
        name: name,
        price: price
      };
      array.services.push(service)
     }
  },
  getAllServicePrices: function() {
  //  усложненный расчет методом reduce
    array.allServicePrices = array.services.reduce((total, currentValue) => {
      return accumulator + service.price;
    }, 0); 
   
  //  расчет методом for of
  //   for (let service of  array.services)
  //   {array.allServicePrices += service.price}
  //   return array.allServicePrices
  },
  fullPrice: function() {
    return array.screenPrice +array.getAllServicePrices() },
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

  logger:function() {
    console.log(`Полная стоимость проекта: ${array.fullPrice()}`);
    console.log(`Cтоимость проекта с учетом отката: ${array.servicePercentPrice()}`);
  }
  }
   array.start()
