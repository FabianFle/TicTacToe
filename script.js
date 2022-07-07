let fields = [];
let gameOver = false;
let currentShape = 'cross'

let playerOne = [];
let playerTow = [];


function fillShape(id) {
    if (!fields[id] && !gameOver) {
        fields[id] = currentShape;
        if (currentShape == 'cross') {
            currentShape = 'circle';
            document.getElementById('player1').classList.remove('playerInactive');
            document.getElementById('player2').classList.add('playerInactive');
        } else {
            currentShape = 'cross';
            document.getElementById('player1').classList.add('playerInactive');
            document.getElementById('player2').classList.remove('playerInactive');
        }
        checkForWin();
        draw();
    }
}

function restart() {
    gameOver = false;
    fields = [];

    for (let i = 0; i < 8; i++) {
        document.getElementById('line' + i).style.transform = ('scaleX(0)');
    }

    for (let i = 0; i < 9; i++) {
        document.getElementById('circle-' + i).classList.add('d-none');
        document.getElementById('cross-' + i).classList.add('d-none');
    }
    document.getElementById('gameOverImg').classList.add('d-none');
    document.getElementById('gameOver').classList.add('d-none');
}


function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById('circle-' + i).classList.remove('d-none');
        }

        if (fields[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');
        }
    }
    checkForWin();
}

function checkForWin() {
    let winner;

    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        document.getElementById('line0').style.transform = 'scaleX(1)';
    }

    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line1').style.transform = 'scaleX(1)';
    }

    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line2').style.transform = 'scaleX(1)';
    }

    //################################################################################

    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line3').style.transform = 'rotate(90deg) scaleX(1)';
    }

    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line4').style.transform = 'rotate(90deg) scaleX(1)';
    }

    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line5').style.transform = 'rotate(90deg) scaleX(1)';
    }

    //################################################################################

    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line6').style.transform = 'rotate(45deg) scaleX(1.2)';
    }

    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('line7').style.transform = 'rotate(-45deg) scaleX(1.2)';
    }

    if (!!winner) {
        gameOver = true;
        setTimeout(function(){
            document.getElementById('gameOverImg').classList.remove('d-none');
            document.getElementById('gameOver').classList.remove('d-none');
        }, 800);
    }
}