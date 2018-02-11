/*  ------------------
    Remove Preloader
    ------------------  */
window.onload = function() {
  $('#preloader').delay(500).fadeOut('slow', function () {
      $('.profile-page, .resume-page, .contact-page, .portfolio-page').hide();
  });
};
// $(window).load(function () {
//     $('#preloader').delay(350).fadeOut('slow', function () {
//         $('.profile-page, .resume-page, .contact-page, .portfolio-page').hide();
//     });
// });


$(function () {
	var $pages = $('.profile-page, .resume-page, .contact-page, .portfolio-page');
	var $homePage = $('.home-page');
	var $introduction = $('.introduction')
	var $menu = $('.menu');

	var close = {
		init: function () {
			this.cacheDom();
			this.bindEvents();
			// this.render();
		},
		cacheDom: function () {
			this.$closeBtn = $('.close-btn');
		},
		bindEvents: function () {
			this.$closeBtn.click(this.closePage.bind(this))
		},
		closePage: function (event) {
			$homePage.css('visibility','visible');
			$('.introduction, .menu').animate({left: 0}, 1000, 'easeOutQuart');
			$pages.fadeOut(800);
		}
	};

	close.init();
	
	//Hide menu
	$('.menu>ul>li').on('click', function () {

        var introWidth = $introduction.width(),
            menuWidth = $menu.width();

        $introduction.animate({
            left: '-' + introWidth
        }, 1000, 'easeOutQuart');
        $menu.animate({
            left: menuWidth
        }, 1000, 'easeOutQuart', function () {
            $homePage.css({
                visibility: 'hidden'
            });
        });

    });

    // Show Reletive Page Onclick

    $('#profile-page-link').on('click', function () {
        $('.profile-page').fadeIn(1200);
    });

    $('#resume-page-link').on('click', function () {
        $('.resume-page').fadeIn(1200);
    });

    $('#portfolio-page-link').on('click', function () {
        $('.portfolio-page').fadeIn(1200);
    });

    $('#contact-page-link').on('click', function () {
        $('.contact-page').fadeIn(1200);
    });

})