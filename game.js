import { addToCart} from './scripts/utils/cart.mjs';
import { doFetch } from './scripts/utils/doFetch.mjs';

document.addEventListener('DOMContentLoaded', async () => {
    // Extract the gameId from the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get('gameId');

    if (!gameId) {
        console.error('No gameId provided');
        return;
    }

    // Fetch game details from the API using the gameId
    try {
        const apiUrl = `https://v2.api.noroff.dev/gamehub/14a20cf0-c230-45dd-a47f-7d0e76b73e3f?gameId=${gameId}`;
        const response = await doFetch(apiUrl);
        const gameDetails = response.data; // Assuming the data is directly accessible under the "data" property
        

        displayGameDetails(gameDetails);
    } catch (error) {
        alert('Error fetching game details:', error);
        // Handle error scenario
    }
});

function createCart() {
    const cart = localStorage.getItem('cart');
    if (!cart) {
      localStorage.setItem('cart', JSON.stringify([]));
    }
  }

// Display game details on the page
function displayGameDetails(gameDetails) {
    // Update the content of HTML elements with game details
    const gameDetailsContainer = document.getElementById('game-details-container');

    const gameImage = document.createElement("img");
    gameImage.classList.add("game-image");
    gameImage.src = gameDetails.image.url;

    const gameTextContainer = document.createElement('div');
    gameTextContainer.classList.add('game-text-container');

    const heading = document.createElement('h2');
    heading.textContent = gameDetails.title;

    const ageRating = document.createElement('p');
    ageRating.textContent = gameDetails.ageRating;

    const gameGenre = document.createElement('h4');
    gameGenre.textContent = gameDetails.genre;
    gameGenre.classList.add('game-genre');

    const released = document.createElement('p');
    released.textContent = gameDetails.released;
    released.classList.add('game-released');

    const gamePriceContainer = document.createElement('div');
    gamePriceContainer.classList.add('game-price-container');

    const priceText = document.createElement('h5');
    priceText.textContent = 'Price';
    priceText.classList.add('price-text');

    const price = document.createElement('p');
    price.textContent = gameDetails.price;
    price.classList.add('game-price');

    const priceDiscountedText = document.createElement('h5');
    priceDiscountedText.textContent = 'Discounted Price';
    priceDiscountedText.classList.add('discounted-price-text');

    const discountedPrice = document.createElement('p');
    discountedPrice.textContent = gameDetails.discountedPrice;
    discountedPrice.classList.add('game-discounted-price');

    const description = document.createElement('p');
    description.textContent = gameDetails.description;
    description.classList.add('game-description');

    const gameDetailsBuyButton = document.createElement('button');
    gameDetailsBuyButton.textContent = 'Add to cart';
    gameDetailsBuyButton.classList.add('game-buy-button');

    gameDetailsBuyButton.addEventListener('click', () => {
        addToCart(gameDetails);
      });
    
    

      
    gameDetailsContainer.appendChild(gameImage);
    gameDetailsContainer.append(gameTextContainer);
    gameDetailsContainer.append(heading, ageRating, gameGenre,released);
    gameDetailsContainer.appendChild(description);
    gamePriceContainer.append(priceText, price, priceDiscountedText, discountedPrice);
    gameDetailsContainer.append(gamePriceContainer);
    gameDetailsContainer.appendChild(gameDetailsBuyButton);
   
    
}


  
  
  