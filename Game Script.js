var c, ctx;
var width, height;
var beginning, playing, gameOver;
var floors, floorImage;
var sky, skyImage;
var pipes, upperPipeImage, lowerPipeImage;
var bird, birdImage;
var score, highScore;

function start() {
    loadGame();
}

function loadGame() {
    c = document.getElementById('game-canvas');
    ctx = c.getContext('2d');

    init();

    setInterval(loop, 33);
}

function init() {
    ctx.font = "40px Georgia";
    ctx.textAlign = "center";
    width = c.width;
    height = c.height;
    keys = new Array(256);
    beginning = true;
    playing = false;
    gameOver = false;
    highScore = 0;
    document.addEventListener('keydown', function (event) {
        if (beginning) {
            beginning = false;
            playing = true;
            bird.t = 0;
            keys[66] = true;
            bird.flapping = true;
        }
        else if (playing) {
            bird.flapping = true;
            bird.t = 0;
            keys[66] = true;
        }
        else if (gameOver) {
            gameOver = false;
            beginning = true;
            resetPositions();
        }
    });
    skyImage = new Image();
    skyImage.src = "Sky.jpg";
    upperPipeImage = new Image();
    upperPipeImage.src = "Upper Pipe.png";
    lowerPipeImage = new Image();
    lowerPipeImage.src = "Lower Pipe.png";
    pipes = new Array(2);
    birdImage = new Image();
    birdImage.src = "Bird.gif";
    floorImage = new Image();
    floorImage.src = "Floor.png";
    floors = new Array(3);
    resetPositions();
}