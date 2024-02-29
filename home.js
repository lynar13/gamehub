import { API_GAMES_URL } from './scripts/constants.mjs';
import { addToCart, clearCart } from './scripts/utils/cart.mjs';
import { doFetch } from './scripts/utils/doFetch.mjs';

const actionGenreButton = document.getElementById('genre-action');
const adventureGenreButton = document.getElementById('genre-adventure');
const horrorGenreButton = document.getElementById('genre-horror');
const sportGenreButton = document.getElementById('genre-sport');
const genreClearButton = document.getElementById('genre-clear');


let chosenGenre = '';



// 1. Create buttons for the genres
// 2. Set the genre variable based on what was clicked
// 3. Rerender the games
actionGenreButton.addEventListener('click', () => {
  chosenGenre = 'Action';
  renderHomePage();
});
adventureGenreButton.addEventListener('click', () => {
  chosenGenre = 'Adventure';
  renderHomePage();
});
horrorGenreButton.addEventListener('click', () => {
  chosenGenre = 'Horror';
  renderHomePage();
});
sportGenreButton.addEventListener('click', () => {
  chosenGenre = 'Sports';
  renderHomePage();
});
genreClearButton.addEventListener('click', () => {
  chosenGenre = '';
  renderHomePage();
});

const clearCartButton = document.getElementById('clear-cart');
clearCartButton.addEventListener('click', () => {
  clearCart();
});

function createCart() {
  const cart = localStorage.getItem('cart');
  if (!cart) {
    localStorage.setItem('cart', JSON.stringify([]));
  }
}



// Generate HTML Dynamically

function generateGameHtml(game) {
  const gameWrapper = document.createElement('div');
  gameWrapper.classList.add('game-wrapper');

  const gameContainer = document.createElement('div');
  gameContainer.classList.add('game-container');

  const gameImage = document.createElement("img");
  gameImage.classList.add("game-image");
	gameImage.src = game.image.url;
  
  
  const heading = document.createElement('h3');
  heading.textContent = game.title;

  const description = document.createElement('p');
  description.textContent = game.description;
  description.classList.add('game-description');

  const genre = document.createElement('div');
  genre.textContent = game.genre;
  genre.classList.add('game-genre');
  const gamePriceContainer = document.createElement('div');

  const priceText = document.createElement('h5');
  priceText.textContent = 'Price';

  const gamePrice = document.createElement('div');
  gamePrice.textContent = game.price;

  const discountedText = document.createElement('h5');
  discountedText.textContent = 'Discounted Price';

  const gameDiscountedPrice = document.createElement('div');
  gameDiscountedPrice.textContent = game.discountedPrice;

  const viewDetails = document.createElement('button');
  viewDetails.textContent ='View Details';
  viewDetails.classList.add('product-details');

  viewDetails.addEventListener('click', showGameDetails);
  
  const gameBuyButton = document.createElement('button');
  gameBuyButton.textContent = 'Add to cart';
  gameBuyButton.classList.add('game-buy-button');

  gameBuyButton.addEventListener('click', () => {
    addToCart(game);
  });

  gamePriceContainer.append(priceText, gamePrice, discountedText, gameDiscountedPrice);
  gameContainer.append(gameImage, heading, description, genre, gamePriceContainer, gameBuyButton, viewDetails);
  gameWrapper.appendChild(gameContainer);

  return gameWrapper;
}



// 1. Get the games
// 2. We need to get the filter criteria i.e. "category"
// 3. We need to filter based on the category
// 4. Display the games that have been filtered
function displayGames(games) {
  const gamesDisplayContainer = document.getElementById('games-display');
  gamesDisplayContainer.textContent = '';
  games
    .filter((game) => {
      if (game.genre === chosenGenre || chosenGenre === '') {
        return true;
      }
    })
    .forEach((game, index) => {
      const gameHtml = generateGameHtml(game);
      gamesDisplayContainer.appendChild(gameHtml);
    });
}

async function renderHomePage() {
  const responseData = await doFetch(API_GAMES_URL);
  const games = responseData.data;
  displayGames(games);
}


async function main() {
  createCart();
  await renderHomePage();
}

main();



