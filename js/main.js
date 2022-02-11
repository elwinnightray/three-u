


$(function () {

	//滑動展示

	$('.slick').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000

	});


	//跳窗注意事項

	$(".closebtn , .check").click(function() {
		$('.blackbgc , .blackbgc-1 ').fadeOut(200);
	});

	$(".caution").click(function(){
		$("#popwindow").fadeIn(200);
	});

	//簽到視窗
	$(".check").click(function() {
		$('.blackbgc-1').fadeOut(200);
	});

	$(".btn").click(function(){
		$("#success").fadeIn(200);
		// $("#fair").fadeIn(200);
	});

})


