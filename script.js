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
  setTimeout(function () {
    VANTA.BIRDS({
      el: "#waves-bg",
      backgroundColor: 0xd2d56,
      backgroundAlpha: 0.91,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      colorMode: "variance",
      birdSize: 1.10,
      wingSpan: 19.00,
      speedLimit: 4.00,
      separation: 68.00,
      alignment: 43.00,
      cohesion: 1.00,
      quantity: 4.00
    })
  }, 1000);

  $(function () {
    window.sr = ScrollReveal();

    if ($(window).width() < 768) {
      if ($(".timeline-content").hasClass("js--fadeInLeft")) {
        $(".timeline-content")
          .removeClass("js--fadeInLeft")
          .addClass("js--fadeInRight");
      }

      sr.reveal(".js--fadeInRight", {
        origin: "right",
        distance: "300px",
        easing: "ease-in-out",
        duration: 800
      });
    } else {
      sr.reveal(".js--fadeInLeft", {
        origin: "left",
        distance: "300px",
        easing: "ease-in-out",
        duration: 800
      });

      sr.reveal(".js--fadeInRight", {
        origin: "right",
        distance: "300px",
        easing: "ease-in-out",
        duration: 800
      });
    }

    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800
    });
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
