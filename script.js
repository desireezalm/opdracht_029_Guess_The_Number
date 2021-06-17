// GUESS THE NUMBER GAME

let onderLimiet = 0;
let bovenLimiet = 25;
let aantalPogingen = 5;
let resultaat = Math.floor(Math.random() * (bovenLimiet - onderLimiet + 1)) + onderLimiet;
let poging = '';



// SCRIPT

let naam = prompt("Welkom! Wat is je naam?", "Naam");

alert("Hey " + naam + "!");

while (aantalPogingen != 0) {
    poging = prompt("Voer een nummer in van 0 tot 25 (om te beginnen met raden)...", poging);
    
    if (poging == null) {
        alert('Je geeft het op.');
        break;
    }
    else if (isFinite(poging) && poging != '') {
        
        poging = +poging;
        
        if (poging < onderLimiet | poging > bovenLimiet) {
            alert('Het getal moet binnen de 0 en 25 vallen.');
        }
        else if (poging !== resultaat && aantalPogingen == 0) {
            alert('Dat is niet correct.');
        }
        else if (poging !== resultaat && aantalPogingen !== 0) {
            alert('Dat is niet correct.');
            alert('Je hebt nog ' + (aantalPogingen - 1) + ' pogingen over.');
            alert('Probeer het opnieuw.');
        }
        else if (poging == resultaat) {
            alert('Gefeliciteerd, je hebt gewonnen!');
            break;
        }
    }
    else {
        alert('Alleen nummers zijn geldig als antwoord.');
    }
    
    aantalPogingen = aantalPogingen - 1;
}

if (aantalPogingen == 0) {
    alert('Je hebt geen pogingen meer. Het nummer was ' + resultaat + '.');
}

alert("Het spel is afgelopen. Dag " + naam + ", tot de volgende keer.");