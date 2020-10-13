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
	const linkContainers =	document.getElementsByClassName('square');
	const body			 =	document.getElementsByTagName('body')[0];

	// Listen for click event on all divs with class "square"
	Array.from(linkContainers).forEach(container => {
		container.addEventListener('click', function() {
			const modalID =	 container.classList.item(1);
			const modal   =	 document.getElementById(modalID);
			const close   =	 modal.getElementsByClassName('close')[0];

			// Remove hide class from modal
			modal.classList.remove('hide');
			body.classList.add('modal-open');

			// When the user clicks the close button, hide the modal window
			close.addEventListener('click', function() {
				modal.classList.add('hide');
				body.classList.remove('modal-open');
			});

			// When the user clicks outside of the modal, hide the modal window
			window.addEventListener('click', function(event) {
				if (event.target == modal) {
					modal.classList.add('hide');
					body.classList.remove('modal-open');
				}
			});
		});
	});
	/***** END PORTFOLIO MODAL WINDOWS *****/
});