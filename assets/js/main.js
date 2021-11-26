(function ($) {

  let browserWindow = $(window);
  const menuBtn = document.querySelector('.menu-button');
  const hamburger = document.querySelector('.menu-button__burger');
  const mobileNav = document.querySelector('.mobile-menu');
  const themeSwitch = document.querySelector('.theme-toggle');
  const themeBody = document.querySelector('.theme');
  const moon = document.querySelector('.moon');
  const sun = document.querySelector('.sun');
  const logoDark = document.querySelector('.logo-dark');
  const logoLight = document.querySelector('.logo-light');
  const bodyColor = document.body;

  let showBool = false;

  menuBtn.addEventListener('click', toggleMenu);

  function toggleMenu(){
    if(!showBool){
      hamburger.classList.add('open')
      mobileNav.classList.add('open')
       showBool = true;
    }else{
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
      showBool = false;
    }
  }
  
   if ($.fn.scrollUp) {
    browserWindow.scrollUp({
      scrollSpeed: 1500,
      scrollText: '<i class="ri ri-arrow-up-line"></i>',
    });
  }

  $('.courses-slide').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            arrows: false,
            dots: true
          }
        },
      {
        breakpoint: 768,
        settings: {
        slidesToShow: 2,
        centerMode: false, /* set centerMode to false to show complete slide instead of 3 */
        slidesToScroll: 2,
        arrows: false,
        dots: true,
        }
      },
      {
      breakpoint: 480, 
      settings: {
        slidesToShow: 1,
        centerMode: false, /* set centerMode to false to show complete slide instead of 3 */
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      }
}
   ]
  });
  $('.work-slide').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            arrows: false,
            dots: true
          }
        },
      {
        breakpoint: 768,
        settings: {
        slidesToShow: 2,
        centerMode: false, /* set centerMode to false to show complete slide instead of 3 */
        slidesToScroll: 2,
        arrows: false,
        dots: true,
        }
      },
      {
      breakpoint: 480, 
      settings: {
        slidesToShow: 1,
        centerMode: false, /* set centerMode to false to show complete slide instead of 3 */
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      }
}
   ]
  });

  function onScrollNav() {
    browserWindow.on("scroll", function () {
      if ($(this).scrollTop() > 100) {
        $(".site-navbar").addClass("scroll");
      } else {
        $(".site-navbar").removeClass("scroll");
      }
    });
  }
  onScrollNav();


  $('a[href="#"]').on("click", function (e) {
    e.preventDefault();
  });
  $(".animsition").animsition({
    inClass: "fade-in",
    outClass: "fade-out",
    inDuration: 1500,
    outDuration: 800,
    linkElement: ".animsition-link",
    loading: true,
    loadingParentElement: "html",
    loadingClass: "animsition-loading-1",
    loadingInner: '<div class="loader05"></div>',
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: ["animation-duration", "-webkit-animation-duration"],
    overlay: false,
    overlayClass: "animsition-overlay-slide",
    overlayParentElement: "html",
    transition: function (url) {
      window.location.href = url;
    },
  });
  if (browserWindow.width() > 767) {
    new WOW().init();
  }

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });
})(jQuery);
