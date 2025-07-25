;(function () {
	
	'use strict';

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
	    	}
	    }
		});

	};


	var offcanvasMenu = function() {

		$('#page').prepend('<div id="fh5co-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#fh5co-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#fh5co-offcanvas').append(clone2);

		$('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#fh5co-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
		});
	};


	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};



	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var testimonialCarousel = function(){
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			responsiveClass: true,
			nav: false,
			dots: true,
			smartSpeed: 800,
			autoHeight: true,
		});
	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};


	// Loading page
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#fh5co-counter').length > 0 ) {
			$('#fh5co-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};

	
	$(function(){
		mobileMenuOutsideClick();
		parallax();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		dropdown();
		testimonialCarousel();
		goToTop();
		loaderPage();
		counter();
		counterWayPoint();
	});


}());
/*

$(document).ready(function() {
	$.ajax({
		url: ' http://34.125.87.195/simple-comment-api/public/api/all-comments?to=khanh-tram',
		method: 'GET',
		success: function (data) {
			$('.wish-count').text(data.count)
			if(data.count) {
				for(let comment of data.comments) {
					fillComments(comment, 'after', 'hide-comment')
				}
			}
			loadComment()
		}
	})

	function fillComments(comment, pos = 'after', addClass = '') {
		let html = '				<div class="be-comment comment-line '+addClass+'">\n' +
			'                            <div class="be-img-comment">\n' +
			'                                <img src="'+comment.avatar+'" class="be-ava-comment">\n' +
			'                            </div>\n' +
			'                            <div class="be-comment-content">\n' +
			'                                <span class="be-comment-name">'+comment.by+'</span>\n' +
			'                                <span class="be-comment-time"><i class="fa fa-clock"></i> '+comment.clock+'</span>\n' +
			'                                <p class="be-comment-text">'+comment.content+'</p>\n' +
			'                            </div>\n' +
			'                        </div>'

		if (pos === 'after')
			$('.comment-lines').append(html)
		else
			$('.comment-lines').prepend(html)
	}

	$('#more-comments').click(function (e) {
		loadComment()
	})

	function loadComment() {
		let lines = $('.comment-lines .comment-line')
		let load_count = 0, load_max = 10
		for(let i = 0; i < lines.length; i++) {
			let line = lines[i]
			if(load_count < load_max && line.classList.contains('hide-comment')) {
				line.classList.remove('hide-comment')
				load_count++
			}
		}
		if(load_count < load_max) {
			$('#more-comments').addClass("disabled")
		}
	}

	$('#send-comment').click(function (e) {
		if($('#send-comment').hasClass('disabled')){
			return
		}
		if(!$('#wish-content').val()) {
			$('#wish-content').focus()
			return
		}
		if(!$('#wish-by').val()) {
			$('#wish-by').focus()
			return
		}
		$.ajax({
			url: 'http://34.125.87.195/simple-comment-api/public/api/new-comment',
			method: 'POST',
			data: {by: $('#wish-by').val(), to: 'khanh-tram', content: $('#wish-content').val()},
			success: function (data) {
				if (data.error) {
					$.alert({
						title: 'Alert!',
						content: 'Vui long thử lại lần nữa!',
					});
					return
				}
				fillComments(data.comment, 'before')
				$('#wish-by').val('')
				$('#wish-content').val('')
				$('.wish-count').text(parseInt($('.wish-count').text()) + 1)
				$('#send-comment').addClass('disabled')
			},
			error: function (e) {
				console.log(e)
			}
		})
	})
})*/
