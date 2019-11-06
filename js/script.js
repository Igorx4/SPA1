$(document).ready(function(){

    markPaginationAsActive(0);
    mediaMenu();
    carousel();




    if ($(window).width() <= 540) {
		$('.title p').html('Забронируй SPA со скидкой 20%');
	}
	if ($(window).width() <= 1400) {
		$('.title p').html('Забронируй SPA со скидкой 20%');
	}  

	$( "a.scrollLink" ).click(function( event ) {
		event.preventDefault();
		$("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 1000);
	});
});





$(window).scroll(function(){
	let scrTop = $(window).scrollTop();
	if ($(window).width() >= 1200) {
		$('.title').css({"transform": "translate(0%, -"+ scrTop/15 + "%"});
		// if (scrTop > 1200) {
		// 	$('.services-item').css({"display" : "flex"});
		// 	$('.animate').addClass('scale');
		// };
		// if (scrTop > 700) {
		// 	$('.description-item').css({"display" : "block"});
		// 	$('.description-item:nth-child(1)').addClass('translateLeft');
		// 	$('.description-item:nth-child(2)').addClass('scale');
		// 	$('.description-item:nth-child(3)').addClass('translateRight')
		// };
	}
	const breakPoints = [
		1000, 1600, 2800
	];
	function getBreakpointIndex() {
		const min = breakPoints.filter(breakPoint => {
			return scrTop > breakPoint;
		});
		return min.length;
	}
	markPaginationAsActive(
		getBreakpointIndex()
	);
});


let markPaginationAsActive = (index)=> {
	const items = $('.pagination-item a');
	for (let i = 0; i < items.length; i++) {
		items.eq(i).removeClass('active');
	}
	items.eq(index).addClass('active');
}


let mediaMenu = () =>{
	$('.navbar-button').on('click', function() {
		if( $('.navbar-media').css('display') === 'none'){
			$('.navbar-media').css({'display' : 'block'});
		}
		else {
			$('.navbar-media').css({'display' : 'none'});
		}
	})
}


let carousel = () =>{
	if ($(window).width() <= 992) {
		let slider = document.getElementById('screen-carousel');
		let blockRight = $(window).width()/4;
		if ($(window).width() <= 800) {
			blockRight = $(window).width()/2.3;
		}
		if ($(window).width() <= 700) {
			blockRight = $(window).width()/2;
		}
		if ($(window).width() <= 600) {
			blockRight = $(window).width();
		}
		if ($(window).width() <= 500) {
			blockRight = $(window).width();
		}
		if ($(window).width() <= 400) {
			blockRight = $(window).width()*1.85;
		}
		slider.onmousedown = function(e) {
			moveAt(e);
			function moveAt(e) {
				let x = e.pageX - slider.offsetWidth / 2;
				if (x <= 0 && x > -blockRight) { 
					slider.style.left = x + 'px';
				}
			}
			document.onmousemove = function(e) {
				moveAt(e);
			}
			slider.onmouseup = function() {
				document.onmousemove = null;
				slider.onmouseup = null;
			}
		}
	}
}

