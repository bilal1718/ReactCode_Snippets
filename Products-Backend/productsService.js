const lodash = require("lodash");
const productsList = require("./products.json").products;

const getProducts = () => {
  // Return all products
  return productsList;
}

const getProductsById = (productId, done) => {
  // Find a product by ID
  const product = productsList.find(product => product.id === parseInt(productId));
  return done(null, product ? JSON.stringify(product) : null);
}

const saveProduct = (newProduct, done) => {
  // Add a new product
  productsList.push(newProduct);
  return done(null, JSON.stringify(productsList));
}

const updateProduct = (productId, updateData, done) => {
  // Find the product by ID and update its details
  const productIndex = productsList.findIndex(product => product.id === parseInt(productId));
  if (productIndex !== -1) {
    productsList[productIndex] = { ...productsList[productIndex], ...updateData };
    return done(null, JSON.stringify(productsList));
  } else {
    return done(new Error("Product not found"), null);
  }
}

const deleteProduct = (productId, done) => {
  // Find the product by ID and remove it from the list
  const productIndex = productsList.findIndex(product => product.id === parseInt(productId));
  if (productIndex !== -1) {
    productsList.splice(productIndex, 1);
    return done(null, JSON.stringify(productsList));
  } else {
    return done(new Error("Product not found"), null);
  }
}

module.exports = {
  getProducts,
  getProductsById,
  saveProduct,
  updateProduct,
  deleteProduct
}
