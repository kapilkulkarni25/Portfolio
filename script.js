let themeDots = document.getElementsByClassName("theme-dot");

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == "light") {
    document.getElementById("theme-style").href = "default.css";
  }
  if (mode == "blue") {
    document.getElementById("theme-style").href = "blue.css";
  }
  if (mode == "green") {
    document.getElementById("theme-style").href = "green.css";
  }
  if (mode == "purple") {
    document.getElementById("theme-style").href = "purple.css";
  }
}

window.onload = function () {
  VANTA.BIRDS({
    el: "#waves-bg",
    backgroundColor: 0xd2d56,
    backgroundAlpha: 0.91,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    scale: 1.00,
    scaleMobile: 1.00,
    birdSize: 0.8,
    wingSpan: 16.00,
    speedLimit: 3.00,
    separation: 50.00,
    alignment: 40.00,
    cohesion: 0.80,
    quantity: 3.00
  })

  let ticking = false;

  // Initialize ScrollReveal and check if it's available
  const sr = ScrollReveal();

  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        // Make sure ScrollReveal instance is available
        if (sr && document.querySelector('.js--fadeInLeft') && document.querySelector('.js--fadeInRight')) {
          sr.reveal('.js--fadeInLeft', {
            origin: 'left',
            distance: '300px',
            duration: 800
          });
          sr.reveal('.js--fadeInRight', {
            origin: 'right',
            distance: '300px',
            duration: 800
          });
        }
        ticking = false;
      });
      ticking = true;
    }
  });

}

// VANTA.WAVES({
//   el: "#waves-bg",
//   mouseControls: true,
//   touchControls: true,
//   gyroControls: false,
//   minHeight: 200.00,
//   minWidth: 200.00,
//   scale: 1.00,
//   scaleMobile: 1.00,
//   // color: 0x3988,
//   color: window.getComputedStyle(document.documentElement).getPropertyValue('--previewShadow'),
//   shininess: 65.00,
//   waveHeight: 27.50,
//   zoom: 0.89
// })


$('.post-wrapper').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
});
