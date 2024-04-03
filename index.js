// ИСХОДНЫЕ ДАННЫЕ НЕ ТРОГАТЬ!*

let discount = prompt('Какая скидка?')

let totalSale = 0

let total = 0

let max = 0

let min = 0

let average = 0

let newPrice = 0

let arr = [

{

name: 'Milk',

price: 3.25

},

{

name: 'Coffee',

price: 1.5

},

{

name: 'Ice Cream',

price: 7.85

},

{

name: 'Tomatos',

price: 4.14

},

{

name: 'Onion',

price: 2.25

}

]

let arr_sale = []

// 1. Сохранить самый дорогой товар в переменную`max`*

// 2. Сохранить самый дешевый товар в переменную`min`*

// 3. Сохранить общую цену без скидок в переменную`total`*

// 4. Сохранить общую цену со скидкой в переменную`totalSale`*

// 5. Сохранить элементы из массива arr с обновленной ценой (цена со скидкой) в переменную arr_sale*

// 6. Сохранить в переменной`average` среднюю цену всех продуктов без скидок*

// * Писать весь код в функции setup()*

// ТРИ ОЦЕНКИ. ЧИСТОТА КОДА, ЛОГИКА РАБОТЫ, УНИКАЛЬНОСТЬ КОДА*

function setup() {
    for (let item of arr) {
        total += item.price;

        average = total / arr.length


        min = Math.min(...arr.map(item => item.price));
        max = Math.max(max, item.price);


        sale = ( total / 100  ) * discount
        totalSale = total - sale


        newPrice = (item.price - sale).toFixed(2);
        arr_sale.push({name: item.name, price: newPrice});
        
    
        
    }
    


console.log(`Left after sale ${totalSale.toFixed(1)}`);
console.log(`Average ${average.toFixed(1)}`);
console.log(min);
console.log(max);
console.log(total);
console.log(arr_sale);
}
setup()