document.addEventListener('DOMContentLoaded', function(event) {
	
	/***** NAVIGATION *****/
	const menuClose 	= 	document.getElementById('close-menu');
	const menuOpen 		= 	document.getElementById('open-mobile-menu');
	const mobileMenu 	= 	document.getElementsByClassName('mobile-menu')[0];
	const mobileLinks 	=	document.getElementsByClassName('mobile-link');

	// Open Menu Function
	function openMenu() {
		mobileMenu.style.top = "0";		// Reset right to 0 from where we accounted for added padding when hiding menu
		mobileMenu.style.height = "100%";
		menuOpen.classList.add("hide");
	}

	// Close Menu Function
	function closeMenu() {
		mobileMenu.style.height = "0";
		mobileMenu.style.top = "-20%";
		menuOpen.classList.remove("hide");
	}

	// When the user clickes the mobile menu open button, display the mobile menu and hide the menu open button
	menuOpen.addEventListener("click", openMenu);

	// When the user clicks the mobile menu close button, hide the mobile menu and display the menu open button
	menuClose.addEventListener("click", closeMenu);

	Array.prototype.forEach.call(mobileLinks, (link) => {
		link.addEventListener('click', closeMenu);
	});
	/***** END NAVIGATION *****/


	/***** PORTFOLIO MODAL WINDOWS *****/
	
	/***** END PORTFOLIO MODAL WINDOWS *****/
});