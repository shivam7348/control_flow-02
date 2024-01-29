// const myNumbers = [ 1, 2, 3]
//  const myTotal = myNumbers.reduce(function (accumlator, currentValue){
//     console.log(`acc: ${accumlator} currVal ${currentValue}`)
//     return  accumlator + currentValue
//  }, 0)
// console.log(myTotal)

//const myNumber = [ 1, 2, 3]

//  const myTotal = myNumber.reduce( (acc, curr) => acc+curr, 0)
  //console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js Course",
        price: 3456
    },
    {
        itemName: "java",
        price:3757
    },
    {
        itemName: "angular js",
        price: 4566
    }
]
 const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
 console.log(priceToPay);




 

