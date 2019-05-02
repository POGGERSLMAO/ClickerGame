console.log("Yo whats poppin'");

let gameButton = document.getElementById("game");
let bankElement = document.getElementById("bank");
let powerupsDiv  = document.getElementById("powerups");

let bank = 0;
let powerupvalue = 0;
let pupCost = 10;
let pupCost2 = 20;
let clickValue1=1;
let clickValue = 0;
let clickValue2 = 0;
let pupCost3 = 200;
let pupCost4 = 1000;

gameButton.addEventListener('click',function(){
    bank+=clickValue1;
    gameButton.textContent = Math.floor(bank);
});

let powerup = document.createElement("button");
powerup.textContent = "small brain "+pupCost;
powerup.addEventListener('click', function(){
    if (bank >= pupCost){
        bank = bank-pupCost;
        pupCost = pupCost*12;
        bank = bank*10;
        powerup.textContent = "small brain " + pupCost;
        bankElement.textContent = "You're filled with joy as you buy a new small brain!"
    } else{
        bankElement.textContent = "I mean you seem pretty desperate to buy a small brain!" 
    }
});

powerupsDiv.appendChild(powerup);
    
    let powerup2 = document.createElement("button");
    powerup2.textContent = "brain "+ pupCost2;
    powerup2.addEventListener('click', function(){
        if (bank >= pupCost2){
            bank = bank-pupCost2;
            pupCost2 = pupCost2*7;
            clickValue=clickValue*2;
            powerup2.textContent = "brain  " + pupCost2;
            bankElement.textContent = "You bought brain!"
        } else{
            bankElement.textContent = "You cant afford brain!" 
        }
    });
    powerupsDiv.appendChild(powerup2);
    
    
    let powerup3 = document.createElement("button");
        powerup3.textContent= "bigger brain " + pupCost3;   
        powerup3.addEventListener('click', () => {
            if (bank >= pupCost3) {
                bank -= pupCost3;
                clickValue++;
                powerupvalue+=0.3*clickValue;
                pupCost3 = pupCost3 * 10;
                powerup3.textContent= "bigger brain "+pupCost3;
                bankElement.textContent = "You bought a bigger brain!"
            } else{
                bankElement.textContent = "You cant afford a bigger brain!" 
            }
        });
    
    function step() {
        bank += powerupvalue;
        game.textContent = Math.floor(bank);
        window.requestAnimationFrame(step);
    }
    
    window.requestAnimationFrame(step);
    
    powerupsDiv.appendChild(powerup3);

    let powerup4 = document.createElement("button");
        powerup4.textContent= "eggot " + pupCost4;   
        powerup4.addEventListener('click', () => {
            if (bank >= pupCost4){ 
                bank -= pupCost4;
                clickValue++;
                powerupvalue+=0.6 * clickValue2;
                pupCost4 = pupCost4 * 11 * clickValue;
                powerup4.textContent= "eggot "+pupCost4;
                bankElement.textContent = "You bought Eggot!"
            } else{
                bankElement.textContent = "You cant afford eggot you monk!" 
            }
        });
    
    function step() {
        bank += powerupvalue;
        game.textContent = Math.floor(bank);
        window.requestAnimationFrame(step);
    }
    
    window.requestAnimationFrame(step);
    
    powerupsDiv.appendChild(powerup4);