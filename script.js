document.addEventListener('DOMContentLoaded', () => {
    const diceContainer = document.getElementById('dice-container');
    const rollDiceButton = document.getElementById('roll-dice');
    const endTurnButton = document.getElementById('end-turn');

    const dice = [];
    const numberOfDice = 5;

    //Creating dice elements
    for (let i = 0; i < numberOfDice; i++) {
        const die = document.createElement('div');
        die.classList.add('die');
        die.dataset.value = 1; //Starting value
        die.textContent = die.dataset.value;
        diceContainer.appendChild(die);
        dice.push(die);
    }

    //Roll dice
    rollDiceButton.addEventListener('click', () => {
        dice.forEach(die => {
            const newValue = Math.floor(Math.random() * 6) + 1;
            die.dataset.value = newValue;
            die.textContent = newValue;
        });
    });

    //End turn
    endTurnButton.addEventListener('click', () => {
        alert('End of turn. Score will be calculated here.');
        //Logic for ending turn and scoring
    });
});
