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
});


$( "a.scrollLink" ).click(function( event ) {
	event.preventDefault();
	$("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 1000);
});


$(window).scroll(function(){
	let scrTop = $(window).scrollTop();
	if ($(window).width() >= 1200) {
		$('.title').css({"transform": "translate(0%, -"+ scrTop/15 + "%"});
		if (scrTop > 1200) {
			$('.services-item').css({"display" : "flex"});
			$('.animate').addClass('scale');
		};
		if (scrTop > 700) {
			$('.description-item').css({"display" : "block"});
			$('.description-item:nth-child(1)').addClass('translateLeft');
			$('.description-item:nth-child(2)').addClass('scale');
			$('.description-item:nth-child(3)').addClass('translateRight')
		};
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
		$('.services-carousel').addClass('services-carousel-media');
		$('.screen-carousel').addClass('screen-carousel-media');
	}
}


let slider = document.querySelector('.screen-carousel');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown',(e)=> {
	isDown = true;
	slider.classList.add('active');
	startX = e.pageX - slider.offsetLeft;
	scrollLeft = slider.style.left;
});
slider.addEventListener('mouseleave',(e)=> {
	isDown = false;
	slider.classList.remove('active');
});
slider.addEventListener('mouseup',(e)=> {
	isDown = false;
	slider.classList.remove('active');
});
slider.addEventListener('mousemove',(e)=> {
	if(!isDown) return;
	e.preventDefault();
	const x = e.pageX - slider.offsetLeft;
	const walk = x-startX;
	slider.style.left = walk + 'px';
	console.log({x,startX});
});