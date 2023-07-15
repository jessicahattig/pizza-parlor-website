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
  let toppingsCost = 1.5;

  let totalPrice = (sizeCost[pizza.size] || 0) + (pizza.toppings.length * toppingsCost);

  return totalPrice;
}

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}