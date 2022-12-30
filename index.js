let homeScoreEl = document.getElementById("home-score")
let homeScore = 0
function one(){
    homeScore += 1
    homeScoreEl.textContent=homeScore;
}

function two(){
    homeScore += 2
    homeScoreEl.textContent=homeScore;
}

function three(){
    homeScore += 3
    homeScoreEl.textContent=homeScore;
}




let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0
function one1(){
    guestScore += 1
    guestScoreEl.textContent=guestScore;
}

function two2(){
    guestScore += 2
    guestScoreEl.textContent=guestScore;
}

function three3(){
    guestScore += 3
    guestScoreEl.textContent=guestScore;
}

function reset(){
    guestScoreEl.textContent= 0;
    homeScoreEl.textContent= 0;
    guestScore=0
    homeScore=0
    
}