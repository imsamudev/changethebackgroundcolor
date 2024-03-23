const colorButtons = document.querySelectorAll("#myButton");

colorButtons.forEach((color) => {
  color.addEventListener("click", () => {
    document.body.style.backgroundColor = color.value;
    document.body.style.transition = "all .8s";
  });
});
