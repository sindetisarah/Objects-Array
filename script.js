var fruit= { 
    name: "Oranges", 
    price: 30, 
    quantity: 2, 
    fruitCost: function(price,quantity) { 
       getCost= price*quantity;
        return  this.fruitCost=getCost } 
        
       
}
fruit.fruitCost(30,2)

console.log(fruit.quantity +" "+fruit.name + " " +"for KES " + getCost.toFixed(2))