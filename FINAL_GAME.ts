const readlineSync = require('readline-sync');

function menu() {
    console.log('Welcome to the Game');
    let options = ['Start Game', 'Exit'];
    let choix = readlineSync.keyInSelect(options, "Player Choice");

    if (choix === 0) {
        console.log('Starting the game...');
        console.log('Ready, Set, Go!');
        playerInput('Start Game');
    } else if (choix === 1) {
        console.log('Exiting the game.');
        process.exit(0);
    }
}

function playerInput(choix: string) {
    if (choix === "Start Game") {
        console.log('Choose your level of difficulty');
        console.log('1. Normal');
        console.log('2. Difficult');
        console.log('3. Insane');
    } else if (choix === "Exit") {
        console.log('Exiting the Game');
    } else if (choix === "1" || choix === "2" || choix === "3") {
        const diff = ["Normal", "Difficult", "Insane"];
        let index = readlineSync.keyInSelect(diff, 'How difficult?');
        console.log("Starting Game, Let's Play !");
        LetsPlay();
    } else {
        console.log("Invalid Choice! Please Try Again");
    }
}

function heal() {
    myHero.char_current_hp += myHero.char_current_hp / 2;
    console.log('You used heal!');
}

function attack() {
    const damage = myHero.char_str;
    miniEnemy.char_current_hp -= damage;
    console.log(`${myHero.char_name} attacks ${miniEnemy.char_name}`);
}

const myHero = {
    char_name: 'Link',
    char_max_hp: 60,
    char_current_hp: 60,
    char_str: 15,
}

const miniEnemy = {
    char_name: 'Bokoblin',
    char_max_hp: 30,
    char_current_hp: 30,
    char_str: 5,
}

const bigBoss = {
    char_name: 'Ganon',
    char_max_hp: 150,
    char_current_hp: 150,
    char_str: 20,
}


function LetsPlay() {
    console.log('Welcome to the Game');
    menu();

    let j = 0;

    while (j < 10) {
        console.log('Fight ' + j);

        const combatAction = readlineSync.question('Choose your action wisely, Attack or Heal? ');

        if (combatAction === 'Attack') {
            attack();
            if (miniEnemy.char_current_hp <= 0) {
                console.log(`${miniEnemy.char_name} is defeated!`);
            } else {
                attack();
            }
        } else if (combatAction === 'Heal') {
            heal();
            attack();
        }

        if (myHero.char_current_hp <= 0) {
            console.log('Game Over.');
            return;
        }

        if (miniEnemy.char_current_hp <= 0) {
            console.log('Get Ready! We\'re Reaching the next fight...');
            j++;
        }

        if (j === 10 && bigBoss.char_current_hp <= 0) {
            console.log('Congratulations! You have defeated the Big Boss and won the game!');
            return;
        }
    }
}

LetsPlay();
