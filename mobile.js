const bar = document.getElementById('bar');
const nav = document.getElementsByClassName('nav-list');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classlist.add('active');
    });
}