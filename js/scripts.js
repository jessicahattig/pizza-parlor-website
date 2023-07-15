//Buisness Logic
function Order() {
  this.pizzas = {};
  this.currentId = 0;
}

Order.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  pizza.price = this.calculatePrice(pizza);
  this.pizzas[pizza.id] = pizza;
}

Order.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

Order.prototype.calculatePrice = function(pizza) {
  let sizeCost = {
    small: 8,
    medium: 10,
    large: 12,
  };
  let toppingsCost = {
    anchovies: 1,
    pepperoni: 1,
    pineapple: 1.5,
    spinach: 0.5
  };

  let totalPrice = (sizeCost[pizza.size] || 0);
  pizza.toppings.forEach(function(topping) { 
    totalPrice += (toppingsCost[topping] || 0);
  });

  return totalPrice.toFixed(2);
}

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}