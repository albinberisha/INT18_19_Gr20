var c, ctx;
var width, height;
var beginning, playing, gameOver;
var floors, floorImage;
var sky, skyImage;
var pipes, upperPipeImage, lowerPipeImage;
var bird, birdImage;
var score, highScore, allTimeHighScore;

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
    if(sessionStorage.getItem("highScore") == "[object Undefined]") {
        highScore = 0;
        sessionStorage.setItem("highScore", toString(highScore));
    }
    else
        highScore = sessionStorage.getItem("highScore");
    if(localStorage.getItem("allTimeHighScore") == "[object Undefined]") {
        allTimeHighScore = 0;
        localStorage.setItem("allTimeHighScore", toString(allTimeHighScore));
    }
    document.addEventListener('keydown', function (event) {
        if (beginning && event.keyCode == 66) {
            beginning = false;
            playing = true;
            bird.t = 0;
            keys[66] = true;
            bird.flapping = true;
        }
        else if (playing && event.keyCode == 66) {
            bird.flapping = true;
            bird.t = 0;
            keys[66] = true;
        }
        else if (gameOver && event.keyCode == 65) {
            gameOver = false;
            beginning = true;
            resetPositions();
        }
    });
    skyImage = new Image();
    skyImage.src = "Images/Products/Galaxy Note9/Game/Sky.jpg";
    upperPipeImage = new Image();
    upperPipeImage.src = "Images/Products/Galaxy Note9/Game/Upper Pipe.png";
    lowerPipeImage = new Image();
    lowerPipeImage.src = "Images/Products/Galaxy Note9/Game/Lower Pipe.png";
    pipes = new Array(2);
    birdImage = new Image();
    birdImage.src = "Images/Products/Galaxy Note9/Game/Bird.gif";
    floorImage = new Image();
    floorImage.src = "Images/Products/Galaxy Note9/Game/Floor.png";
    floors = new Array(3);
    resetPositions();
}

function loop() {
    if (beginning) {
        clearScreen();
        draw();
        ctx.fillStyle = "rgb(255, 215, 0)";
        ctx.fillText("Tap 'b' to flap...", 135, 300, 200);
    }
    else if (playing) {
        clearScreen();
        draw();
        update();
        showScore();
    }
    else if (gameOver) {
        ctx.fillStyle = "#ff0000";
        ctx.fillText("Game Over", 135, 200, 200);
        ctx.fillStyle = "black";
        ctx.fillText("Score: " + score, 135, 300, 200);
        ctx.fillText("High Score: " + highScore, 135, 350, 200);
        ctx.fillText("All Time High Score: " + allTimeHighScore, 135, 400, 200);
    }
}

function clearScreen() {
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, width, height);
}

function draw() {
    sky.draw();
    pipes[0].draw();
    pipes[1].draw();
    bird.draw();
    for (var i = 0; i < 3; i++)
        floors[i].draw();
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, 270, 38);
}

function showScore() {
    ctx.fillStyle = "rgb(255, 215, 0)";
    ctx.fillText(score, 135, 100, 100);
}

function update() {
    pipes[0].move(-3);
    pipes[1].move(-3);
    if (bird.flapping)
        bird.flap();
    for (var i = 0; i < 3; i++) {
        floors[i].move(-3);
        if (floors[i].x + floors[i].width <= 0)
            floors[i].x = width;
    }
    for (var i = 0; i < 2; i++) {
        if (pipes[i].lowerPipe.x + pipes[i].lowerPipe.width <= 0) {
            pipes[i].lowerPipe.x = 340;
            pipes[i].upperPipe.x = 340;
            var randomHeight = Math.random() * 51;
            pipes[i].lowerPipe.y = 235 + randomHeight;
            pipes[i].upperPipe.y = -13 + randomHeight;
        }
        if (pipes[i].lowerPipe.x >= 50 && pipes[i].lowerPipe.x < 53)
            score++;
        if (pipes[i].lowerPipe.x >= 25 && pipes[i].lowerPipe.x < 85 && (bird.y < pipes[i].upperPipe.y + pipes[i].upperPipe.height || bird.y + 30 > pipes[i].lowerPipe.y)) {
            playing = false;
            gameOver = true;
            draw();
            if (score > parseInt(localStorage.getItem("allTimeHighScore"), 10)) {
                allTimeHighScore = score;
                localStorage.setItem("allTimeHighScore", score.toString(10));
            }
            if (score > parseInt(sessionStorage.getItem("highScore"), 10)) {
                highScore = score;
                sessionStorage.setItem("highScore", score.toString(10));
            }
        }
    }
}

function resetPositions() {
    sky = {
        image: skyImage,
        draw: function () {
            ctx.drawImage(this.image, 400, 0, 270, 480, 0, 38, 270, 480);
        }
    };
    pipes[0] = new UpperAndLowerPipe(new Pipe(300, -51 + 38 + 0.5 * 51, 60, 148, upperPipeImage), new Pipe(300, -51 + 38 + 148 + 100 + 0.5 * 51, 60, 148, lowerPipeImage));
    pipes[1] = new UpperAndLowerPipe(new Pipe(500, -51 + 38 + 0.1 * 51, 60, 148, upperPipeImage), new Pipe(500, -51 + 38 + 148 + 100 + 0.1 * 51, 60, 148, lowerPipeImage));
    floors[0] = new Floor(width / 2, 0, floorImage);
    floors[1] = new Floor(width / 2, width / 2, floorImage);
    floors[2] = new Floor(width / 2, width, floorImage);
    bird = new Bird(60, 200, 30, 30, birdImage);
    score = 0;
}

function Floor(width, x, image) {
    this.width = width;
    this.x = x;
    this.y = 383;
    this.image = image;

    this.draw = function () {
        ctx.drawImage(this.image, this.x, this.y);
    }
    this.move = function (mx) {
        this.x += mx;
    }
}

function Pipe(x, y, width, height, image) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = image;

    this.draw = function () {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    this.move = function (mx) {
        this.x += mx;
    }
}

function UpperAndLowerPipe(upperPipe, lowerPipe) {
    this.upperPipe = upperPipe;
    this.lowerPipe = lowerPipe;

    this.draw = function () {
        this.upperPipe.draw();
        this.lowerPipe.draw();
    }
    this.move = function (mx) {
        this.upperPipe.move(mx);
        this.lowerPipe.move(mx);
    }
}

function Bird(x, y, width, height, image) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = image;
    this.velocity0 = 10;
    this.velocity = 0;
    this.t = 0;
    this.flapping = false;

    this.draw = function () {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    this.move = function (mx, my) {
        this.x += mx;
        this.y += my;
    }
    this.flap = function () {
        var gravity = 9.81;
        if (this.y + this.height < 383) {
            this.velocity = this.velocity0 - gravity * this.t;
            this.move(0, -this.velocity);
        }
        else {
            this.y = 383 - this.height;
            this.draw();
            gameOver = true;
            playing = false;
            if (score > parseInt(localStorage.getItem("allTimeHighScore"), 10)) {
                allTimeHighScore = score;
                localStorage.setItem("allTimeHighScore", score.toString(10));
            }
            if (score > parseInt(sessionStorage.getItem("highScore"), 10)) {
                highScore = score;
                sessionStorage.setItem("highScore", score.toString(10));
            }
        }
        this.t += 0.1;
    }
}