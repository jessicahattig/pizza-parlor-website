# _Pizza Parlor Website_

#### By _**Jessica Hattig**_

#### _Epicodus, Week 7-8 Independent Project: Intermediate JavaScript_

## Technologies Used

* _JavaScript_
* _Web API_
* _HTML_
* _CSS_
* _VS Code_
* _Github_
* _Git_
* _W3Schools_
*_BootStrap_

## Description

_Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi esse nostrum facilis quibusdam dolorem dolorum laborum mollitia temporibus quas magni! Nesciunt facilis voluptates obcaecati impedit odit totam dolorem mollitia id?._

[GitHub Pages ](https://jessicahattig.github.io/xxxxx)

## Setup/Installation Requirements

* _Clone this repository to your desktop._
* _Navigate to the directory titled "Mr.-Robogers-Neighborhood"._
* _Open the file "index.html" in your browser._

## Known Bugs

*  _Note to self, check for bugs by testing limitations._

## Tests

Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: 
  const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }

Describe: Order();

Test: "It should add pizza to order."
Code:
  const myOrder = new Order();
  const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
  myOrder.addPizza(myPizza);
  console.log(myOrder.pizzas);
Expected Output: Pizza {toppings: ["anchovies", "pineapple"], size: "medium" }

Test: "Pizza should have unique ID when added to Order."
Code:
  const myOrder = new Order();
  const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
  myOrder.addPizza(myPizza);
  console.log(myOrder.pizzas);
Expected Output: Pizza {toppings: ["anchovies", "pineapple"], size: "medium", id: 1 }

Test: "It should calculate cost of pizza."
Code: 
  const myOrder = new Order();
  const myPizza = new Pizza(["anchovies", "pineapple"], 12);
  myOrder.addPizza(myPizza);
  console.log(myOrder.pizzas[myPizza.id]);
Expexted Output: price: 123

Test: "It should calculate cost of pizza depending what size is selected."
Code:
  const myOrder = new Order();
  const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
  myOrder.addPizza(myPizza);
  console.log(myOrder.pizzas[myPizza.id]);
Expected Output: price: 13

## License

MIT

Copyright (c) [2023] [Jessica Hattig]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Questions, concerns or ideas? Please share by reaching out to the author via email at jessicahattig@gmail.com. Thank you!