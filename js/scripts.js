//Buisness Logic
function Order() {
  this.pizzas = {};
  this.currentId = 0;
}

Order.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas[pizza.id] = pizza;
}

Order.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
}