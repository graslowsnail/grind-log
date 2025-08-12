/**
 * Given current stock (product → quantity) and a list of orders (product → quantity),
 * return the product names for orders that cannot be fulfilled (product not in stock or insufficient quantity).
 */

const stock = { apple: 10, orange: 5 };
const orders = { apple: 8, orange: 6, pear: 2 };
// expected: ["orange", "pear"]

const stock2 = { apple: 3, orange: 5, banana: 1 };
const orders2 = { apple: 3, orange: 6, pear: 2 };
// expected: ["orange", "pear"]

const stock3 = { grape: 7, melon: 0 };
const orders3 = { grape: 8, melon: 1 };
// expected: ["grape", "melon"]

const stock4 = { Apple: 5, kiwi: 10 };
const orders4 = { apple: 5, kiwi: 11 };
// expected: ["apple", "kiwi"]

// we need to compare the key:values in order with the key:values in stock

const orderValidation = (orders: object, stock: object) => {
  const currentStockMap = new Map()
  const unavalibleItems = []

  for( const [item, count] of Object.entries(stock)){
    currentStockMap.set(item, count)
  }

  for( const [item, count] of Object.entries(orders)){

      let currentStock = currentStockMap.get(item)
      if(!currentStockMap.has(item)){
        unavalibleItems.push(item)
      }
      let stockAfterOrder = currentStock - count
      if(stockAfterOrder < 0){
        unavalibleItems.push(item)
      }
  }
  console.log(unavalibleItems)
}


orderValidation(orders,stock)
orderValidation(orders2,stock2)
orderValidation(orders3,stock3)
orderValidation(orders4,stock4)