const image = document.querySelector(".container");
const heartIcon = document.querySelector(".heart");

image.addEventListener("dblclick ", (e) => {
  heartIcon.classList.add("active");
});
