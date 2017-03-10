$(function() {
	var imgNum=0;
	var btnNum=0;
	var timer;
	var firstImg=$('.imgList li:first').clone(true);
	$('.imgList').append(firstImg);
	function nextFn(event) {
		btnNum++;
		if (btnNum>5) {
			btnNum=0;
		};
		$('.btnList li').eq(btnNum).addClass('current').siblings().removeClass('current');
		imgNum++;
		if (imgNum>6) {
			imgNum=1;
			$('.imgList').css('margin-left', 0);
		};
		$('.imgList').stop(true).animate({'margin-left':imgNum*-715}, 500);
	}
	$('.rightBtn').click(nextFn);
	$('.leftBtn').click(function(event) {
		btnNum--;
		if (btnNum<0) {
			btnNum=5;
		};
		$('.btnList li').eq(btnNum).addClass('current').siblings().removeClass('current');
		imgNum--;
		if (imgNum<0) {
			imgNum=5;
			$('.imgList').css('margin-left', -4290);
		};
		$('.imgList').stop(true).animate({'margin-left':imgNum*-715}, 500);
	});
	$('.btnList li').click(function(event) {
		var i=$(this).index();
		$('.btnList li').eq(i).addClass('current').siblings().removeClass('current');
		$('.imgList').stop(true).animate({'margin-left':i*-715}, 500);
		btnNum=i;
		imgNum=i;
	});
	timer=setInterval(nextFn, 2000);
	$('.imgList li').hover(function() {
		clearInterval(timer);
	}, function() {
		clearInterval(timer);
		timer=setInterval(nextFn, 2000);
	});
});