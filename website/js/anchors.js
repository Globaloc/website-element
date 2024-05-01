const anchors = document.querySelectorAll('a[href*= "#"]')

for (let anchor of anchors) {
	anchor.addEventListener("click", function (event) {
		window.location.href.split('#')[0];
		event.preventDefault();
		const blockID = anchor.getAttribute('href')
		document.querySelector('' + blockID).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	})
}