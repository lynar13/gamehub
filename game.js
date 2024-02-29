const detailsContainer = document.querySelector('.product-details');

// Show game details 
async function showGameDetails(event) {
  const index = event.target.dataset.index;
  try {
    const response = await fetch('https://v2.api.noroff.dev/gamehub/${index}');
    const games = await response.json();
    detailsContainer.innerHTML = `
      <img src="${game.image}" alt="boxer">
      <h2>${game.title}<h2>
      <p>${game.description}<p>
      <p>${game.genre}<p>
      <p>${game.released}<p>
      <p>${game.price}<p>
      <p>${game.discountedPrice}<p>
      
      `;
  } catch (error) {
    console.error('Error fetching game details:', error);
  }
  
}