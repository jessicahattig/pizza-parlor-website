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

// Order.prototype.calculatePrice = function(pizza) {
//   let sizeCost = {
//     small: 8,
//     medium: 10,
//     large: 12,
//   };
//   let toppingsCost = {
//     anchovies: 1,
//     pepperoni: 1,
//     pineapple: 1.5,
//     spinach: 0.5
//   };

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

//UI Logic
window.addEventListener("load", function() {
  const form = document.querySelector("form");
  form.addEventListener("submit", displayOrder)
});

function displayOrder(event){
  event.preventDefault();
  const selectedItems = [];

  const pizzaSize = document.getElementsByName("size");
  const selectedSize = Array.from(pizzaSize).find(size => size.checked);
  const sizeValue = selextedSize ? selectedSize.value : "";

const toppings = document.getElementsByName("toppings");
const selectedToppings = Array.from(toppings).filters(topping => topping.checked).map(topping => topping.value);
}