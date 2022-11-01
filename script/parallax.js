const parallax = document.getElementById("parallax");
window.addEventListener("scroll", () => {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset + "px";
});
