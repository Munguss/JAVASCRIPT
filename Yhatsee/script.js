// Variabels
let diceNumbers = [0, 0, 0, 0, 0];
let diceHold = [false, false, false, false, false];
let roll = 0;
let totaalOnder = 0;
var count = 3;

// Dit is voor het rollen van de dobbelstenen
// & Dit is voor het houden van de dobbelstenen
function DiceRoll() {
    for (let i = 0; i < diceNumbers.length; i++) {
        if (!diceHold[i] && roll == 0) {
            diceNumbers[i] = Math.floor(Math.random() * 6) + 1;
            document.querySelector("#dice" + (i + 1)).style.backgroundColor = "darkgray";
        } else if (!diceHold[i] && roll == 1) {
            diceNumbers[i] = Math.floor(Math.random() * 6) + 1;
            document.querySelector("#dice" + (i + 1)).style.backgroundColor = "darkgray";
        } else if (!diceHold[i] && roll == 2) {
            diceNumbers[i] = Math.floor(Math.random() * 6) + 1;
            document.querySelector("#dice" + (i + 1)).style.backgroundColor = "darkgray";
        }

        document.getElementById("dice" + (i + 1)).innerHTML = diceNumbers[i];
    }
    if (roll <= 2) {
        roll++;
    } else if (roll == 3) {
        
        roll = 0;
        for (i = 0; i < diceNumbers.length; i++) {
            document.querySelector(".dobbelsteen" + (i + 1)).style.backgroundColor = "darkgray";
            document.querySelector(".dobbelsteen" + (i + 1)).innerHTML = "*";
            document.querySelector(".dobbelsteen" + (i + 1)).style.border = "0.5px solid black";
            diceHold = [false, false, false, false, false];
        }
    }
}

// Dit is de functie die word gebruikt voor het houden van de dobbelstenen
function HoldDice(number) {
    diceHold[number] = !diceHold[number];
    if (diceHold[number]) {
        document.querySelector(".dobbelsteen" + (number + 1)).style.border = "5px solid white";
    } else {
        document.querySelector(".dobbelsteen" + (number + 1)).style.border = "0.5px solid black";
    }

}

// De functie voor het checken van de single nummers
function CheckNumbers(number) {
    let totaal = 0;
    for (let i = 0; i < diceNumbers.length; i++) {
        if (diceNumbers[i] == number) {
            totaal += number;
        }
    }
    document.getElementById("score" + number).innerHTML = totaal;
}

// Het checken van 3 & 4 of a kind
function OfKind(number) {
    let same = 0;
    let found = false;
    for (let i = 1; i <= 6; i++) {
        same = 0;
        for (let j = 0; j < diceNumbers.length; j++) {
            if (diceNumbers[j] == i) {
                same++;
            }
        }
        if (same >= number) {
            found = true;
        }
    }
    let totaal = 0;
    if (found) {
        for (let i = 0; i < diceNumbers.length; i++) {
            totaal += diceNumbers[i];

        }
        document.getElementById("OfKind" + number).innerHTML = totaal;
        totaalOnder += totaal;
    }
}

// Het checken van Fullhouse
function FullHouse() {
    let same = 0;
    let found = false;
    for (let i = 1; i <= 6; i++) {
        same = 0;
        for (let j = 0; j < diceNumbers.length; j++) {
            if (diceNumbers[j] == i) {
                same++;
            }
        }
        if (same == 2) {
            found = true;
        }
    }
    let same2 = 0;
    let found2 = false;
    for (let i = 1; i <= 6; i++) {
        same2 = 0;
        for (let j = 0; j < diceNumbers.length; j++) {
            if (diceNumbers[j] == i) {
                same2++;
            }
        }
        if (same2 == 3) {
            found2 = true;
        }
    }
    if (found && found2) {
        document.getElementById("fullHouse").innerHTML = 25;
        totaalOnder += 25;
    }
}

