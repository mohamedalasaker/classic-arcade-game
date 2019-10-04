


// Enemies our player must avoid



class Enemy {
    constructor(x, y, sprite, dt) {
        this.x = x;
        this.y = y;
        this.sprite = sprite;
        this.dt = dt;  
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    update(dt) {
        this.x = this.x + this.dt;


        if (this.x > 550) {
            this.x = -150;
            this.positions = [,55,150,230,310];
            this.math = Math.floor(Math.random() * 4 + 1);
            this.posy = this.positions[this.math];
            this.EnemyPos = this.posy;
            this.y = this.EnemyPos;

            
            
        }


    }



}


class Player {

    constructor() {
        this.x = 220;
        this.y = 470;
        this.sprite = 'images/char-arya.png';
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y, 80, 80);


    }

    update() {
        if (this.y < 55) {
            winner();
            clearInterval(count)
        }
    }



    handleInput(e) {
        if (e == 'left') {
            this.x = this.x - 100;
            if (this.x < 100) {
                this.x = 10;

            }
            // console.log("left")
        }
        if (e == 'right') {
            this.x = this.x + 100;
            if (this.x > 420) {
                this.x = 420;
                if (this.y == 470) {
                    pop();
                }
            }
            // console.log("right")
        }
        if (e == 'up') {
            this.y = this.y - 80;
            if (this.y < 50) {
                this.y = 50;

            }

        }
        if (e == 'down') {
            this.y = this.y + 80;
            if (this.y > 470) {
                this.y = 470;
            }


            // console.log("down")
        }


    }

}

function winner() {

    let con = document.querySelector(".container");
    con.classList.add("c");
    let endGame = document.querySelector(".endGame");
    let canvas = document.querySelector(".canvas")
    let bo = document.querySelector(".bo-win");
    endGame.classList.remove("c");
    bo.classList.remove("c");
    document.body.removeChild(canvas)
    document.body.removeChild(endGame);
    let win = document.querySelector(".win");
    win.classList.remove("c");
    bo.addEventListener("click", function () {
        location.reload()
    })
}
let lives = 3;
let livesHtml = document.querySelector(".lives");
livesHtml.innerHTML = "lives :" + lives;

function reset() {



    player.x = 200;
    player.y = 470;
    lives--;
    livesHtml.innerHTML = "lives :" + lives;
    if (lives == 0) {
        let con = document.querySelector(".container");
        let endGame = document.querySelector(".endGame");
        let bo = document.querySelector(".bo");
        let canvas = document.querySelector(".canvas");
        con.classList.add("c");
        endGame.classList.remove("c");
        bo.classList.remove("c");
        canvas.classList.add("c");
        clearInterval(count);


        bo.addEventListener("click", function () {
            location.reload()
        })


    }
}


let time = document.querySelector(".timer");

let sec = 0;
let min = 0;
let int

let count = setInterval(timer, 1000);
function timer() {
    sec++
    if (sec == 60) {
        min++
        sec = 0;
    }
    time.innerHTML = min + ":" + sec;

}




let model = document.getElementById("popup1")

function pop() {
    model.classList.add("show");


}



function closeModel() {
    model.classList.remove("show");
}
class Selector {
    constructor() {
        this.x = 405;
        this.y = 390;
        this.sprite = 'images/Selector.png';

    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}


let allEnemies = [
    new Enemy(-10, 55, 'images/enemy-bug.png', 5), // top
    new Enemy(-10, 150,'images/enemy-bug.png', 3),// second
    new Enemy(-10, 230, 'images/enemy-bug.png', 4), // third
    new Enemy(-10, 310, 'images/enemy-bug.png', 2), //forth

];

let player = new Player();
let selector = new Selector();





function iron() {
    let iron = document.getElementById("iron");
    let ironsrc = iron.getAttribute("src");
    player.sprite = ironsrc;
    closeModel()
}
function eleven() {
    let eleven = document.getElementById("eleven");
    let elevensrc = eleven.getAttribute("src");
    player.sprite = elevensrc;
    closeModel()
}
function arya() {
    let arya = document.getElementById("arya");
    let aryasrc = arya.getAttribute("src");
    player.sprite = aryasrc;
    closeModel()
}
function spong() {
    let spong = document.getElementById("spong");
    let spongsrc = spong.getAttribute("src");
    player.sprite = spongsrc;
    closeModel()

}



document.addEventListener('keydown', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

