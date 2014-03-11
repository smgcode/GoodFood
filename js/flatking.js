$(document).ready(function() {

	$('#Grid').mixitup();

	$('.homeslider').bxSlider({
		minSlides: 1,
  		maxSlides: 1
	});


	// SHOW MENU
	$(".showmenu").click(function(){
		$(".topblock nav").toggleClass("active");
	})


	scrollable = 0;
	if($(".contentblock:first").hasClass("nopadding") || $(".contentblock:first").hasClass("nobottom") || $(".contentblock:first").hasClass("notop") || $(".contentblock:first").hasClass("noheading")){
		scrollable = 1;
		$(".topblock").removeClass("fixed");
	}






	// HOVERBOX
	hoverattr = $(".hoverBox h2 .change").text();
	$(".hoverBox div").hover(function(){
		newattr = $(this).attr("change");
		$(".hoverBox h2 .change").text(newattr);
	},function(){
		$(".hoverBox h2 .change").text(hoverattr);
	});






	$('#customblockVideo').videoBG({
		mp4:'assets/video.mp4',
		ogv:'assets/video.ogv',
		webm:'assets/video.webm',
		poster:'assets/video.png',
		scale:true,
		zIndex:0,
		muted:true
	});

	$('video,audio').each(function(){this.muted=true})

	if(("#map").length > 0){
	  	var map;
	  	var myLatlng = new google.maps.LatLng(51.624352,-3.458067);
		function initialize() {
		  	var mapOptions = {
			    zoom: 14,
			    center: myLatlng,
			    scrollwheel: false,
			    navigationControl: false,
			    mapTypeControl: false,
			    scaleControl: false,
		    	draggable: false,
		    	mapTypeId: google.maps.MapTypeId.ROADMAP
		  	};
		  	map = new google.maps.Map(document.getElementById('map'),
		      	mapOptions);

		  	var marker = new google.maps.Marker({
			    position: myLatlng,
			    map: map
			});
		}

		google.maps.event.addDomListener(window, 'load', initialize);
	}

});

$(".loadMore").click(function(){

	i = 0;

	amount = "";
	amount = $(this).attr("amount");
	
	if(typeof amount == 'undefined'){
		amount = 3;
	}

	$(".hiddenPortfolioGrid li").each(function(){
		// ONLY ADD 3 ITEMS
		if(i == amount){
			return false;
		}
		$(this).appendTo(".trippleGrid");

		i++;

		if($(".hiddenPortfolioGrid li").length == ""){
			$(".loadMore").fadeOut();
			$(".loadMoreWrapper").prepend("<div class='emptyLoadMore'>All Items Loaded</div>");
		}
	});
	$('#Grid').mixitup('remix','all');
});




// STICK TOP HEADER
$(window).on('scroll', function() {
	if(scrollable == 1){
	    scrollPosition = $(this).scrollTop();
	    if (scrollPosition >= 100) {
	        $(".topblock").addClass("fixed");
	    }
	    if (scrollPosition < 100) {
	        $(".topblock").removeClass("fixed");
	    }
	}	
});




// FADE IN EFFECT
$('.fadein').espy(function (entered, state) {
    if (entered && $(this).hasClass('left') ) {
        $(this).delay(200).animate({ 'opacity' : '1', 'left' : '0' }, 500);
    }
    if (entered && $(this).hasClass('right') ) {
        $(this).delay(200).animate({ 'opacity' : '1', 'right' : '0' }, 500);
    }
    if (entered && $(this).hasClass('bottom') ) {
        $(this).delay(200).animate({ 'opacity' : '1', 'bottom' : '0' }, 500);
    }
    if (entered && $(this).hasClass('top') ) {
        $(this).delay(200).animate({ 'opacity' : '1', 'top' : '0' }, 500);
    }
});





