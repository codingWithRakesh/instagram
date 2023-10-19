// status div
const initSlider = () => {
	const imageList = document.querySelector(".slider-wrapper .image-list");
	const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
	const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

	slideButtons.forEach(button => {
		button.addEventListener("click", () => {
			const direction = button.id === "prev-slide" ? -1 : 1;
			const scrollAmount = imageList.clientWidth * direction;
			imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
		});
	});

	const handleSlideButtons = () => {
		slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
		slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
	}

	imageList.addEventListener("scroll", () => {
		handleSlideButtons();
	});
}

window.addEventListener("load", initSlider);

// new post
let newPost = document.getElementById('newPost')

setInterval(()=>{
	newPost.classList.remove('opacity0')
	newPost.onclick = () =>{
		location.reload()
		window.scrollTo(0, 0)
	}
},120000)


//created by tarapada garai