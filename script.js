const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

/* we have to check if navbar is already open, if not & clicked it'll be open & vice versa */
if (bar) { 
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    }) /*  */
}

if (close) { 
    bar.addEventListener('click', () => {
        nav.classList.remove('active')
    }) /*  */
}

// JavaScript to loop through the images and apply the active class
const images = document.querySelectorAll("#ShopPic img");

let index = 0;

setInterval(() => {
    images[index].classList.remove("active");
    index = (index + 1) % images.length;
    images[index].classList.add("active");
}, 5000); // Change image every 5 seconds
