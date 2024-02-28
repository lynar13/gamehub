import { API_GAMES_URL } from './scripts/constants.mjs';
import { addToCart, clearCart } from './scripts/utils/cart.mjs';
import { doFetch } from './scripts/utils/doFetch.mjs';

export const API_GAMES_URL = `${API_BASE_URL}/gamehub/ded6041a-622f-4fb4-81e4-96fcfdad4dff`;

function generateGameHtml(game) {

    const gameContainer = document.createElement('div');
    gameContainer.classList.add('game-container');

    const gameImage = document.createElement("img");
    gameImage.classList.add("game-image");
	gameImage.src = game.image.url;


  gamePriceContainer.append(priceText, gamePrice, discountedText, gameDiscountedPrice);
  gameContainer.append(gameImage, heading, description, genre, gamePriceContainer, gameBuyButton, singleProduct, );
  gameWrapper.appendChild(gameContainer);

  return gameWrapper;
}

{/* <div class="game-image">
        <img src=${game.image} alt="boxer">
    </div>
            
        <h3 class="game-title">${game.title}</h3>
        <p class="game-description">${game.description}</p>
        <p class="game-genre">${game.genre}</p>
        <p class="game-released">${game.released}</p>
        <p class="game-age-rating">${game.ageRating}</p>
            
        <div class="game-price-container">
            <p class="game-price">${game.price}</p>
            <p class="game-discounted-price">${game.discountedPrice}</p>
        </div>`;  */}