$(document).ready(function() {
	$('.dialog__body-item').on('click', function(e){
		$('.dialog__body-item.selected-dialog').removeClass('selected-dialog');
		$(this).addClass('selected-dialog');
	});
	
	$('.dialog__body').customScroll({
		offsetTop: 1,
		offsetBottom: 1
	});
	$('.msg-history__chat-wrap').customScroll({
		offsetTop: 1,
		offsetBottom: 1
	});
	$(window).load(function() {
		$('.dialog__body, .msg-history__chat-wrap').customScroll();
	});
});