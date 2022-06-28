document.getElementsByClassName('menutoggle')[0].onclick = function () {
	var menu = document.getElementById('menu');
	
	if(menu.className == "active"){
		menu.className = "inactive";
	} 
	
	else {
		menu.className = "active";
	}
}




// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("header").style.background = "-moz-linear-gradient(top, rgba(43,160,159,1) 0%, rgba(43,160,159,0.7) 50%,rgba(43,160,159,0) 100%)";
    
//   document.getElementById("header").style.background = "-webkit-linear-gradient(top, rgba(43,160,159,1) 0%,rgba(43,160,159,0.7) 50%,rgba(43,160,159,0) 100%)";
  
//   document.getElementById("header").style.background = "linear-gradient(to bottom, rgba(43,160,159,1) 0%,rgba(43,160,159,0.7) 50%,rgba(43,160,159,0) 100%)";
  
//   document.getElementById("header").style.height = "12vh";
  
// //     document.getElementById("header").style.backgroundImage = "url('')";

    
    
//   } else {
//     document.getElementById("header").style.background = "";
//     document.getElementById("header").style.backgroundImage = "";
//     document.getElementById("header").style.height = "20vh";

//   }
// }





// // switch navigation ID so it'll work on mobile and desktop'

// function switchNavToDesktop(sheet) {
//    document.getElementById('switchDesktop').setAttribute('href', sheet);
// }
// // 
// // window.addEventListener('resize', function () {
// //   
// //   if (window.matchMedia('(min-width:769px)').matches) { //Desktop versie
// //      switchNavToDesktop('#projectenDesktop');
// //  }
// //  else { // mobiele versie
// //      switchNavToDesktop('#projecten');
// //  }
// // })





// function getNavWorking(sheet) {
//     if (window.matchMedia('(min-width:769px)').matches) { //Desktop versie
//      switchNavToDesktop('#projectenDesktop');
//  }
//      else { // mobiele versie
//      switchNavToDesktop('#projecten');
//  }
// }


// getNavWorking();
// setInterval(getNavWorking, 1000);