// Object fruit with properties
var fruit= { 
    name: "Oranges", 
    price: 30, 
    quantity: 2,
    // Invoking a method as a property of the object fruit 
    fruitCost: function(price,quantity) { 
       getCost= price*quantity;
        return  getCost } 
        
       
}
fruit.fruitCost(30,2)

console.log(fruit.quantity +" "+fruit.name + " " +"for KES " + getCost.toFixed(2))