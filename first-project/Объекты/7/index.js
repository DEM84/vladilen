const getTotalPriceOfShoppingBag = (shoppingBag) => {
  //
  let sum = 0;

  shoppingBag.forEach((el) => {
    sum =
      sum +
      el.quantity *
        (groceries[el.product].price -
          (groceries[el.product].discount * groceries[el.product].price) / 100);
  });

  return sum;
};

const shoppingBag = [
  { product: "Chocolate", quantity: 3 },
  { product: "Orange Juice", quantity: 23 },
];

const groceries = {
  "Orange Juice": {
    price: 1.5,
    discount: 10,
  },
  Chocolate: {
    price: 2,
    discount: 0,
  },
  // more items...
};

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);

console.log("totalPrice", totalPrice); // Возвращает 37.05
