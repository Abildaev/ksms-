document.addEventListener('DOMContentLoaded', function (event) {

  (function (d, s, id) {
    var js;
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://embedsocial.com/embedscript/in.js';
    d.getElementsByTagName('head')[0].appendChild(js);
  }(document, 'script', 'EmbedSocialInstagramScript'));




  var mySwiper = new Swiper('.banner__slider', {
    // Optional parameters
    loop: true,
    speed: 3000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    }
  })

  var mySwiper = new Swiper('.banner__text-slider', {
    // Optional parameters
    loop: true,
    speed: 1000,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    }
  })



  var mySwiper = new Swiper('.partners__slider', {
    // Optional parameters
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 768px
      768: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 3
      }
    }
  })

  const menu = new MmenuLight(
    document.querySelector('#my-menu'),
    '(max-width: 600px)'
  );

  const navigator = menu.navigation({
    title: 'www.ksms.kg',

  });

  const drawer = menu.offcanvas({
    position: 'right',
  });

  document.querySelector('a[href="#my-menu"]')
    .addEventListener('click', (evnt) => {
      evnt.preventDefault();
      drawer.open();
    });


  new WOW().init();

})

document.body.style.overflow = 'hidden';

function changeNav() {
  const preloader = document.querySelector('#preloader__wrap');
  preloader.classList.add('preloader__none');
  document.body.style.overflow = 'visible';
  const distanceY = this.pageYOffset;
  const nav = document.querySelector('.nav')
  const header = document.querySelector('.header')
  distanceY >= 720 ? (nav.classList.add('nav__fixed'), header.classList.add('header__mb')) : (nav.classList.remove('nav__fixed'), header.classList.remove('header__mb'));
}

window.addEventListener('load', changeNav);

window.addEventListener('scroll', changeNav);


// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });
