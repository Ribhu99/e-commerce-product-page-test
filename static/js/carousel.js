// array of paths to all the images we want to show for a specific product
const images = [
  "../images/image-product-1.jpg",
  "../images/image-product-2.jpg",
  "../images/image-product-3.jpg",
  "../images/image-product-4.jpg",
];

// variable activeImage tells which sub image is active now. Initially first sub image is active.
let currentIndex = 0;

//function to set main image
function setFeatureImg(index) {
  const featureImgElement = document.querySelector(".main-img");

  switch (index) {
    case index > images.length - 1:
      featureImgElement.setAttribute("src", images[0]);
      break;

    case images < 0:
      featureImgElement.setAttribute("src", images[images.length - 1]);
      break;

    default:
      featureImgElement.setAttribute("src", images[index]);
      break;
  }
}

const nextBtnElement = document.querySelector(".next-btn");
const previousBtnElement = document.querySelector(".previous-btn");

nextBtnElement.addEventListener("click", () => {
  let nextIndex = ++currentIndex;

  if (currentIndex > images.length - 1) {
    currentIndex = 0;
    nextIndex = currentIndex;
  }

  setFeatureImg(nextIndex);
});

previousBtnElement.addEventListener("click", () => {
  let previousIndex = --currentIndex;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
    previousIndex = currentIndex;
  }

  setFeatureImg(previousIndex);
});
