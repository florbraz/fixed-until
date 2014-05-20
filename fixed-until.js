$(window).on('load resize', function(e) {
	var evt = e.type;
	
	$('[data-fixed-limit]').attr('style', '');

	if ($(window).width() >= 768) {

		$('[data-fixed-limit]').each(function() {
			if ($(window).width() >= 1280) {
				$(this).width($(this).width());
			}
			var headerHeight = $('.topbar').outerHeight();
			var $this = $(this);
			var limitTop = $(this).offset().top;
			var limitElement =  $(this).attr('data-fixed-limit');
			var limitHeight = $(limitElement).height();
			var limitBottom = $(limitElement).offset().top;
			var elementHeight = $(this).height();
			
			$(window).on('scroll resize', function() {	
				var scrollTop = $(window).scrollTop();
				if (scrollTop + headerHeight >= limitTop)  {
					$this.css({
						'position':'fixed'
					});
					if (scrollTop + elementHeight + headerHeight <= limitHeight + limitBottom ) {
						$this.css({
							'top': headerHeight
						});
					} else {
						$this.css({
							'top': limitHeight - scrollTop - elementHeight  + limitTop
						});	
					}
				} else {
					$this.attr('style', '');
				}
			});
		});
	}
});