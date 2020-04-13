//Adaptive functions
//====================  Mobile Menu ========================//
$('.nav-menu__icon').click(function (event) {
	$(this).toggleClass('active');
	$('.header-nav-menu').toggleClass('active');
});

$(window).resize(function (event) {
	adaptive_function();
});
function adaptive_header(w, h) {
	const headerBtn = $('.intro__btn');

	if (w < 992.98) {
		if (!headerBtn.hasClass('done')) {

			headerBtn.addClass('done')
			$('.header-menu-list').append(headerBtn);
		}
	} else {
		if (headerBtn.hasClass('done')) {
			headerBtn.removeClass('done').appendTo('.intro-bottom__line');
		}
	}
}
function adaptive_function() {
	var w = $(window).outerWidth();
	var h = $(window).outerHeight();
	adaptive_header(w, h);
}
adaptive_function();