$(document).ready(function() {



	

	$('.owl-carousel').owlCarousel({
		loop:true,
		items: 1,
		navText: [],
		autoplay: true,
		autoplaySpeed: 1000,
		smartSpaeed: 500
	})

	$("#taggle_search").click(function () {
        if ($(this).prop("checked")) {
			// alert("選中");
			$(".taggleSearch_label").css("background","red")
			$(".taggleSearch_label").addClass("search_close")
        } else {
			// alert("沒有選中");
			$(".taggleSearch_label").css("background","none")
			$(".taggleSearch_label").removeClass("search_close")
        }
    });



})