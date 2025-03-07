// Script
let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');
let process = document.querySelector('.process');

document.querySelector('#menu-btn').onclick = () => {
   navbar.classList.toggle('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
};

document.querySelector('#search-btn').onclick = () => {
   searchForm.classList.toggle('active');
   navbar.classList.remove('active');
   loginForm.classList.remove('active');
};

document.querySelector('#login-btn').onclick = () => {
   loginForm.classList.toggle('active');
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
};

document.querySelector('#info-btn').onclick = () => {
   contactInfo.classList.toggle('active');
};

document.querySelector('#info-btn').onclick = () => {
   contactInfo.classList.add('active');
};

document.querySelector('#close-contact-info').onclick = () => {
   contactInfo.classList.remove('active');
};

window.onscroll = () => {
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
   contactInfo.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
   loop: true,
   grabCursor: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".reviews-slider", {
   loop: true,
   grabCursor: true,
   spaceBetween: 20,
   breakpoints: {
      640: {
         slidesPerView: 1
      },
      768: {
         slidesPerView: 2
      },
      991: {
         slidesPerView: 3
      },
   }
});

var swiper = new Swiper(".blogs-slider", {
   loop: true,
   grabCursor: true,
   spaceBetween: 20,
   breakpoints: {
      640: {
         slidesPerView: 1
      },
      768: {
         slidesPerView: 2
      },
      991: {
         slidesPerView: 3
      },
   }
});

var swiper = new Swiper(".logo-slider", {
   loop: true,
   grabCursor: true,
   spaceBetween: 20,
   breakpoints: {
      450: {
         slidesPerView: 2
      },
      640: {
         slidesPerView: 3
      },
      768: {
         slidesPerView: 4
      },
      1000: {
         slidesPerView: 5
      },
   }
});

document.addEventListener("DOMContentLoaded", () => {
   const counters = document.querySelectorAll(".counter");

   counters.forEach(counter => {
      const target = +counter.getAttribute("data-target"); // Get the target number
      const increment = target / 100; // Increment value for smooth animation

      let current = 0;

      const updateCounter = () => {
         if (current < target) {
            current += increment;
            counter.textContent = `${Math.ceil(current)}+`;
            setTimeout(updateCounter, 30); // Update every 20ms
         } else {
            counter.textContent = `${target}+`; // Ensure the final value is accurate
         }
      };

      updateCounter();
   });
});

var swiper = new Swiper('.home-slider', {
   speed: 1000,
   autoplay: {
      delay: 5000,
      disableOnInteraction: false,
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});

var process_slide = new Swiper('.process', {
   speed: 1000,
   autoplay: {
      delay: 5000,
      disableOnInteraction: false,
   },
   slidesPerView: 3, // Show 3 slides at once
   spaceBetween: 20, // Add spacing between slides
   loop: true, // Enable continuous sliding
   pagination: {
      el: '.swiper-pagination', // Optional: Add pagination if desired
      clickable: true,
   },
   navigation: { // Optional: Add navigation arrows if in your HTML
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   breakpoints: { // Responsive adjustments
      0: {
         slidesPerView: 1, // 1 slide on very small screens
         spaceBetween: 10,
      },
      768: {
         slidesPerView: 2, // 2 slides on tablets
         spaceBetween: 15,
      },
      1024: {
         slidesPerView: 3, // 3 slides on desktop
         spaceBetween: 20,
      },
   },
});





































































































/* let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () => {
   navbar.classList.toggle('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
};

document.querySelector('#search-btn').onclick = () => {
   searchForm.classList.toggle('active');
   navbar.classList.remove('active');
   loginForm.classList.remove('active');
};

document.querySelector('#login-btn').onclick = () => {
   loginForm.classList.toggle('active');
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
};

document.querySelector('#info-btn').onclick = () => {
   contactInfo.classList.add('active');
}

document.querySelector('#close-contact-info').onclick = () => {
   contactInfo.classList.remove('active');
}

window.onscroll = () => {
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
   contactInfo.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
   loop: true,
   grabCursor: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".reviews-slider", {
   loop: true,
   grabCursor: true,
   spaceBetween: 20,
   breakpoints: {
      640: {
         slidesPerView: 1,
      },
      768: {
         slidesPerView: 2,
      },
      991: {
         slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".blogs-slider", {
   loop: true,
   grabCursor: true,
   spaceBetween: 20,
   breakpoints: {
      640: {
         slidesPerView: 1,
      },
      768: {
         slidesPerView: 2,
      },
      991: {
         slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".logo-slider", {
   loop: true,
   grabCursor: true,
   spaceBetween: 20,
   breakpoints: {
      450: {
         slidesPerView: 2,
      },
      640: {
         slidesPerView: 3,
      },
      768: {
         slidesPerView: 4,
      },
      1000: {
         slidesPerView: 5,
      },
   },
}); */