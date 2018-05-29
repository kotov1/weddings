$(function() {

	// Video at main page
	$(document).on('click','.js-videoPoster',function(e) {
		e.preventDefault();
		var poster = $(this);
		var wrapper = poster.closest('.js-videoWrapper');
		videoPlay(wrapper);
	});
	function videoPlay(wrapper) {
		var iframe = wrapper.find('.js-videoIframe');
		var src = iframe.data('src');
		wrapper.addClass('videoWrapperActive');
		iframe.attr('src',src);
	}


	// Masonry
	var $grid = $('.grid').masonry({
		itemSelector: '.grid-item',
		columnWidth: 105,
		gutter: 20
	});
	$(document).ready(function() {
		if( $(window).width() < 1199 ){
			 $grid.masonry('destroy');
			} else {
				$grid.imagesLoaded().progress( function() {
				$grid.masonry('layout');
			});
		}
	});

	


	$('.advantages-item1, .advantages-item3').mouseover(function() {
		$(this).find('.advantages-img-wrap').addClass('positionResetRight');
	});
	$('.advantages-item2').mouseover(function() {
		$(this).find('.advantages-img-wrap').addClass('positionResetLeft');
	});



	// feedbacks double slider
		$('.feedbacks-slider-inner').slick({
			infinite: true,
			autoplay: true,
			autoplaySpeed: 2000,
			slidesToShow: 1,
			slidesToScroll: 1,
			lazyLoad: 'ondemand',
			arrows: false
		});
	

	$('.fedbacks-slider-outer').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 5000,
		responsive: [
		{
			breakpoint: 767,
			settings: {
				adaptiveHeight: true
			}
		}
	]
	});




	$('.services-responsive-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
		{
			breakpoint: 997,
			settings: {
				slidesToShow: 1,
				arrows: true
			}
		}
	]
	});
	






	$(".footer-nav-scroll-link").click(function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});

	$(".js-scroll-down").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});




	//open popup
	$('.js-modal-call').on('click', function(event){
		event.preventDefault();
		$('.cd-popup').addClass('is-visible');
	});
	
	//close popup
	$('.cd-popup').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
			if(event.which=='27'){
				$('.cd-popup').removeClass('is-visible');
			}
		});


	$('form input').on('change', function() {
		var input = $(this);
		if (input.val().length) {
			input.addClass('populated');
		} else {
			input.removeClass('populated');
		}
	});


	$(".form").submit(function(e) {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
			$(".form-btn").val("Отправлено");
			$(".form-btn").attr("disabled","");
			setTimeout(function() {
				th.trigger("reset");
				$(".form-btn").val("перезвоните мне");
				$(".form-btn").removeAttr("disabled");
				$('.cd-popup').removeClass('is-visible');
			}, 3000);
		});
		return false;
	});	

});