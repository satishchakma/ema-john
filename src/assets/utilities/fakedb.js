// use local storage to manage cart data
const addToDb = (id) => {
  console.log(id);
  let shoppingCart = getShoppingCart();
  console.log(shoppingCart);
  // add quantity
  const quantity = shoppingCart[id];
  console.log(shoppingCart[id]);
  if (!quantity) {
    shoppingCart[id] = 1;
  } else {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const removeFromDb = (id) => {
  const shoppingCart = getShoppingCart();
  if (id in shoppingCart) {
    delete shoppingCart[id];
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
  }
};

const getShoppingCart = () => {
  let shoppingCart = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
    //console.log(storedCart);
  }
  //console.log(storedCart);
  return shoppingCart;
};

const deleteShoppingCart = () => {
  localStorage.removeItem("shopping-cart");
};

export { addToDb, removeFromDb, getShoppingCart, deleteShoppingCart };
