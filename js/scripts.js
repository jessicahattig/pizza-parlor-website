//Business Logic
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
  const sizeCosts = {
    small: 8,
    medium: 10,
    large: 12
  };

  const toppingsCosts = {
    anchovies: 1,
    pepperoni: 1,
    pineapple: 1.5,
    spinach: 0.5
  };

  let totalPrice = sizeCosts[pizza.size] || 0;
  pizza.toppings.forEach(function(topping) {
    totalPrice += toppingsCosts[topping] || 0;
  });

  return totalPrice.toFixed(2);
}

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

// UI Logic
window.addEventListener("load", function() {
  const form = document.querySelector("form");
  form.addEventListener("submit", displayOrder);

  const resetButton = document.querySelector('#reset-button');
  resetButton.addEventListener('click', function(event) {
    event.preventDefault();
    form.reset();
    const finalOrderElement = document.getElementById("final-order");
    finalOrderElement.innerHTML = ""; // Clear the content of finalOrderElement
  });
});

function displayOrder(event) {
  event.preventDefault();

  const sizeCheckboxes = document.querySelectorAll('input[name="size"]:checked');
  const selectedSize = Array.from(sizeRadioButtons).map(radio => radio.id)[0];

  const toppingsCheckboxes = document.querySelectorAll('input[name="toppings"]:checked');
  const selectedToppings = Array.from(toppingsCheckboxes).map(checkbox => checkbox.id);

  const myOrder = new Order();
  const myPizza = new Pizza(selectedToppings, selectedSize);
  myOrder.addPizza(myPizza);

  const finalOrderElement = document.getElementById("final-order");
  finalOrderElement.innerHTML = `<strong>Your order:</strong><br>Pizza Size: ${selectedSize}<br>Toppings: ${selectedToppings.join(", ")}<br>Total Cost: $${myOrder.pizzas[myPizza.id].price}`;
}