//initially item count will be 0
var itemCount = 0;
const count = document.getElementsByClassName('count')[0];
//set teh itemCount to the respective html element
count.innerHTML = itemCount;

//get the increase button element
const increase = document.getElementsByClassName('increase')[0];
//adding an on click event listener
increase.addEventListener('click', () => {
    itemCount += 1;
    //set the newly increased count in respective element
    count.innerHTML = itemCount;
})

//get the decrease button element
const decrease = document.getElementsByClassName('decrease')[0];
//adding an on click event listener
decrease.addEventListener('click', () => {
    //only decrease the count if current count is more than 0
    if(itemCount>0) itemCount -= 1;
    
    //set the newly decreased count in respective element
    //if the count is 0 that it will just re-assign it 0 again as it should ideally.
    count.innerHTML = itemCount;
})