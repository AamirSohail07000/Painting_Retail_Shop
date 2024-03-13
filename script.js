const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

/* Check if navbar is already open, if not & clicked it'll be open & vice versa */
if (bar) { 
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    }) 
}

if (close) { 
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    }) 
}

// JavaScript to loop through the images and apply the active class
const images = document.querySelectorAll("#ShopPic img");

let index = 0;

setInterval(() => {
    images[index].classList.remove("active");
    index = (index + 1) % images.length;
    images[index].classList.add("active");
}, 5000); // Change image every 5 seconds

//Javascript to hide header when scrolling up
let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let windowWidth = window.innerWidth; // Get window width

    if (scrollTop > lastScrollTop && windowWidth > 599) { // Only hide header on larger screens
        // Scrolling down
        header.classList.add('header-hidden');
    } else {
        // Scrolling up or on small screens
        header.classList.remove('header-hidden');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});
