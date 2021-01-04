const likes1 = document.getElementById("likes1");
const cardlink1 = document.getElementById("cardlink1");
const heart1 = document.getElementById("heart1");
let amountOfLikes1 = 0;
let liked = false;

function addLike1() {
    if (liked === false) {
        amountOfLikes1++;
        liked = true;
        console.log(amountOfLikes1)
        heart1.className = "fas fa-heart"
    } else {
        amountOfLikes1--;
        liked = false;
        console.log(amountOfLikes1)
        heart1.className = "far fa-heart"
    }  
    likes1.innerHTML = amountOfLikes1;
}

cardlink1.onclick = addLike1;


