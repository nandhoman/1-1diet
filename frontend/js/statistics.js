const likes1 = document.getElementById("likes1");
const likes2 = document.getElementById("likes2");
const likes3 = document.getElementById("likes3");

const cardlink1 = document.getElementById("cardlink1");
const cardlink2 = document.getElementById("cardlink2");
const cardlink3 = document.getElementById("cardlink3");

const heart1 = document.getElementById("heart1");
const heart2 = document.getElementById("heart2");
const heart3 = document.getElementById("heart3");

let amountOfLikes1 = 0;
let amountOfLikes2 = 0;
let amountOfLikes3 = 0;

let liked1 = false;
let liked2 = false;
let liked3 = false;

function addLike1() {
    if (liked1 === false) {
        amountOfLikes1++;
        liked1 = true;
        heart1.className = "fas fa-heart"
    } else {
        amountOfLikes1--;
        liked1 = false;
        heart1.className = "far fa-heart"
    }  
    likes1.innerHTML = amountOfLikes1;
}

function addLike2() {
    if (liked2 === false) {
        amountOfLikes2++;
        liked2 = true;
        heart2.className = "fas fa-heart"
    } else {
        amountOfLikes2--;
        liked2 = false;
        heart2.className = "far fa-heart"
    }  
    likes2.innerHTML = amountOfLikes2;
}

function addLike3() {
    if (liked3 === false) {
        amountOfLikes3++;
        liked3 = true;
        heart3.className = "fas fa-heart"
    } else {
        amountOfLikes3--;
        liked3 = false;
        heart3.className = "far fa-heart"
    }  
    likes3.innerHTML = amountOfLikes3;
}

cardlink1.onclick = addLike1;
cardlink2.onclick = addLike2;
cardlink3.onclick = addLike3;


