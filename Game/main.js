//Импортируем необходимые модули

const readLineSync = require('readline-sync');

//Импортируем игровые модули
const runGuessTheNumber = require('./guess-the-number/game');
const runTicTacToe = require('./tic-tac-toe/game');
const runRockPaperScissors = require('./rock-paper-scissors/game');

//Контроллер игрового цикла

let keepPlaying = true;

//Основной цикл меню.Будет продолжаться, пока игрок не захочет выйти

while (keepPlaying) {
    console.clear();
    console.log("=============================");
    console.log("=   WELKOME TO THE GAME     =");
    console.log("=============================");
    console.log("Which game mode do you want to play?");


    const games = [
        'Guess the Number',
        'Tic Tac Toe',
        'Rock Paper Scissors'
    
    ];

    //отображаем доступные игры
    const index = readLineSync.keyInSelect(games, 'Choose a game or exit:');
    //в зависимости от выбора игрока запускаем соответствующую игру
    switch (index) {
        case 0:
            runGuessTheNumber();
            break;
            case 1:
                runTicTacToe();

                break;
                case 2:
                    runRockPaperScissors();
                    break;

            //Дальше будет добавлятся новые игры
            default:
                console.log("Exiting the game. Goodbye!");
                keepPlaying = false;
                break;
    }
    //после завершения игры спрашиваем, хочет ли игрок снова сыграть
    if (keepPlaying) {
        if (!readLineSync.keyInYN('Do you want to another game?')) {
            keepPlaying = false;
            console.log("Goodbye!");

        }
    }


}
