const menuIcon = document.querySelector(".menu-icon");
const blurElement = document.querySelector(".blur");
const mobileMenuBgEl = document.querySelector(".mobile-menu-bg");

menuIcon.addEventListener("click", (e) => {
  const blurElementClassnames = Array.from(blurElement.classList);

  if (!blurElementClassnames.includes("show")) {
    openMobileNav();
  } else {
    closeMobileNav();
  }
});

const openMobileNav = () => {
  blurElement.classList.add("show");
  document.body.classList.add("hide");
  mobileMenuBgEl.classList.add("show-menu");
  menuIcon.setAttribute("src", "../../images/icon-close.svg");
};

const closeMobileNav = () => {
  mobileMenuBgEl.classList.remove("show-menu");
  blurElement.classList.remove("show");
  document.body.classList.remove("hide");
  menuIcon.setAttribute("src", "../../images/icon-menu.svg");
};
