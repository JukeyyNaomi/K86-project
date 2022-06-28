// function shutNavOff (){
// 	var menu = document.getElementsByClassName('menutoggle');
// 	menu.className = "inactive";
// }

document.getElementsByClassName('menutoggle')[0].onclick = function () {
	var menu = document.getElementById('menu');
	if(menu.className == "active"){
		menu.className = "inactive";
		

	} else {
		menu.className = "active";
	}
}

// jQuery( "#filter" ).click(function() {
// 	 			$( "p" ).toggle();
// 				 $("h2").toggleClass('special');
   
// 		   });	

// jQuery(function($){
// 	jQuery('.hMenu').click(function() {
// 		jQuery('.menuSize').css('width', '1100px');
// 		jQuery('.menuSize').css('transition', 'width 1s');
// 		if (jQuery('.menuSize').css('width', '1100px')){
// 			setTimeout(function () {jQuery('.webMenu').css('display', 'initial')}, 1000);
// 			setTimeout(function (){jQuery('.exit').css('display', 'initial')}, 1000);
// 			setTimeout(function (){jQuery('.hMenu').css('display', 'none')}, 1000);
// 		};
		
// 	});


// 	jQuery('.hMenuMobile').click(function() {
// 		jQuery('.menuSizeMobile').css('height', '100vh');
// 		jQuery('.menuSizeMobile').css('max-width', 'none');
// 		jQuery('.menuSizeMobile').css('transition', 'width 1s, height 1s');
// 		if (jQuery('.menuSize').css('height', '100vh')){
// 			setTimeout(function () {jQuery('.menuMobile').css('display', 'initial')}, 1000);
// 			setTimeout(function (){jQuery('.exitMobile').css('display', 'initial')}, 1000);
// 			setTimeout(function (){jQuery('.hMenuMobile').css('display', 'none')}, 1000);
// 		};
		
// 	});
	
// 	jQuery('.exit').click(function() {
// 		jQuery('.menuSize').css('width', '610px');
// 		jQuery('.menuSize').css('transition', 'width 1s');
// 		jQuery('.webMenu').css('display', 'none');
// 		if (jQuery('.menuSize').css('width', '610px')){
// 			setTimeout(function (){jQuery('.exit').css('display', 'none')}, 1000);
// 			setTimeout(function (){jQuery('.hMenu').css('display', 'initial')}, 1000);
// 		};
		
// 	});
	
// 	jQuery('.exitMobile').click(function() {
// 		jQuery('.menuSizeMobile').css('height', '65px');
// 		jQuery('.menuSizeMobile').css('transition', 'width 1s, height 1s');
// 		jQuery('.menuMobile').css('display', 'none');
// 		if (jQuery('.menuSizeMobile').css('height', '65px')){
// 			setTimeout(function (){jQuery('.exitMobile').css('display', 'none')}, 1000);
// 			setTimeout(function (){jQuery('.hMenuMobile').css('display', 'initial')}, 1000);
// 			setTimeout(function (){jQuery('.menuSizeMobile').css('max-width', '390px')}, 1000);
// 		};
		
// 	});

// });

document.addEventListener("DOMContentLoaded", function() {
	var lazyloadImages = document.querySelectorAll("img.lazy");    
	var lazyloadThrottleTimeout;
	
	function lazyload () {
	  if(lazyloadThrottleTimeout) {
		clearTimeout(lazyloadThrottleTimeout);
	  }    
	  
	  lazyloadThrottleTimeout = setTimeout(function() {
		  var scrollTop = window.pageYOffset;
		  lazyloadImages.forEach(function(img) {
			  if(img.offsetTop < (window.innerHeight + scrollTop)) {
				img.src = img.dataset.src;
				img.classList.remove('lazy');
			  }
		  });
		  if(lazyloadImages.length == 0) { 
			document.removeEventListener("scroll", lazyload);
			window.removeEventListener("resize", lazyload);
			window.removeEventListener("orientationChange", lazyload);
		  }
	  }, 20);
	}
	
	document.addEventListener("scroll", lazyload);
	window.addEventListener("resize", lazyload);
	window.addEventListener("orientationChange", lazyload);
  });