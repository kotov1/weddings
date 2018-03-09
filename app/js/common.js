$(function() {

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

	var $grid = $('.grid').masonry({
		itemSelector: '.grid-item',
		columnWidth: 105,
		gutter: 20
	});

	$grid.imagesLoaded().progress( function() {
		$grid.masonry('layout');
	});


	$('.advantages-item1, .advantages-item3').mouseover(function() {
		$(this).find('.advantages-img-wrap').addClass('positionResetRight');
	});
	$('.advantages-item2').mouseover(function() {
		$(this).find('.advantages-img-wrap').addClass('positionResetLeft');
	});


	$('.feedbacks-slider-inner').slick({
		infinite: true,
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false
	});
	

	$('.fedbacks-slider-outer').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
	});

});