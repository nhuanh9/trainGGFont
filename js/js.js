$(document).ready(function() {
	var hieuUngLoad = new TimelineMax();
	hieuUngLoad.from($('.loading'), 0.7, {opacity:0})
	.from($('.khoiload'), 0.7, {opacity:0, scale: 2})
	.to($('.khoiload'), 1, {opacity:1, scale: 0.3, ease: Power4.easeOut})
	.to($('.khoiload'), 1, {opacity:1, scale: 1, ease: Elastic.easeOut})	
	.to($('.khoiload'), 1, {opacity:1, scale: 0.5, ease: Power4.easeOut})
	.to($('.khoiload'), 1, {opacity:1, scale: 1, ease: Elastic.easeOut})
	.to($('.khoiload'), 1, {opacity:0, scale: 10, ease: Power4.easeOut})
	.to($('.loading'), 1, {x: -2000, ease: Power4.easeOut})
	.from($('.logo'), 1, {scale: 3, ease: Elastic.easeOut, opacity: 0})
	.from($('.tieude'), 0.5, {scale: 2, ease: Elastic.easeOut, opacity: 0}, "+=0.1")
	.from($('.gioithieu'), 0.5, {y: 200, ease: Elastic.easeOut, opacity: 0}, "+=0.1") 
	.from($('.ke1'), 2, {x: -2000, ease: Power4.easeOut, opacity: 0}) 
	.staggerFrom($('.motkhoi'), 2, {y: 2000, ease: Power4.easeOut, opacity: 0}, 2)
	.staggerFrom($('.nut'), 2, {x: 2000, ease: Power4.easeOut, opacity: 0}, 0.2); 

});   