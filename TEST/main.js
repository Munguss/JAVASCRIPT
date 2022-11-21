let diceNumbers = [0, 0, 0, 0, 0];
let diceHold = [false, false, false, false, false];
let roll = 0;
let totaalOnder = 0;
var count = 3;


function DiceRoll() {
    for (let i = 0; i < diceNumbers.length; i++) {
        if (!diceHold[i] && roll == 0) {
            diceNumbers[i] = Math.floor(Math.random() * 6) + 1;
            document.querySelector("#dice" + (i + 1)).style.backgroundColor = "rgb(175, 255, 255)";
        } else if (!diceHold[i] && roll == 1) {
            diceNumbers[i] = Math.floor(Math.random() * 6) + 1;
            document.querySelector("#dice" + (i + 1)).style.backgroundColor = "rgb(164, 236, 236)";
        } else if (!diceHold[i] && roll == 2) {
            diceNumbers[i] = Math.floor(Math.random() * 6) + 1;
            document.querySelector("#dice" + (i + 1)).style.backgroundColor = "rgb(145, 206, 206)";
        }

        document.getElementById("dice" + (i + 1)).innerHTML = diceNumbers[i];
    }
    if (roll <= 2) {
        roll++;
    } else if (roll == 3) {
        
        roll = 0;
        for (i = 0; i < diceNumbers.length; i++) {
            document.querySelector(".dobbelsteen" + (i + 1)).style.backgroundColor = "rgb(243, 229, 213)";
            document.querySelector(".dobbelsteen" + (i + 1)).innerHTML = "Dice";
            document.querySelector(".dobbelsteen" + (i + 1)).style.border = "0.5px solid black";
            diceHold = [false, false, false, false, false];
        }
    }
}


function HoldDice(number) {
    diceHold[number] = !diceHold[number];
    if (diceHold[number]) {
        document.querySelector(".dobbelsteen" + (number + 1)).style.border = "5px solid red";
    } else {
        document.querySelector(".dobbelsteen" + (number + 1)).style.border = "0.5px solid black";
    }

}


function CheckNumbers(number) {
    let totaal = 0;
    for (let i = 0; i < diceNumbers.length; i++) {
        if (diceNumbers[i] == number) {
            totaal += number;
        }
    }
    document.getElementById("score" + number).innerHTML = totaal;
}

function rollcount(){   
var oText=document.getElementById("span");
count -=1;
oText.innerHTML=count;
}

function myfunction(){
    rollcount();
    DiceRoll();
}
