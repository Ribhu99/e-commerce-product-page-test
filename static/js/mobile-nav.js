const menuIcon = document.querySelector(".menu-icon");
const blurElement = document.querySelector(".blur");
const mobileMenuBgEl = document.querySelector(".mobile-menu-bg");

menuIcon.addEventListener("click", (e) => {
  // creating an array from the list of classnames on the blurElement
  const blurElementClassnames = Array.from(blurElement.classList);

  // Checking if the array contains the class "show"
  // if it does the closeMobileNav function is called
  // if it doesn't the openMobileNav function is called
  if (!blurElementClassnames.includes("show")) {
    openMobileNav();
  } else {
    closeMobileNav();
  }
});

const openMobileNav = () => {
  // Adding the necessary class to blur the background
  blurElement.classList.add("show");
  // Adding a "hide" class to the body element to prevent scrolling
  // once the Mobile nav menu is open
  document.body.classList.add("hide");
  // Adding a "show-menu" class that handles that
  // sets the display of the mobile menu to block
  // the display is none by default
  mobileMenuBgEl.classList.add("show-menu");

  // I changed the src sttribute on the image element once the
  // mobile nav is open
  menuIcon.setAttribute("src", "../../images/icon-close.svg");
};

const closeMobileNav = () => {
  // I'm simply removing all the classes I added
  // when I opened the mobile menu
  mobileMenuBgEl.classList.remove("show-menu");
  blurElement.classList.remove("show");
  document.body.classList.remove("hide");

  // This changes the "src" attribute of the image
  // once the mobile menu is closed
  menuIcon.setAttribute("src", "../../images/icon-menu.svg");
};
