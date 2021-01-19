const likes = [
                document.getElementById("likes1"), 
                document.getElementById("likes2"), 
                document.getElementById("likes3")
              ];

const cardlink = [
                    document.getElementById("cardlink1"),
                    document.getElementById("cardlink2"),
                    document.getElementById("cardlink3")
                  ];

const hearts = [
                 document.getElementById("heart1"), 
                 document.getElementById("heart2"), 
                 document.getElementById("heart3")
               ];

let amountOfLikes = [0, 0, 0];
let liked = [false, false, false];

function addLike1() {
    if (liked[0] === false) {
        amountOfLikes[0]++;
        liked[0] = true;
        hearts[0].className = "fas fa-heart"
    } else {
        amountOfLikes[0]--;
        liked[0] = false;
        hearts[0].className = "far fa-heart"
    }  
    likes[0].innerHTML = amountOfLikes[0];
}

function addLike2() {
    if (liked[1] === false) {
        amountOfLikes[1]++;
        liked[1] = true;
        hearts[1].className = "fas fa-heart"
    } else {
        amountOfLikes[1]--;
        liked[1] = false;
        hearts[1].className = "far fa-heart"
    }  
    likes[1].innerHTML = amountOfLikes[1];
}

function addLike3() {
    if (liked[2] === false) {
        amountOfLikes[2]++;
        liked[2] = true;
        hearts[2].className = "fas fa-heart"
    } else {
        amountOfLikes[2]--;
        liked[2] = false;
        hearts[2].className = "far fa-heart"
    }  
    likes[2].innerHTML = amountOfLikes[2];
}

cardlink[0].onclick = addLike1;
cardlink[1].onclick = addLike2;
cardlink[2].onclick = addLike3;


