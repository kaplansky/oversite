$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$(".tab_item").not(":first").hide();
	$(".wrapper .tab").click(function() {
	$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");


$(".result").off("click").on("click", (function(){
	$(".result").replaceWith("<div class='score'>1-1</div>")
	return false;
}));

$(".popup_content").magnificPopup({
	type : 'image',
	gallery : {
		enabled : true
	},
	removalDelay : 300,
	mainClass: 'mfp-fade'
});

$(".image_item").magnificPopup({
	type : 'image',
	gallery : {
		enabled : true
	},
	removalDelay : 300,
	mainClass: 'mfp-fade'
});
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(300).fadeOut("slow");

});