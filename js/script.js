


$(document).ready(function () {
    $(window).scroll(function () {
        $('header').toggleClass("sholb", ($(window).scrollTop() > 100));
    });
});




// movie to top button 

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
function topFunction() {
    const scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, c - c / 8);
        }
    };
    scrollToTop();
}



// Owl Carousel

$(function () {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 9,
        margin: 10,
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4 // Number of items to show on tablets
            },

            991: {
                items: 6
            },
            1200: {
                items: 9 // Number of items to show on desktops
            }
            // You can add more breakpoints as needed
        }
    });
});
