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

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

//UI Logic
window.addEventListener("load", function() {
  const form = document.querySelector("form");
  form.addEventListener("submit", displayOrder);
});

function displayOrder(event) {
  event.preventDefault();

  const pizzaSize = document.getElementsByName("size");
  let sizeName = "";
  pizzaSize.forEach(size => {
    if (size.checked) {
      sizeName = size.nextElementSibling.textContent.split(" $")[0];
    }
  });

  const toppings = document.getElementsByName("toppings");
  const selectedToppings = [];
  toppings.forEach(topping => {
    if (topping.checked) {
      selectedToppings.push(topping.nextElementSibling.textContent.split(" $")[0]);
    }
  });

  const myOrder = new Order();
  const myPizza = new Pizza(selectedToppings, sizeName);
  myOrder.addPizza(myPizza);

  const totalPrice = calculateTotalPrice(sizeName, selectedToppings);

  const finalOrderElement = document.getElementById("final-order");
  finalOrderElement.innerHTML = `<strong>Your order:</strong><br>Pizza Size: ${sizeName}<br>Toppings: ${selectedToppings.join(", ")}<br>Total Cost: $${totalPrice.toFixed(2)}`;
}

function calculateTotalPrice(sizeName, selectedToppings) {
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

  let totalPrice = sizeCosts[sizeName] || 0;
  selectedToppings.forEach(function(topping) {
    totalPrice += toppingsCosts[topping] || 0;
  });

  return totalPrice;
}