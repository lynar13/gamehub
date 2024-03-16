const bar = document.getElementById('bar');
const nav = document.querySelector('.nav-list'); // Use querySelector to select the first element with the class 'nav-list'

if (bar && nav) { // Check if both bar and nav elements exist
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  });
}
