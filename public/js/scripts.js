var home = (function () {


    var menu = function () {

        var _menuServicios = $('#menuServicios'),
        _menuSedes = $('#menuSedes'),
        _menuHome = $('#menuHome'),
        _menuContacto = $('#menuContacto');

        _menuHome.on('click', function () {
            //e.preventDefault();
            $('#menuContent li a').removeClass('active');
            $(this).addClass('active');
            $('html, body').animate({
                scrollTop: $("#header").offset().top
            }, 500);
            return true;
        });

        _menuContacto.on('click', function () {
          $('#menuContent li a').removeClass('active');
          $(this).addClass('active');
          $('html, body').animate({
              scrollTop: $("#header").offset().top
          }, 500);
          return true;
      });

        _menuServicios.on('click', function () {
            //e.preventDefault();
            $('#menuContent li a').removeClass('active');
            $(this).addClass('active');
            $('html, body').animate({
                scrollTop: $("#sectionServices").offset().top
            }, 500);
            return true;
        });

        _menuSedes.on('click', function (e) {
            e.preventDefault();
            $('#menuContent li a').removeClass('active');
            $(this).addClass('active');
            $('html, body').animate({
                scrollTop: $("#sectionSedes").offset().top
            }, 500);
            return true;
        });
        //
        $('#banner').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            arrows: false,
            dots: true,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]
        });

    }



    return {
        init: function () {
            menu();
        },
    }
})()

$(document).ready(function () {
    home.init()
})
