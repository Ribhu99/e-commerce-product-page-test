// array of paths to all the images we want to show for a specific product
const images = [
    './images/image-product-1.jpg',
    './images/image-product-2.jpg',
    './images/image-product-3.jpg',
    './images/image-product-4.jpg'
]

// variable activeImage tells which sub image is active now. Initially first sub image is active.
var activeImage = 1;

// get the mainImage wrapper div element
const mainImgWrapper = document.getElementsByClassName('main-img-wrapper')[0];

//function to set main image
function setFeatureImg(index){
    // oldImage is the image that is currently showing we want to remove it if the user clicks on any other sub image
    const oldImage = document.getElementsByClassName('main-img')[0];
    oldImage?.remove();

    //img is the new image that we want show in the place of old image
    const img = document.createElement('img');
    //setting the attributes to the element
    img.setAttribute('src', images[index]);
    img.setAttribute('class', 'main-img')
    img.setAttribute('alt', 'active sneaker image')
    //add the new element in the parent element
    mainImgWrapper.appendChild(img);
}

// Initialize
setFeatureImg(0);

// set sub images
const subImgWrapper = document.getElementsByClassName('sub-img-wrapper')[0];
//iterate over the above sub image array
for(let i=0; i<images.length; i++){
    //for every path of the array create a image and assign it
    const subimg = document.createElement('img');
    subimg.setAttribute('src', images[i]);
    subimg.setAttribute('class', 'sub-img')
    subimg.setAttribute('alt', 'sneaker image '+ i)
    //adding newly created element to parent element
    subImgWrapper.appendChild(subimg);

    subimg.addEventListener('click', () => {
        // We want to show the new image on which we've clicked
        setFeatureImg(i);
        
        // remove onclick styles from all sub images
        const oldSubImages = document.getElementsByClassName('sub-img');
        for(let oldSubImage of oldSubImages){
            // remove sub-img-active class from the previous sub image. sub-img-active class shows the border and transparency
            oldSubImage.classList.remove('sub-img-active');
        }

        // add onclick styles on newly clicked sub-img
        subimg.classList.add('sub-img-active');
    })
} 