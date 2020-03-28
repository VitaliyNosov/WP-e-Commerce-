document.addEventListener("DOMContentLoaded", function() {

    $('.slider_header').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        vertical: true,
        autoplay: true,
        autoplaySpeed: 5000
    });

    $('.slider_cart').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        responsive:[  
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4
            }
      
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3
            }
      
          },
          {
          breakpoint: 769,
          settings: {
            slidesToShow: 2
          }
      
          },
          {
            breakpoint: 482,
            settings: {
              slidesToShow: 1
            }
      
          }
        ]
      });
	
});
