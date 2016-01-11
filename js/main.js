/*
* Helper: gilang <gilangputra@icloud.com>
**/
(function ($) {
	"use strict";

	window["dion"] = {
		loadPage: function () {
			$(window).load(function () {
				$("#loadAjax").load("home.html");
			});
			$(".nav-ajax a").click(function (e) {
				e.preventDefault();
				$("#loadAjax").hide();
				var data = $(this).data("load"),
					xmp = new XMLHttpRequest();
					console.log(data);
				xmp.onreadystatechange = function () {
					if(this.readyState === 1) {
						$(".wrapper_loader").append('<div class="loader"><img src="images/load.gif" alt=""><div>Please Wait ...</div></div>');
					}
					if(this.readyState === 4 && this.status === 200) {
						$("#loadAjax").html(this.responseText);
						$(".loader").remove();
						$("#loadAjax").fadeIn(200);
					}
				};
				xmp.open("post", data, true);
				setTimeout(function () {xmp.send()},2000);
			});
		},
		toTop: function () {
			$(window).scroll(function(event) {
				var topW = $(this).scrollTop();
				if(topW > 120)
					$("#toTop").fadeIn(200);
				else 
					$("#toTop").fadeOut(200);
			});
			$("#toTop").click(function () {
				$("html, body").animate({scrollTop: 0}, 500, 'swing', function (){
					console.log("success");
				});
			});
		},
		ready:function () {
			dion.loadPage();
			dion.toTop();
		}
	}; $(dion.ready);
})(jQuery);