const hamburgerIcon = document.querySelector(".ham-menu");
const blurElement = document.querySelector(".blur");

hamburgerIcon.addEventListener("click", (e) => {
  const src = e.target.getAttribute("src");
  const blurElementClassnames = Array.from(blurElement.classList);

  if (!blurElementClassnames.includes("show")) {
    blurElement.classList.add("show");
    hamburgerIcon.setAttribute("src", "../images/icon-close.svg");
  } else {
    blurElement.classList.remove("show");
    hamburgerIcon.setAttribute("src", "../images/icon-menu.svg");
  }

  console.log(blurElementClassnames);
});
