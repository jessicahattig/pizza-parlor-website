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
  let sizeCost = 10;
  let toppingsCost = 1.5;

  let totalPrice = (pizza.size * sizeCost) + (pizza.toppings.length * toppingsCost);

  return totalPrice;
}

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}