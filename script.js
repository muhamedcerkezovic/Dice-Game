function randomNum1() {
    let num1 = Math.floor(1 + Math.random() * 6);
    return num1;
}

function randomNum2() {
    let num2 = Math.floor(1 + Math.random() * 6);
    return num2;
}
function kockice() {
    let prvaKockica = randomNum1();
    let drugaKockica = randomNum2();
    bacanjeKockice1();
    bacanjeKockice2();
    pobjednik();
    function pobjednik() {
        if (prvaKockica > drugaKockica) {
            return document.querySelector("h1").innerText = "PLAYER 1 is the WINNER";
        } else if (prvaKockica === drugaKockica) {
            return document.querySelector("h1").innerText = "Roll the dices again";
        } else {
            return document.querySelector("h1").innerText = "PLAYER 2 is the WINNER";

        }
    }
    function bacanjeKockice1() {

        if (prvaKockica === 1) {
            return document.querySelector(".img1").setAttribute("src", "dice1.png")

        }
        if (prvaKockica === 2) {
            return document.querySelector(".img1").setAttribute("src", "dice2.png")
        }
        if (prvaKockica === 3) {
            return document.querySelector(".img1").setAttribute("src", "dice3.png")
        }
        if (prvaKockica === 4) {
            return document.querySelector(".img1").setAttribute("src", "dice4.png")
        }
        if (prvaKockica === 5) {
            return document.querySelector(".img1").setAttribute("src", "dice5.png")
        }
        if (prvaKockica === 6) {
            return document.querySelector(".img1").setAttribute("src", "dice6.png")
        }

    }

    function bacanjeKockice2() {

        if (drugaKockica === 1) {
            return document.querySelector(".img2").setAttribute("src", "dice1.png")

        }
        if (drugaKockica === 2) {
            return document.querySelector(".img2").setAttribute("src", "dice2.png")
        }
        if (drugaKockica === 3) {
            return document.querySelector(".img2").setAttribute("src", "dice3.png")
        }
        if (drugaKockica === 4) {
            return document.querySelector(".img2").setAttribute("src", "dice4.png")
        }
        if (drugaKockica === 5) {
            return document.querySelector(".img2").setAttribute("src", "dice5.png")
        }
        if (drugaKockica === 6) {
            return document.querySelector(".img2").setAttribute("src", "dice6.png")
        }


    }
}

