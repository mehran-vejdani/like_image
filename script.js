const image = document.querySelector(".container");
const heartIcon = document.querySelector(".heart");

image.addEventListener("dblclick", (e) => {
  //set the position of ther heart using x and y value
  let xvalue = e.clientX - e.target.offsetLeft;
  let yvalue = e.clientY - e.target.offsetTop;
  console.log(xvalue, yvalue);

  heartIcon.style.left = `${xvalue}px`;
  heartIcon.style.top = `${yvalue}px`;

  heartIcon.classList.add("active");

  setTimeout(() => {
    heartIcon.classList.remove("active");
  }, 1000);
});
