jQuery(document).ready(function ($) {
  $('.header-section-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    items: 1,
    autoplay: true,
  });
  var owl = $('.customer-review-carousel');
  owl.owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      769: {
        items: 1,
      },
      993: {
        items: 2,
      },
    },
  });

  // Custom Button customer-review-carousel
  $('.carousel_custom_next_btn').click(function () {
    owl.trigger('next.owl.carousel');
  });
  $('.carousel-custom-left-btn').click(function () {
    owl.trigger('prev.owl.carousel');
  });

  var owl2 = $('.real-world-carousel');
  owl2.owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      769: {
        items: 2,
      },
      993: {
        items: 3,
      },
    },
  });

  // Custom Button real-world-carousel
  $('.real-world-right-icon').click(function () {
    owl2.trigger('next.owl.carousel');
  });
  $('.real-world-left-icon').click(function () {
    owl2.trigger('prev.owl.carousel');
  });
});

// accordion tabs js

$(document).ready(function () {
  $('.accordion-item').click(function () {
    $('.accordion-item').removeClass('active'); // remove class from all buttons
    $(this).addClass('active'); // add class to clicked button
  });
});

// save email in local storage

const form = document.getElementById('myForm');
const toastContainer = document.getElementById('toastContainer');

function showNotification(message) {
  toastContainer.innerText = message;
  toastContainer.style.display = 'block';

  // Hide the toast after a short delay (e.g., 3 seconds)
  setTimeout(() => {
    toastContainer.style.display = 'none';
  }, 3000);
}

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const name = formData.get('name');
  const email = formData.get('email');

  // Store form data in local storage
  localStorage.setItem('name', name);
  localStorage.setItem('email', email);

  // Show the toast notification
  showNotification('Form data submitted successfully!');

  form.reset();
}

form.addEventListener('submit', handleSubmit);

// page loader js

window.addEventListener('load', function () {
  var loader = document.getElementById('loader');
  loader.style.display = 'none';
});

// scroll to Top

const scrollBtn = document.querySelector('.btn-top');
const btnVisibility = () => {
  if (window.scrollY > 400) {
    scrollBtn.style.visibility = 'visible';
  } else {
    scrollBtn.style.visibility = 'hidden';
  }
};

document.addEventListener('scroll', () => {
  btnVisibility();
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