// Het checken van Kleine straat
function SmallStreet() {
    let order = [0, 0, 0, 0, 0, 0];
    for (let i = 1; i <= 6; i++) {
        for (let j = 0; j <= diceNumbers.length; j++) {
            if (diceNumbers[j] == i) {
                order[i - 1] = 1;
            }
        }
    }

    let tellen = 0;
    let telbool = false;
    for (let i = 0; i < order.length; i++) {
        if (order[i] == 1) {
            tellen++;
        } else {
            tellen = 0;
        }
        if (tellen >= 4) {
            telbool = true;
        }
    }
    if (telbool) {
        document.getElementById('straatKlein').innerHTML = 30;
        totaalOnder += 30;
    }
}

// Het checken van Grote straat
function BigStreet() {
    let order = [0, 0, 0, 0, 0, 0];
    for (let i = 1; i <= 6; i++) {
        for (let j = 0; j <= diceNumbers.length; j++) {
            if (diceNumbers[j] == i) {
                order[i - 1] = 1;
            }
        }
    }
    let tellen = 0;
    let telbool = false;
    for (let i = 0; i < order.length; i++) {
        if (order[i] == 1) {
            tellen++;
        } else {
            tellen = 0;
        }
        if (tellen == 5) {
            telbool = true;
        }
    }
    if (telbool) {
        document.getElementById('straatGroot').innerHTML = 40;
        totaalOnder += 40;
    }
}

// Het checken van Yahtzee
function Yahtzee(number) {
    let same = 0;
    let found = false;
    for (let i = 1; i <= 6; i++) {
        same = 0;
        for (let j = 0; j < diceNumbers.length; j++) {
            if (diceNumbers[j] == i) {
                same++;
            }
        }
        if (same >= number) {
            found = true;
        }
    }
    if (found) {
        document.getElementById("yahtzee").innerHTML = 50;
        totaalOnder += 50;
    }
}

// De functie voor het optellen van de 5 dobbelstenen voor chance
function Chance() {
    let totaal = 0;
    for (let i = 0; i < diceNumbers.length; i++) {
        totaal += diceNumbers[i];
    }
    document.getElementById("chance").innerHTML = totaal;
    totaalOnder += totaal;
}

// De functie voor de totale score
function TotalScore() {
    let totaal = 0;
    for (let i = 1; i <= 6; i++) {
        totaal += parseInt(document.getElementById("score" + i).innerHTML);
    }
    document.getElementById("totalScore").innerHTML = totaal;
    GetBonus(totaal);
}

// De functie voor de bonus te checken
function GetBonus(totaal) {
    if (totaal >= 63) {
        totaal += 35;
        document.getElementById("bonus").innerHTML = 35;
    }
    TotalUp(totaal);
}

// De functie voor het totaal boven
function TotalUp(totaal) {
    document.querySelector(".scoreItem-28").innerHTML = totaal;
    document.querySelector(".scoreItem-53").innerHTML = totaal;
}

// De functie voor het totaal beneden
function TotalUnder() {
    document.getElementById("totalUnder").innerHTML = totaalOnder;
}

// De functie voor het totaal van ALLES
function TotalAll() {
    let totaal = 0;
    totaal += parseInt(document.getElementById("totalUp").innerHTML);
    totaal += parseInt(document.getElementById("totalUnder").innerHTML);
    document.getElementById("totalAll").innerHTML = totaal;
}

// De functie voor het restarten van de game
document.querySelector('.restart').addEventListener('click', function(){
    window.location.reload();
    return false;
  });

// De functie van de roll count
  function rollcount(){
    var oText=document.getElementById("span");
    count -=1;
    oText.innerHTML=count;
    
    if (count === 0){
        count = 3 + 1;
    }
    
    return;
}           ess
    
// Function voor aanroepen van een paar dingen
function myfunction(){
    rollcount();
    DiceRoll();
}