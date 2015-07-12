// ==UserScript==
// @name         MutHead reveal all
// @version      0.1
// @description  Reveals all cards in MutHead pack simulator
// @author       TheCard
// @match        http://www.muthead.com/packs/simulator/*
// @grant        none
// ==/UserScript==


function revealCards() {
    var t1 = document.getElementsByClassName("pack-slot t-1");
    var t2 = document.getElementsByClassName("pack-slot t-2");
    var t3 = document.getElementsByClassName("pack-slot t-3");
    var t4 = document.getElementsByClassName("pack-slot t-4");

    for (i= 0, len = t1.length; i < len; i++) {
        t1[i].className = "pack-slot t-1 revealed";
    }

    for (i= 0, len = t2.length; i < len; i++) {
        t2[i].className = "pack-slot t-2 revealed";
    }

   for (i= 0, len = t3.length; i < len; i++) {
        t3[i].className = "pack-slot t-3 revealed";
   }

    for (i= 0, len = t4.length; i < len; i++) {
        t4[i].className = "pack-slot t-4 revealed";
    }
}

function enableSave() {
    document.getElementById("pack-save").removeAttribute("disabled");
}

function revealScore() {
    var packScore = document.getElementsByClassName("pack-score");
    packScore[0].style.display = "inline";
    packScore[0].innerHTML = "<em>" + packScore[0].getAttribute("data-score") + " Points</em>";
}

revealCards();
enableSave();
revealScore();
