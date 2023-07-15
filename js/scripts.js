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
const selectedToppings = Array.from(toppings).filter(topping => topping.checked).map(topping => topping.value);

const myOrder = new Order();
const myPizza = new Pizza(selectedToppings, sizeValue);
myOrder.addPizza(myPizza);

const finalOrderElement = document.getElementById("final-order");
finalOrderElement.innerText = `Your order total is: $${myOrder.pizzas[myPizza.id].price}\nItems: ${selectedToppings.join(", ")} ${sizeValue} pizza`;
}