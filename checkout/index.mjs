import {
  addToCart,
  clearCart,
  getCart,
  getTotalNumberOfItemsInCart,
  removeFromCart,
} from '../scripts/utils/cart.mjs';
import { formatCurrency } from '../scripts/utils/formatCurrency.mjs';

const clearCartButton = document.getElementById('clear-cart');
clearCartButton.addEventListener('click', () => {
  clearCart();
  renderCheckoutPage();
});

function generateHtmlForGame(game) {
  const gameWrapper = document.createElement('div');

  const gameTitle = document.createElement('h3');
  gameTitle.textContent = game.title;

  const gameQuantity = document.createElement('div');
  gameQuantity.textContent = 'Quantity: ' + game.quantity;

  const gamePrice = document.createElement('div');
  gamePrice.textContent = 'Price: ' + game.price;

  const gamePriceTotal = document.createElement('div');
  gamePriceTotal.textContent =
    'Total: ' + formatCurrency(game.price * game.quantity);

  const quantityAdjustmentContainer = document.createElement('div');

  const incrementButton = document.createElement('button');
  incrementButton.textContent = '+';
  incrementButton.addEventListener('click', () => {
    addToCart(game);
    renderCheckoutPage();
  });

  const decrementButton = document.createElement('button');
  decrementButton.textContent = '-';
  decrementButton.addEventListener('click', () => {
    removeFromCart(game);
    renderCheckoutPage();
  });

  quantityAdjustmentContainer.append(incrementButton, decrementButton);

  gameWrapper.append(
    gameTitle,
    gameQuantity,
    gamePrice,
    gamePriceTotal,
    quantityAdjustmentContainer,
  );
  return gameWrapper;
}

function displayCartItems() {
  const displayContainer = document.getElementById('cart-items-display');
  displayContainer.textContent = '';
  const cart = JSON.parse(localStorage.getItem('cart'));

  cart.forEach(function (currentItem) {
    const itemHtml = generateHtmlForGame(currentItem);
    displayContainer.appendChild(itemHtml);
  });
}

// 1. Get the container ✅
// 2. Get the cart ✅
// 3. Calculate the number of items in the cart
// 4. Update the container with the right amount of items
function displayCartCounter() {
  const cartCounterContainer = document.getElementById('cart-counter');
  console.log(cartCounterContainer);
  const totalNumberOfItems = getTotalNumberOfItemsInCart();
  cartCounterContainer.textContent = totalNumberOfItems;
}

function renderCheckoutPage() {
  displayCartCounter();
  displayCartItems();
}

function main() {
  renderCheckoutPage();
}

main();
