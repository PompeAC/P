$(document).ready(function() {
  // MagnificPopup
  var magnifPopup = function() {
    $('.image-popup').magnificPopup({
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-with-zoom',
      gallery:{
        enabled:true
      },
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
        // openerElement is the element on which popup was initialized, in this case its <a> tag
        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
        return openerElement.is('img') ? openerElement : openerElement.find('img');
        }       
      }
    });
  };

    // Show/hide the button based on scroll position
    var togglePopupButton = function() {
      var scrollPosition = $(window).scrollTop();
      var windowHeight = $(window).height();
      var endOfSecondPagePosition = $('#end-of-second-page').offset().top;
      var footerPosition = $('.site-footer').offset().top;

      if (scrollPosition + windowHeight >= endOfSecondPagePosition && scrollPosition + windowHeight < footerPosition) {
          $('#popup-button').fadeIn();
      } else {
          $('#popup-button').fadeOut();
      }
  };

  // Open pop-up when the button is clicked
  $('#popup-button').on('click', function() {
      $.magnificPopup.open({
          items: {
              src: '#popup-content'
          },
          type: 'inline',
          removalDelay: 300,
          mainClass: 'mfp-fade'
          
      });
  });

  // Close pop-up when the close button is clicked
  $('#close-popup').on('click', function() {
      $.magnificPopup.close();
  });

  // Call the functions
  magnifPopup();
  
  // Initial check on page load
  togglePopupButton();

  // Check on scroll
  $(window).on('scroll', function() {
      togglePopupButton();
  });
});
